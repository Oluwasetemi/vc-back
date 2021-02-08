import { useMutation, useQuery } from '@apollo/client';
import Paper from '@material-ui/core/Paper';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../../../../lib/useForm';
import { SINGLE_REQUEST } from '../../../../pages/requests/unconfirmedpickup';
import { CheckboxInput, SelectInput, Textarea, TextInput } from '../../inputs';
import FileUpload from '../../inputs/FileUpload';

const ADD_ITEM_MUTATION = gql`
    mutation ADD_ITEM_MUTATION($input: addItemInput) {
        addItemToCloset(input: $input) {
            message
        }
    }
`;

const Wrapper = styled.div`
    .MuiBox-root {
        padding: 0;
    }
    .MuiTabs-flexContainer {
        flex-wrap: wrap;
    }
    .MuiTab-root {
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            max-width: fit-content;
            padding: 0;
        }
    }
    .j-end {
        justify-content: flex-end;
        margin-bottom: 30px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            display: block;
        }
        > div {
            width: auto;
        }
        button.add-disabled {
            border: 0;
            color: #fff;
            padding: 7px 35px;
            background-color: #d6d8d3;
        }
        .pinkBtn {
            padding: 7px 35px;
        }
    }
`;

const optionItemType = [
    { value: 'Shirt', text: 'Shirt' },
    { value: 'Shoe', text: 'Shoe' },
    { value: 'Dress', text: 'Dress' },
    { value: 'Pant', text: 'Pant' },
    { value: 'Skirt', text: 'Skirt' },
    { value: 'Accessories', text: 'Accessories' },
    { value: 'Jewelry', text: 'Jewelry' },
    { value: 'Other', text: 'Other' },
];

const Shirt = ['Long Sleeve', 'Short Sleeve', 'Other'];
const Shoe = ['Boot', 'Flat', 'Sandals', 'Heels', 'Sneakers', 'Loafers', 'Other'];
const Dress = ['Long', 'Short', 'Other'];
const Pant = ['Long', 'Short', 'Medium', 'Other'];
const Skirt = ['Long', 'Short', 'Medium', 'Other'];
const Accessories = ['Purse', 'Bag', 'Belt', 'Hat', 'Scarf', 'Tie', 'Other'];
const Jewelry = ['Pendant', 'Watch', 'Bracelets', 'Earrings', 'Necklace', 'Cufflinks', 'Other'];
const Other = ['Other'];

const feature = {
    Shirt,
    Shoe,
    Dress,
    Skirt,
    Accessories,
    Jewelry,
    Pant,
    Other,
};

const optionItemMaterial = [
    { value: 'Cotton', text: 'Cotton' },
    { value: 'Satin', text: 'Satin' },
    { value: 'Wool', text: 'Wool' },
    { value: 'Silk', text: 'Silk' },
    { value: 'Leather', text: 'Leather' },
    { value: 'Fur', text: 'Fur' },
    { value: 'Nylon', text: 'Nylon' },
    { value: 'Polyester', text: 'Polyester' },
    { value: 'Metal', text: 'Metal' },
    { value: 'Plastic', text: 'Plastic' },
    { value: 'Suede', text: 'Suede' },
    { value: 'Other', text: 'Other' },
];
const optionCategory = [
    { value: 'Corporate', text: 'Corporate' },
    { value: 'Casual', text: 'Casual' },
    { value: 'Cocktail', text: 'Cocktail' },
    { value: 'Dinner', text: 'Dinner' },
    { value: 'Formal', text: 'Formal' },
    { value: 'Work', text: 'Work' },
    { value: 'Social', text: 'Social' },
];

const SingleTabPanel = ({ numberOfItems, onClickPrev, onClickNext, pickupId, userId }) => {
    // set the state to count number of times to show SingleTabPanel
    const [itemCount, setItemCount] = useState(0);
    const [items, setItems] = useState([]);
    const [imgSrc, setImgSrc] = useState('');

    // set the state to store the inputs object
    const { inputs, handleChange, resetForm, clearForm } = useForm({
        name: '',
        tag: '',
        feature: '',
        material: '',
        color: '',
        category: '',
        type: '',
        brand: '',
        itemCondition: '',
        image: '',
        largeImage: '',
    });

    // useEffect(() => {
    //     setItems(items.push(inputs));
    // }, [inputs, items]);

    const handleFeatureChange = (val) => {
        if (val) {
            const res = feature[val].map((each) => ({ value: each, text: each }));
            return res;
        }
    };

    const [addItemToCloset, { loading, error }] = useMutation(ADD_ITEM_MUTATION);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            inputs.pickup = pickupId;
            if (itemCount === numberOfItems) {
                // console.log(inputs);
                // setItems([...items, inputs]);
                // prepare data
                const variables = { items, userId };
                console.log(variables);
                debugger;
                // handle the mutation
                const res = await addItemToCloset({
                    variables: { input: variables },
                });
                console.log(res);
                alert('submitted');
                resetForm();
                onClickNext();
            } else {
                debugger;
                setItems([...items, inputs]);
                setItemCount(itemCount + 1);
                clearForm();
                setImgSrc(null);
            }
        } catch (error) {
            alert(error.message);
            onClickPrev();
        }
    };

    const uploadFile = async (e) => {
        inputs.image = '';
        inputs.largeImage = '';
        const { files } = e.target;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'virtual_closet_image');

        const res = await fetch('https://api.cloudinary.com/v1_1/virtualclosets/image/upload', {
            method: 'POST',
            body: data,
        });
        const file = await res.json();
        inputs.image = file.secure_url;
        inputs.largeImage = file.eager[0].secure_url;
        setImgSrc(file && file.secure_url);
        e.target.value = null;
    };

    return (
        <Paper className="item-detail paper">
            <div className="flex j-btw">
                <p className="date">Condition & Inventory Report</p>
                <p className="date">
                    {itemCount}/{numberOfItems} Items
                </p>
            </div>

            <div className="gray-paper mt-24 ">
                <form onSubmit={handleSubmit}>
                    <div className=" grid grid-4 grid-4-small">
                        <div>
                            <TextInput
                                label="Item Tag"
                                value={inputs.tag}
                                onChange={handleChange}
                                name="tag"
                                type="text"
                                placeholder="Enter the item tag"
                            />

                            <SelectInput
                                label="Select Item Type"
                                options={optionItemType}
                                value={inputs.type}
                                onChange={handleChange}
                                name="type"
                                margin="mtb"
                                disabled
                            />

                            <SelectInput
                                label="Material"
                                options={optionItemMaterial}
                                value={inputs.material}
                                onChange={handleChange}
                                name="material"
                                placeholder="Enter the item material"
                                disabled
                            />
                        </div>
                        <div>
                            <TextInput
                                label="Item Name"
                                type="text"
                                placeholder="Enter Name"
                                value={inputs.name}
                                onChange={handleChange}
                                name="name"
                            />
                            <TextInput
                                label="Item Color"
                                type="text"
                                value={inputs.color}
                                onChange={handleChange}
                                margin="mtb"
                                name="color"
                                placeholder="Enter item color"
                            />
                            <SelectInput
                                label="Category"
                                options={optionCategory}
                                value={inputs.category}
                                onChange={handleChange}
                                name="category"
                                disabled
                            />
                        </div>
                        <div>
                            <SelectInput
                                label="Item Feature"
                                options={handleFeatureChange(inputs && inputs.type)}
                                value={inputs.feature}
                                onChange={handleChange}
                                name="feature"
                                placeholder="Enter the item feature"
                                disabled
                            />
                            <TextInput
                                label="Brand"
                                type="text"
                                value={inputs.brand}
                                onChange={handleChange}
                                margin="mtb"
                                name="brand"
                                placeholder="Enter item brand"
                            />
                            <Textarea
                                label="Item Condition"
                                value={inputs.itemCondition}
                                onChange={handleChange}
                                name="itemCondition"
                                rows="5"
                                placeholder="Enter item condition"
                            />
                        </div>
                        <div>
                            <FileUpload onChange={uploadFile} src={imgSrc} />
                        </div>
                    </div>

                    <div className="checkbox">
                        <h2>Where is the next destination for this item?</h2>
                        <div className="flex wrap">
                            <span className="mr-30">
                                <CheckboxInput label="To Vault" />
                            </span>
                            <span className="mr-30">
                                <CheckboxInput label="To Storage" />
                            </span>
                            <CheckboxInput label="To Laundry" />
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="mt-10 with-submit-btn flex">
                        <button className="accept red btn-style" type="submit">
                            Add Item to Closet
                        </button>
                    </div>
                </form>
            </div>
        </Paper>
    );
};

SingleTabPanel.propTypes = {
    numberOfItems: PropTypes.any,
    onClickNext: PropTypes.any,
    onClickPrev: PropTypes.any,
    pickupId: PropTypes.any,
    userId: PropTypes.any,
};

function InventoryReportsTab({ onClickPrev, onClickNext, id }) {
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });
    const singleRequest = data && data.fetchOneRequest;
    // console.log(singleRequest);
    return (
        <Wrapper>
            {/* based on the numberOfItems from the request create TabPanel */}

            <SingleTabPanel
                numberOfItems={singleRequest && singleRequest.numberOfItems}
                userId={singleRequest && singleRequest.user._id}
                pickupId={singleRequest && singleRequest._id}
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
            />
        </Wrapper>
    );
}

InventoryReportsTab.propTypes = {
    onClickPrev: PropTypes.func,
    onClickNext: PropTypes.func,
    id: PropTypes.string.isRequired,
};

export default InventoryReportsTab;
