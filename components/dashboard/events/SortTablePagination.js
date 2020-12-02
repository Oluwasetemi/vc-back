import {
  makeStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import HeightIcon from "@material-ui/icons/Height";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
.paper{
  background-color: #fff;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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
`;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead({ headCells, ...props }) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              IconComponent={HeightIcon}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  headCells: PropTypes.array.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function SortTablePagination({ rows, paper, headCells }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("userEmail");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.userId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, userId) => {
    const selectedIndex = selected.indexOf(userId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (userId) => selected.indexOf(userId) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Wrapper className={classes.root}>
      <div className={`${paper}`}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table className={classes.table}>
            <EnhancedTableHead
              headCells={headCells}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.userId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.userId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.userId}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.userId}
                      </TableCell>
                      <TableCell>{row.userEmail}</TableCell>
                      <TableCell>{row.zipCode}</TableCell>
                      <TableCell>{row.noOfItems}</TableCell>
                      {row.location && <TableCell>{row.location}</TableCell>}
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.link}</TableCell>
                    </TableRow>
                  );
                })}
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

SortTablePagination.propTypes = {
  rows: PropTypes.array.isRequired,
  headCells: PropTypes.array.isRequired,
  paper: PropTypes.string,
};
