import Link from "next/link";
import Button from "../../common/Button";

export const clientsData = [
  {
    userId: "00450",
    userEmail: "carlson@tucker.com",
    zipCode: "Carlson Tucker",
    noOfItems: "32",
    date: "Today, 2:30 AM ",
    type: <span className="status">Standard</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    userEmail: "carlson@tucker.com",
    zipCode: "Carlson Tucker",
    noOfItems: "22",
    date: "03 Jan 2020, 2:30 AM ",
    type: <span className="status">Standard</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    userEmail: "king@shaun.com",
    zipCode: "Shaun King",
    noOfItems: "11",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Premium</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    userEmail: "ben@shaps.com",
    zipCode: "Ben Shapiro",
    noOfItems: "10",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Standard</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    userEmail: "ben@shaps.com",
    zipCode: "Ben Shapiro",
    noOfItems: "19",
    date: "Today, 2:30 AM ",
    type: <span className="status">Premium</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
];

export const paymentHistoryData = [
  {
    userId: "00450",
    zipCode: "ben tucker",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "carlson tucker",
    noOfItems: "$23.23",
    date: "03 Jan 2020, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "smith tucker",
    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "John Tucker",
    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "Carlson Tucker",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Delivery</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "ben tucker",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "carlson tucker",
    noOfItems: "$23.23",
    date: "03 Jan 2020, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "smith tucker",
    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "John Tucker",
    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Pickup</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    zipCode: "Carlson Tucker",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Delivery</span>,
    link: (
      <Link className="btn" href="/">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
];
export const subscriptionHistoryData = [
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "03 Jan 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "03 Jan 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",

    noOfItems: "$23.23",
    date: "03 Aug 2020, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/clients/client">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
  {
    userId: "00450",
    noOfItems: "$23.23",
    date: "Today, 2:30 AM ",
    type: <span className="status">Subscription</span>,
    link: (
      <Link className="btn" href="/">
        <Button theme="pinkBtn">View</Button>
      </Link>
    ),
  },
];
