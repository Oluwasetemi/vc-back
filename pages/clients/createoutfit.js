import { gql, useMutation, useQuery } from '@apollo/client';
import Button from '@components/common/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CheckboxInput, TextInput } from '@components/dashboard/inputs';
import DashboardLayout from '@components/layout/DashboardLayout';
import Wrapper from '@components/styles/OutfitStyles';
import { SINGLE_USER } from './client';

const CREATE_OUTFIT = gql`
    mutation CREATE_OUTFIT($items: [String], $name: String, $userId: String) {
        createOutfit(items: $items, name: $name, userId: $userId) {
            message
        }
    }
`;

const SingleItem = ({ name, id, onChange, checked }) => (
    // console.log
    <div className="grid-items">
        <div className="product">
            <div className="checked absolute">
                <CheckboxInput id={id} name={id} onChange={onChange} checked={checked} />
            </div>{' '}
            <div className="image image2" />
        </div>
        <p className="name text">{name}</p>
        <p className="id text">ID: {id.slice(-7)}</p>
    </div>
);
SingleItem.propTypes = {
    checked: PropTypes.any,
    id: PropTypes.shape({
        slice: PropTypes.func,
    }),
    name: PropTypes.any,
    onChange: PropTypes.any,
};

function CreateAnOutfit(props) {
    const { query } = useRouter();
    const { userid } = query;
    const { data, loading, error } = useQuery(SINGLE_USER, {
        variables: { id: userid },
    });
    // console.log(data);

    const [outfitName, setOutfitName] = useState({ name: '', items: [], userId: userid });

    const [checkBoxState, setCheckBoxState] = React.useState({});

    const handleChangeName = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setCheckBoxState({ ...checkBoxState, [name]: value });
    };

    const handleChange = (e) => {
        setOutfitName({
            name: e.target.value,
            // items: Array.isArray(outfitName.items) ? outfitName.items.push(checkBoxState) : [],
        });
        // const itemArray = outfitName.items;
    };

    React.useEffect(() => {
        const arr = Object.entries(checkBoxState)
            .filter((k) => {
                if (k[1] === true) {
                    return k[0];
                }
            })
            .map((v) => v[0]);

        setOutfitName({
            name: outfitName.name,
            items: arr,
            userId: userid,
        });
        // return () => {
        //     setOutfitName({
        //         name: '',
        //         items: [],
        //     });
        //     setCheckBoxState({});
        // };
    }, [outfitName.name, checkBoxState, userid, data && data.userById]);

    const [createOutfitMutation, { loading: loadingCreateOutfit, error: errorCreateOutfit }] = useMutation(
        CREATE_OUTFIT,
        {
            variables: { items: outfitName.items, name: outfitName.name, userId: outfitName.userId },
            refetchQueries: [{ query: SINGLE_USER, variables: { id: userid } }],
        },
    );

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
                        href={{
                            pathname: '/clients/client',
                            query: { id: userid },
                        }}
                    >
                        {loading ? 'loading' : error ? 'no data' : data.userById.name}
                    </Link>
                    <LinkMaterial className="crumbs" color="textPrimary">
                        Create an Outfit
                    </LinkMaterial>
                </Breadcrumbs>
                <h3 className="title">Create an Outfit</h3>
                <div className="paper flex user-details wrap ">
                    <div className="lhs flex">
                        <div className="dp flex">
                            <p className="initials">{!loading && !error ? data.userById.name.substring(0, 2) : 'JT'}</p>
                        </div>
                        <div className="names">
                            <p className="name">{loading ? 'loading' : error ? 'no data' : data.userById.name}</p>
                            <p className="id">
                                User ID: {loading ? 'loading' : error ? 'no data' : data.userById._id.slice(-7)}
                            </p>
                        </div>
                    </div>
                    <div className="lhs rhs">
                        <div className="full-detail grid">
                            <div className="rhs">
                                <div className="list grid first">
                                    <p className="text">Items in closet</p>
                                    <p className="text bold">
                                        {loading ? 'loading' : error ? 'no data' : data.userById.currentClosetSize}
                                    </p>
                                </div>
                                <div className="list grid">
                                    <p className="text">Outfits</p>
                                    <p className="text bold">
                                        {loading
                                            ? 'loading'
                                            : error
                                            ? 'no data'
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
                    <form
                        onSubmit={async (e) => {
                            try {
                                e.preventDefault();

                                // console.log(outfitName);
                                // debugger;
                                // console.log(res);
                                const res = await createOutfitMutation();
                                alert(res.data.createOutfit.message);
                                setOutfitName({
                                    name: '',
                                    items: [],
                                });
                                setCheckBoxState({});
                            } catch (error) {
                                alert(error.message);
                            }
                        }}
                    >
                        <div className="flex top-with-btn-flex">
                            <h1>Items</h1>
                            <Button type="submit" theme="orange">
                                Create an outfit
                            </Button>
                        </div>
                        <div className="text-input mt-10">
                            <TextInput
                                label="Enter Outfit Name"
                                name="outfit"
                                value={outfitName.name}
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
