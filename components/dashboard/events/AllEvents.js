import { TableBody, TableCell, TableRow } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import useTable from "../../../components/common/table/useTable";

const Wrapper = styled.div``;
const headCells = [
  { id: "user._id", label: "USER ID" },
  { id: "user.name", label: "USER NAME" },
  { id: "zipcode", label: "ZIP CODE" },
  { id: "numberOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "DATE" },
  { id: "type", label: "TYPE" },
  { id: "link", label: "" },
];
function AllEvents({ error, loading, data }) {
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

  return (
    <Wrapper>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>Fetching failed</p>
      ) : data ? (
        <div className="paper">
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
                          type: "pickup",
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
          <TblPagination />
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

AllEvents.propTypes = {};

export { AllEvents };
