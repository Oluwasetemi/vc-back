import { useQuery } from "@apollo/client";
import Button from "@components/common/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkMaterial from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { CheckboxInput, TextInput } from "../../components/dashboard/inputs";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Wrapper from "../../components/styles/OutfitStyles";
import { SINGLE_USER } from "./client";

const SingleItem = ({ name, id }) => (
  <div className="grid-items">
    <div className="product">
      <div className="checked absolute">
        <CheckboxInput />
      </div>{" "}
      <div className="image image2" />
    </div>
    <p className="name text">{name}</p>
    <p className="id text">ID: {id}</p>
  </div>
);

SingleItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
};

function createAnOutfit(props) {
  const [outfitName, setOutfitName] = useState("");

  const { query } = useRouter();
  const { id, userid } = query;
  const { data, loading, error } = useQuery(SINGLE_USER, {
    variables: { id: userid },
  });
  // console.log(data);
  return (
    <Wrapper>
      <DashboardLayout>
        <Breadcrumbs
          className="bread-crumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <LinkMaterial className="crumbs" color="inherit" href="/dashboard">
            Home
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="inherit" href="/clients">
            Clients
          </LinkMaterial>

          <Link
            className="crumbs"
            color="inherit"
            href={{ pathname: "/clients/client", query: { id: userid } }}
          >
            {loading ? "loading" : error ? "no data" : data.userById.name}
          </Link>
          <LinkMaterial className="crumbs" color="textPrimary">
            Create an Outfit
          </LinkMaterial>
        </Breadcrumbs>
        <h3 className="title">Create an Outfit</h3>
        <div className="paper flex user-details wrap ">
          <div className="lhs flex">
            <div className="dp flex">
              <p className="initials">
                {!loading && !error ? data.userById.name.substring(0, 2) : "JT"}
              </p>
            </div>
            <div className="names">
              <p className="name">
                {loading ? "loading" : error ? "no data" : data.userById.name}
              </p>
              <p className="id">
                User ID:{" "}
                {loading
                  ? "loading"
                  : error
                  ? "no data"
                  : data.userById._id.slice(-7)}
              </p>
            </div>
          </div>
          <div className="lhs rhs">
            <div className="full-detail grid">
              <div className="rhs">
                <div className="list grid first">
                  <p className="text">Items in closet</p>
                  <p className="text bold">
                    {loading
                      ? "loading"
                      : error
                      ? "no data"
                      : data.userById.currentClosetSize}
                  </p>
                </div>
                <div className="list grid">
                  <p className="text">Outfits</p>
                  <p className="text bold">
                    {loading
                      ? "loading"
                      : error
                      ? "no data"
                      : data.userById.outfit && data.userById.outfit.length}
                  </p>
                </div>
              </div>
              <div className="rhs">
                <div className="list grid first">
                  <p className="text">Items in Vault</p>
                  <p className="text bold">no items</p>
                </div>
                <div className="list grid">
                  <p className="text">Pending for storage</p>
                  <p className="text bold">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper paper-tail">
          <div className="flex">
            <h1>Items</h1>
            <Link href="/clients/reviewoutfit">
              <Button theme="orange">Create an outfit</Button>
            </Link>
          </div>
          <form className="text-input mt-10">
            <TextInput
              label="Enter Outfit Name"
              value={outfitName}
              onChange={setOutfitName}
              type="text"
              placeholder="Outfit Name"
            />
          </form>
          <div className="scroll">
            <div className="grid">
              {data && data.userById.closet === null ? (
                <p>No items in the user closet</p>
              ) : (
                data &&
                data.userById.closet.items.map((item) => (
                  <SingleItem
                    name={item.name}
                    id={item._id.slice(-7)}
                    key={item._id}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

createAnOutfit.propTypes = {};

export default createAnOutfit;
