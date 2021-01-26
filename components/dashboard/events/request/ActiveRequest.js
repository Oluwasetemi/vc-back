import useTable from "../../../../components/common/table/useTable";
import React, { useState } from "react";
import {  TableBody, TableRow, TableCell } from "@material-ui/core";
import Link from "next/link";
import Button from "../../../../components/common/Button";
import PropTypes from "prop-types";
import searchIcon from "../../../../public/assets/searchIcon.svg";
import prev from "../../../../public/assets/PreviousPageButton.svg";
import next from "../../../../public/assets/NextPageButton.svg";

const headCells = [
	{ id: "user._id", label: "USER ID" },
	{ id: "user.name", label: "USER NAME" },
  { id: "zipcode", label: "ZIP CODE" },
  { id: "numberOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "DATE" },
  { id: "type", label: "TYPE" },
  { id: "link", label: "" },
];
function ActiveRequest({error, loading, data}, ...props) {
  
	const [records] = useState(
		data && data.fetchAllRequest.data
	  );
	  const {
		TblContainer,
		TblHead,

	  } = useTable(records, headCells);

      //pagination
  const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRecords =
    data && data.fetchAllRequest.data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(data && data.fetchAllRequest.data.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <div className="searchbar">
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search" onChange={handleSearch} value={value} />
        </div> */}
           {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>Fetching failed</p>
        ) : data ? (
          <div className="paper">
            <TblContainer>
              <TblHead />
              <TableBody>
                {currentRecords.map((item) => {
					return item.status === "Active" && (
                  <TableRow key={item._id}>
                    <TableCell>{item.user._id.substring(0, 8)}</TableCell>
                    <TableCell>{item.user.name}</TableCell>
                    <TableCell>{item.zipcode ? item.zipcode: '10235'}</TableCell>
					<TableCell>{item.numberOfItems}</TableCell>
					<TableCell>{item.createdAt.substring(0, 10)}</TableCell>
					<TableCell><span className="status">{item.type}</span></TableCell>
					<TableCell>
                      {" "}
                      <Link className="btn" href={{
                        pathname: `/requests/${item.type.toLowerCase()}Request`,
                        query: {
                          type: item.type,
                          id: item._id,
                        },
                      }}>
                        <Button theme="pinkBtn">View</Button>
                      </Link>
                    </TableCell> 
                   
                  </TableRow>
				  ) 
                })}
              </TableBody>
            </TblContainer>
             
          </div>
        ) : (
          "no data"
        )}
         <div className="flex pagination">
          <img src={prev} alt="prev"
            onClick={() =>
              currentPage === 1 ? currentPage : setCurrentPage(currentPage - 1)
            }/
          >
            

          <div className="page">{`page ${currentPage} of ${pageNumbers.length} `}</div>
          <img src={next} alt="next"
            onClick={() =>
              currentPage < pageNumbers.length
                ? setCurrentPage(currentPage + 1)
                : currentPage
            }/
          >
            
        </div>
    </>
  );
}

ActiveRequest.propTypes = {};

export {ActiveRequest};
