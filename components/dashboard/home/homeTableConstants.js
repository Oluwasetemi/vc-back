import Link from "next/link";
import React from "react";
import Button from "../../common/Button";
// This is the table constant/settings which needed to render table elements

export const homeTableConstants = () => {
  return [
    {
      title: "ID",
      render: (rowData) => {
        return <span>{rowData["_id"].substring(0,7)}</span>;
      },
    },
    {
      title: "USER EMAIL",
      render: (rowData) => {
        return <span>{rowData["user"].email}</span>;
      },
    },
    {
      title: "USER NAME",
      render: (rowData) => {
        return <span>{rowData["user"].name}</span>;
      },
    },
    {
      title: "TYPE",
      render: (rowData) => {
        return <span>{rowData["type"]}</span>;
      },
    },
    {
      title: "CREATED",
      render: (rowData) => {
        return <span>{rowData["createdAt"].substring(0,10)}</span>;
      },
    },
    {
      title: "STATUS",
      render: (rowData) => {
        return <span className="status">{rowData["status"]}</span>;
      },
    },
    {
      title: "",
      render: (rowData) => {
        return (
          <Link className="btn" href={{
            pathname: `/requests/${rowData["type"].toLowerCase()}Request`,
            query: {
              type: ["type"],
              id: rowData["_id"],
            },
          }}>
            <Button theme="pinkBtn">View</Button>
          </Link>
        );
      },
    },
  ];
};
