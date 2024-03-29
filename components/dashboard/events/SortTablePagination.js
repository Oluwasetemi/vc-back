import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import searchIcon from '@public/assets/searchIcon.svg';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const SearchWraper = styled.div`
position: absolute;
top: 0;
right: 24px;
background: #FFFFFF;
border: 1px solid #9C9B7C;
border-radius: 10px;
padding: 3px 15px;
width: 300px;
@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
  position: relative;
  margin-left: auto;
}
@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
   width: fit-content;
}
}
&:focus-within{
  border: 1px solid #F26144;
}
input{
  outline:none;
 border:none;
font-size: 14px;
line-height: 24px;
font-family: 'Matteo';
padding-left: 8px;

}
`;
const Wrapper = styled.div`
.paper{
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    padding-top: 20px;
  }
}
.status{
	font-size: 12px;
line-height: 16px;
color: #FFFFFF;
background: #9C9B7C;
border-radius: 10px;
padding: 2px 20px;
white-space: nowrap;
}
td .button{
	padding: .4rem 2rem;
}
.MuiTableCell-paddingCheckbox{
  display: none;
}
.MuiTableSortLabel-root{
  font-size: 12px;
line-height: 16px;
color: #4B6962;
font-family: Matteo, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight: normal;
}
.MuiTableCell-root,.MuiTablePagination-caption{
  font-size: 14px;
line-height: 24px;
color: #2F3930;
text-align: left;
padding: 16px 0 16px 30px;
font-weight: 500;
font-family:Matteo, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
tbody .MuiTableRow-root>th{
  padding-left: 30px;
}
.MuiTablePagination-root{
  display: flex;
    justify-content: center;
    margin: 30px 0;
}
.MuiTableRow-root.Mui-selected, .MuiTableRow-root.Mui-selected:hover{
  background-color: rgba(0,0,0,0);
}
.MuiTableContainer-root{
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: .4rem;
  }
    &::-webkit-scrollbar-thumb {
    background-color: #F26144;
    border-radius: 0.5rem;
  }

}
}
table{
  width: 100%;
    border-collapse: collapse;
    min-width: 850px;
}
.MuiTablePagination-root .MuiTablePagination-caption{
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    padding-left: 0;
  }
}
.MuiTablePagination-root .MuiToolbar-gutters, .MuiTablePagination-root .MuiIconButton-root{
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    padding: 0;
  }
}
.MuiTablePagination-root .MuiTablePagination-actions{
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin-left: 0;
  }
}
.MuiTablePagination-root ..MuiTablePagination-input{
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin: 0 15px 0 0px;
  }
}
`;

function EnhancedTableHead({ headCells, ...props }) {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" />
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id}>
                        <TableSortLabel>{headCell.label}</TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    headCells: PropTypes.array.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { value, handleSearch } = props;

    return (
        <SearchWraper>
            <img src={searchIcon} alt="searchIcon" />
            <input placeholder="Search" onChange={handleSearch} value={value} />
        </SearchWraper>
    );
};

export default function SortTablePagination({ rows, linkText, linkTo, paper, headCells }) {
    const [data, setData] = React.useState(rows);
    const [filterData, setFilterData] = React.useState(rows);
    const [searchValue, setSearchValue] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (event) => {
        let filteredDatas = [];
        filteredDatas = data.filter(
            (e) =>
                (e._id && e._id.toString().toLowerCase().includes(searchValue.toLowerCase())) ||
                (e.email && e.email.toLowerCase().includes(searchValue.toLowerCase())) ||
                (e.name && e.name.toLowerCase().includes(searchValue.toLowerCase())),
        );
        setFilterData(filteredDatas);
        setSearchValue(event.target.value);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <Wrapper>
            <div className={`${paper}`}>
                <EnhancedTableToolbar handleSearch={handleSearch} value={searchValue} />
                <TableContainer>
                    <Table>
                        <EnhancedTableHead headCells={headCells} rowCount={rows.length} />
                        <TableBody>
                            {filterData.map((row, index) => (
                                <TableRow hover tabIndex={-1} key={row._id}>
                                    {row.bookingId && (
                                        <TableCell component="th" scope="row" padding="none">
                                            {row.bookingId.substring(0, 7)}
                                        </TableCell>
                                    )}
                                    {row.userId && (
                                        <TableCell component="th" scope="row" padding="none">
                                            {row.userId}
                                        </TableCell>
                                    )}
                                    {row.userEmail && <TableCell>{row.userEmail}</TableCell>}
                                    {row.userName && <TableCell>{row.userName}</TableCell>}
                                    {row._id && (
                                        <TableCell component="th" scope="row" padding="none">
                                            {row._id.substring(0, 7)}
                                        </TableCell>
                                    )}
                                    {row.email && <TableCell>{row.email}</TableCell>}
                                    {row.name && <TableCell>{row.name}</TableCell>}
                                    {row.zipCode && <TableCell>{row.zipCode}</TableCell>}

                                    {row.noOfItems != null ? (
                                        <TableCell>{row.noOfItems}</TableCell>
                                    ) : (
                                        <TableCell> </TableCell>
                                    )}
                                    {row.createdAt != null ? (
                                        <TableCell>{row.createdAt}</TableCell>
                                    ) : (
                                        <TableCell> </TableCell>
                                    )}
                                    {row.location && <TableCell>{row.location}</TableCell>}
                                    {row.date && <TableCell>{row.date}</TableCell>}
                                    {row.joined && <TableCell>{row.joined}</TableCell>}
                                    {row.type && (
                                        <TableCell>
                                            <span className="status">{row.type}</span>
                                        </TableCell>
                                    )}
                                    <TableCell>
                                        <Link className="btn" href={linkTo}>
                                            <Button theme="pinkBtn">{linkText}</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Wrapper>
    );
}
SortTablePagination.defaultProps = {
    linkText: 'view',
    linkTo: '/',
};
SortTablePagination.propTypes = {
    rows: PropTypes.array.isRequired,
    headCells: PropTypes.array.isRequired,
    paper: PropTypes.string,
    linkTo: PropTypes.string,
    linkText: PropTypes.string,
};
