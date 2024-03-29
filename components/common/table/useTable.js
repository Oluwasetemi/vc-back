import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core';
import React, { useState } from 'react';

export default function useTable(records, headCells, filterFn) {
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TblContainer = (props) => <Table>{props.children}</Table>;

    const TblHead = (props) => {
        const handleSortRequest = (cellId) => {
            const isAsc = orderBy === cellId && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId);
        };

        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.disableSorting ? (
                                headCell.label
                            ) : (
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => {
                                        handleSortRequest(headCell.id);
                                    }}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };

    function stableSort(array, comparator) {
        const stabilizedThis = array && array.map((el, index) => [el, index]);
        stabilizedThis &&
            stabilizedThis.sort((a, b) => {
                const order = comparator(a[0], b[0]);
                if (order !== 0) return order;
                return a[1] - b[1];
            });
        return stabilizedThis && stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => stableSort(filterFn.fn(records), getComparator(order, orderBy));

    return {
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting,
    };
}
