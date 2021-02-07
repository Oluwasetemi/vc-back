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

const SingleItem = ({ name, id, onChange, checked }) => (
    // console.log
    <div className="grid-items">
        <div className="product">
            <div className="checked absolute">
                <CheckboxInput
                    id={id}
                    name={id}
                    onChange={onChange}
                    checked={checked}
                />
            </div>{" "}
            <div className="image image2" />
        </div>
        <p className="name text">{name}</p>
        <p className="id text">ID: {id.slice(-7)}</p>
    </div>
);
SingleItem.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
};

function CreateAnOutfit(props) {
    const [outfitName, setOutfitName] = useState({ name: "", items: [] });

    const [checkBoxState, setCheckBoxState] = React.useState({});
    const handleChangeName = (event) => {
        const { target } = event;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        setCheckBoxState({ ...checkBoxState, [name]: value });
    };

    const { query } = useRouter();
    const { id, userid } = query;
    const { data, loading, error } = useQuery(SINGLE_USER, {
        variables: { id: userid },
    });
    // console.log(data);
    const handleChange = (e) => {
        // console.log(checkBoxState);
        setOutfitName({
            name: e.target.value,
            // items: Array.isArray(outfitName.items) ? outfitName.items.push(checkBoxState) : [],
        });
        // const itemArray = outfitName.items;
    };

    return (
        <Wrapper>
            <DashboardLayout>
                <Breadcrumbs
                    className="bread-crumbs"
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <LinkMaterial
                        className="crumbs"
                        color="inherit"
                        href="/dashboard"
                    >
                        Home
                    </LinkMaterial>
                    <LinkMaterial
                        className="crumbs"
                        color="inherit"
                        href="/clients"
                    >
                        Clients
                    </LinkMaterial>

                    <Link
                        className="crumbs"
                        color="inherit"
                        href={{
                            pathname: "/clients/client",
                            query: { id: userid },
                        }}
                    >
                        {loading
                            ? "loading"
                            : error
                            ? "no data"
                            : data.userById.name}
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
                                {!loading && !error
                                    ? data.userById.name.substring(0, 2)
                                    : "JT"}
                            </p>
                        </div>
                        <div className="names">
                            <p className="name">
                                {loading
                                    ? "loading"
                                    : error
                                    ? "no data"
                                    : data.userById.name}
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
                                            : data.userById.outfit &&
                                              data.userById.outfit.length}
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
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            console.log(checkBoxState);

                            //convert checkBoxState object to array
                            
                            const arr = Array.from(
                                Object.keys(checkBoxState),
                                (k) => [`${k}`, checkBoxState[k]]
                            );
                            console.log(arr);

                            setOutfitName({
                                items: Array.isArray(outfitName.items)
                                    ? outfitName.items.push(checkBoxState)
                                    : [],
                            });
                            console.log([outfitName.name, arr]);
                            console.log(arr[0])
                        }}
                    >
                        <div className="text-input mt-10">
                            <TextInput
                                label="Enter Outfit Name"
                                name="outfit"
                                value={outfitName.outfit}
                                onChange={handleChange}
                                type="text"
                                placeholder="Outfit Name"
                            />
                        </div>
                        <div className="scroll">
                            <div className="grid">
                                {data && data.userById.closet === null ? (
                                    <p>No items in the user closet</p>
                                ) : (
                                    data &&
                                    data.userById.closet.items.map((item) => (
                                        <SingleItem
                                            name={item.name}
                                            id={item._id}
                                            key={item._id}
                                            onChange={handleChangeName}
                                            checked={checkBoxState[item._id]}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </DashboardLayout>
        </Wrapper>
    );
}

CreateAnOutfit.propTypes = {};

export default CreateAnOutfit;
