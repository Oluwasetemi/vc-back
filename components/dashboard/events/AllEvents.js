import { TableBody, TableCell, TableRow } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import useTable from "../../../components/common/table/useTable";
import searchIcon from "../../../public/assets/searchIcon.svg";

const Wrapper = styled.div`

`;
const headCells = [
  { id: "user._id", label: "USER ID" },
  { id: "user.name", label: "USER NAME" },
  { id: "zipcode", label: "ZIP CODE" },
  { id: "numberOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "DATE" },
  { id: "type", label: "TYPE" },
  { id: "link", label: "" },
];
function AllEvents({ error, loading, data }, ...props) {
  const { value } = props;

  const [records, setRecords] = useState(data && data.fetchAllRequest.data);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x._id.toLowerCase().includes(target.value) || x.type.toLowerCase().includes(target.value)
          );
      },
    });
  };
  return (
    <Wrapper>
    <div className="searchbar">
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search" onChange={handleSearch} value={value} />
        </div>
        <div className="paper">
        {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>Fetching failed</p>
      ) : data ? (<>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.user._id.substring(0, 8)}</TableCell>
                  <TableCell>{item.user.name}</TableCell>
                  <TableCell>
                    {item.user.zip ? item.user.zip : "10235"}
                  </TableCell>
                  <TableCell>{item.numberOfItems}</TableCell>
                  <TableCell>{item.createdAt.substring(0, 10)}</TableCell>
                  <TableCell>
                    <span className="status">{item.type}</span>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Link
                      className="btn"
                      href={{
                        pathname: `/requests/${item.type.toLowerCase()}Request`,
                        query: {
                          type: item.type,
                          id: item._id,
                        },
                      }}
                    >
                      <Button theme="pinkBtn">View</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination /></>
          ) : (
            ""
          )}
        </div>
      
    </Wrapper>
  );
}

AllEvents.propTypes = {};

export { AllEvents };
