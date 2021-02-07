import { useMutation, useQuery } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../../../../lib/useForm';
import { SINGLE_REQUEST } from '../../../../pages/requests/unconfirmedpickup';
import Button from '../../../common/Button';
import { CheckboxInput, SelectInput, Textarea, TextInput } from '../../inputs';

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

    .subtab {
        .accept {
            font-size: 14px;
            line-height: 16px;
            padding: 7px 35px;
            font-weight: 600;
            border-radius: 10px;
        }
        .PrivateTabIndicator-colorSecondary-4 {
            background-color: transparent;
        }
    }
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

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

const optionItemCategory = [
    { value: 'Short Sleeve', text: 'Short Sleeve' },
    { value: 'Long Sleeve', text: 'Long Sleeve' },
];

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

const SingleTabPanel = ({ numberOfItems, count, onClickPrev, onClickNext, pickupId, userId, index }) => {
    // const [itemId, setItemId] = useState('0000000');
    // const [itemType, setItemType] = useState('');
    // const [itemCategory, setItemCategory] = useState('');
    // const [itemTag, setItemTag] = useState('1234567');
    // const [itemFeature, setItemFeature] = useState('');
    // const [itemMaterial, setItemMaterial] = useState('');
    // const [itemName, setItemName] = useState('');
    // const [itemColor, setItemColor] = useState('Blue');
    // const [category, setCategory] = useState('');
    // const [itemBrand, setItemBrand] = useState('LV');
    // const [itemCondition, setItemCondition] = useState(
    // 	'Describe the condition of the item',
    // );

    const { inputs, handleChange, resetForm } = useForm({
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

    const [value, setValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

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
            // items: [
            // 			{
            // 				name: "testItem"
            // 				material: Cotton
            // 				category: Cocktail
            // 				type: "Shirt"
            // 				feature: "Long Sleeve"
            // 				color: "blue"
            // 				brand: "LV"
            // 				itemCondition: "Good"
            // 				pickupId: "60083dcfae225e2b84841456"
            // 			}
            // 		]
            // userId: "6002ff319c23052cf93d7b70"
            console.log(inputs);
            inputs.pickupId = pickupId;
            // prepare data
            const variables = { items: [inputs], userId };
            console.log(variables);
            debugger;
            // handle the mutation
            const res = await addItemToCloset({
                variables: { input: variables },
            });
            console.log(res);
            alert('submitted');
            resetForm();
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <TabPanel value={value} index={index}>
            <Paper className="item-detail paper">
                <div className="flex j-btw">
                    <p className="date">Condition & Inventory Report</p>
                    <p className="date">
                        {count}/{numberOfItems} Items
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
                            </div>
                            <div>
                                <Textarea
                                    label="Item Condition"
                                    value={inputs.itemCondition}
                                    onChange={handleChange}
                                    name="itemCondition"
                                    placeholder="Enter item condition"
                                />
                            </div>
                        </div>

                        <div className="checkbox">
                            <h2>Where is the next destination for this item?</h2>
                            <div className="flex wrap">
                                <CheckboxInput label="To Vault" />
                                <CheckboxInput label="To Storage" />
                                <CheckboxInput label="To Laundry" />
                            </div>
                        </div>

                        {/* submit button */}
                        <button type="submit">Add Item to Closet</button>
                    </form>
                </div>
            </Paper>

            <div className="flex j-end">
                <Button disabled className="add-disabled ml-0">
                    Add Extra
                </Button>

                <Tabs className="subtab" value={value} onChange={handleChangeTab} aria-label="simple tabs example">
                    <Tab
                        label={
                            <>
                                <p className="accept pink" onClick={() => setValue(0)}>
                                    {' '}
                                    Previous Item
                                </p>
                            </>
                        }
                    />
                    <Tab
                        label={
                            <>
                                <p className="accept red" onClick={() => setValue(1)}>
                                    {' '}
                                    {value === 5 ? 'Finish' : 'Next Item'}
                                </p>
                            </>
                        }
                    />
                </Tabs>
            </div>
        </TabPanel>
    );
};

SingleTabPanel.propTypes = {
    count: PropTypes.any,
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
    console.log(singleRequest);

    // all the items state
    // current state
    // count

    // keep the state of the number of items that has been added
    const [itemAdded, setItemAdded] = useState(1);

    return (
        <Wrapper>
            {/* based on the numberOfItems from the request create TabPanel */}
            {/* <TabPanel value={value} index={0}>
				<Paper className="item-detail paper">
					<div className="flex j-btw">
						<p className="date">Condition & Inventory Report</p>
						<p className="date">
							{itemAdded}/{singleRequest && singleRequest.numberOfItems} Items
						</p>
					</div>

					<div className="gray-paper mt-24 ">
						<div className=" grid grid-4 grid-4-small">
							<div>
								<TextInput
									label="Item Tag"
									value={itemTag}
									onChange={setItemTag}
								/>

								<SelectInput
									label="Item Feature"
									options={optionItemCategory}
									value={itemFeature}
									onChange={setItemFeature}
									margin="mtb"
								/>
								<SelectInput
									label="Material"
									options={optionItemMaterial}
									value={itemMaterial}
									onChange={setItemMaterial}
								/>
							</div>
							<div>
								<TextInput
									label="Item Name"
									type="text"
									placeholder="Enter Name"
									value={itemName}
									onChange={setItemName}
								/>
								<TextInput
									label="Item Color"
									type="text"
									value={itemColor}
									onChange={setItemColor}
									margin="mtb"
								/>
								<SelectInput
									label="Category"
									options={optionCategory}
									value={category}
									onChange={setCategory}
								/>
							</div>
							<div>
								<SelectInput
									label="Select Item Type"
									options={optionItemType}
									value={itemType}
									onChange={setItemType}
								/>
								<TextInput
									label="Brand"
									type="text"
									value={itemBrand}
									onChange={setItemBrand}
									margin="mtb"
								/>
							</div>
							<div>
								<Textarea
									label="Item Condition"
									value={itemCondition}
									onChange={setItemCondition}
								/>
							</div>
						</div>

						<div className="checkbox">
							<h2>Where is the next destination for this item?</h2>
							<div className="flex wrap">
								<CheckboxInput label="To Vault" />
								<CheckboxInput label="To Storage" />
								<CheckboxInput label="To Laundry" />
							</div>
						</div>
					</div>
				</Paper>

				<div className="flex j-end">
					<Button disabled className="add-disabled ml-0">
						Add Extra
					</Button>

					<Tabs
						className="subtab"
						value={value}
						onChange={handleChange}
						aria-label="simple tabs example"
					>
						<Tab
							label={
								<>
									<p className="accept pink" onClick={onClickPrev}>
										{' '}
										Previous Item
									</p>
								</>
							}
						/>
						<Tab
							label={
								<>
									<p className="accept red" onClick={() => setValue(1)}>
										{' '}
										Next Item
									</p>
								</>
							}
						/>
					</Tabs>
				</div>
			</TabPanel>

			<TabPanel value={value} index={1}> */}
            {/* <Paper className="item-detail paper">
					<div className="flex j-btw">
						<p className="date">Condition & Inventory Report</p>
						<p className="date">20/20 Items</p>
					</div>

					<div className="gray-paper mt-24 ">
						<div className=" grid grid-4 grid-4-small">
							<div>
								<TextInput
									label="Item Tag"
									value={itemTag}
									onChange={setItemTag}
								/>

								<SelectInput
									label="Item Feature"
									options={optionItemCategory}
									value={itemFeature}
									onChange={setItemFeature}
									margin="mtb"
								/>
								<SelectInput
									label="Material"
									options={optionItemMaterial}
									value={itemMaterial}
									onChange={setItemMaterial}
								/>
							</div>
							<div>
								<TextInput
									label="Item Name"
									type="text"
									placeholder="Enter Name"
									value={itemName}
									onChange={setItemName}
								/>
								<TextInput
									label="Item Color"
									type="text"
									value={itemColor}
									onChange={setItemColor}
									margin="mtb"
								/>
								<SelectInput
									label="Category"
									options={optionCategory}
									value={category}
									onChange={setCategory}
								/>
							</div>
							<div>
								<SelectInput
									label="Select Item Type"
									options={optionItemType}
									value={itemType}
									onChange={setItemType}
								/>
								<TextInput
									label="Brand"
									type="text"
									value={itemBrand}
									onChange={setItemBrand}
									margin="mtb"
								/>
							</div>
							<div>
								<Textarea
									label="Item Condition"
									value={itemCondition}
									onChange={setItemCondition}
								/>
							</div>
						</div>

						<div className="checkbox">
							<h2>Where is the next destination for this item?</h2>
							<div className="flex wrap">
								<CheckboxInput label="To Vault" />
								<CheckboxInput label="To Storage" />
								<CheckboxInput label="To Laundry" />
							</div>
						</div>
					</div>
				</Paper>
				<div className="flex j-end">
					<Button theme="pinkBtn">Add Extra</Button>

					<Tabs
						className="subtab"
						value={value}
						onChange={handleChange}
						aria-label="simple tabs example"
					>
						<Tab
							label={
								<>
									<p className="accept pink" onClick={() => setValue(0)}>
										{' '}
										Previous Item
									</p>
								</>
							}
						/>
						<Tab
							label={
								<>
									<p className="accept red" onClick={onClickNext}>
										{' '}
										Next Item
									</p>
								</>
							}
						/>
					</Tabs>
				</div>
			</TabPanel> */}
            {Array.from({ length: singleRequest && singleRequest.numberOfItems }, (_, index) => index + 1).map(
                (each, index) => (
                    <SingleTabPanel
                        numberOfItems={singleRequest && singleRequest.numberOfItems}
                        userId={singleRequest && singleRequest.user._id}
                        pickupId={singleRequest && singleRequest._id}
                        count={each}
                        onClickPrev={onClickPrev}
                        onClickNext={onClickNext}
                        index={index}
                    />
                ),
            )}
        </Wrapper>
    );
}

InventoryReportsTab.propTypes = {
    onClickPrev: PropTypes.func,
    onClickNext: PropTypes.func,
    id: PropTypes.string.isRequired,
};

export default InventoryReportsTab;
