import Link from "next/link";
import React from "react";
import Button from "../../common/Button";
// This is the table constant/settings which needed to render table elements

export const modalEventTableConstants = () => {
  return [
    {
      title: "",
      render: (rowData) => {
        return <span>{rowData["_id"].substring(0,5)}</span>;
      },
    },
    {
      title: "",
      render: (rowData) => {
        return <span>{rowData["user"].email}</span>;
      },
    },
    {
      title: "",
      render: (rowData) => {
        return <span>{rowData["numberOfItems"]} Items</span>;
      },
    },
    {
      title: "",
      render: (rowData) => {
        return <span>{rowData["createdAt"].substring(0,10)}</span>;
      },
    },

    {
      title: "",
      render: (rowData) => {
        return (
          <Link className="btn" href="/calendar/allEvents">
            <Button theme="pinkBtn">View</Button>
          </Link>
        );
      },
    },
  ];
};
