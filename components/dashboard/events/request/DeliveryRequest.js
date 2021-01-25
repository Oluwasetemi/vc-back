import { TableBody, TableCell, TableRow } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../../../components/common/Button";
import useTable from "../../../../components/common/table/useTable";
import searchIcon from "../../../../public/assets/searchIcon.svg";

const headCells = [
  { id: "_id", label: "USER ID" },
  { id: "user.name", label: "USER NAME" },
  { id: "zipcode", label: "ZIP CODE" },
  { id: "numberOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "DATE" },
  { id: "type", label: "TYPE" },
  { id: "link", label: "" },
];
function DeliveryRequest({ error, loading, data} , ...props) {
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
            x._id.toLowerCase().includes(target.value) || x.createdAt.toLowerCase().includes(target.value)
          );
      },
    });
  };
  return (
    <>
    <div className="searchbar">
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search" onChange={handleSearch} value={value} />
        </div>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>Fetching failed</p>
      ) : data ? (
        <div className="paper">
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => {
                return item.type === "Delivery" && (
                  <TableRow key={item._id}>
                    <TableCell>{item._id.substring(0, 8)}</TableCell>
                    <TableCell>{item.user.name}</TableCell>
                    <TableCell>
                      {item.zipcode ? item.zipcode : "10235"}
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
                            type: "Delivery",
                            id: item._id,
                          },
                        }}
                      >
                        <Button theme="pinkBtn">View</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ) 
              })}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </div>
      ) : (
        "no-data"
      )}
    </>
  );
}

DeliveryRequest.propTypes = {};

export { DeliveryRequest };
