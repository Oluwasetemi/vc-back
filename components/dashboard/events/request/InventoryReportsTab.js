import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';
import { CheckboxInput, SelectInput, Textarea, TextInput } from '../../inputs';

const Wrapper = styled.div`
	.MuiBox-root {
		padding: 0;
	}
	.MuiTabs-flexContainer {
		flex-wrap: wrap;
	}
	.MuiTab-root {
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			max-width: fit-content;
			padding: 0;
		}
	}
	.j-end {
		justify-content: flex-end;
		margin-bottom: 30px;
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			display: block;
		}
		> div {
			width: auto;
		}
		button.add-disabled {
			border: 0;
			color: #fff;
			padding: 7px 35px;
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
	{ value: 'Blouse', text: 'Blouse' },
];
const optionItemCategory = [
	{ value: 'Short Sleeve', text: 'Short Sleeve' },
	{ value: 'Long Sleeve', text: 'Long Sleeve' },
];
const optionItemMaterial = [
	{ value: 'Cotton', text: 'Cotton' },
	{ value: 'Satin', text: 'Satin' },
];
const optionCategory = [
	{ value: 'Corporate', text: 'Corporate' },
	{ value: 'Casual', text: 'Casual' },
];

function InventoryReportsTab({ onClickPrev, onClickNext }) {
	const [itemId, setItemId] = useState('0000000');
	const [itemType, setItemType] = useState('');
	const [itemCategory, setItemCategory] = useState('');
	const [itemTag, setItemTag] = useState('1234567');
	const [itemFeature, setItemFeature] = useState('');
	const [itemMaterial, setItemMaterial] = useState('');
	const [itemName, setItemName] = useState('');
	const [itemColor, setItemColor] = useState('Blue');
	const [category, setCategory] = useState('');
	const [itemBrand, setItemBrand] = useState('LV');
	const [itemCondition, setItemCondition] = useState(
		'Describe the condition of the item',
	);

	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Wrapper>
			<TabPanel value={value} index={0}>
				<Paper className="item-detail paper">
					<div className="flex j-btw">
						<p className="date">Condition & Inventory Report</p>
						<p className="date">1/20 Items</p>
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

			<TabPanel value={value} index={1}>
				<Paper className="item-detail paper">
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
			</TabPanel>
		</Wrapper>
	);
}

InventoryReportsTab.propTypes = {
	onClickPrev: PropTypes.func,
	onClickNext: PropTypes.func,
};

export default InventoryReportsTab;
