import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkMaterial from '@material-ui/core/Link';
import Button from '@components/common/Button';
import Link from 'next/link';
import DashboardLayout from '../../components/layout/DashboardLayout';
import shirt from '../../public/assets/shirt.png';
import pants from '../../public/assets/pants.png';
import menShoes from '../../public/assets/men_shoes.png';
import tie from '../../public/assets/tie.png';
import { TextInput } from '../../components/dashboard/inputs';

const Wrapper = styled.div`

  .bread-crumbs {
    margin: 30px 0 10px 0;
  }
  .crumbs {
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 13px;
    }
  }
  h3.title {
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    margin: 33px 0;
	color: #4b6962;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 20px;
	  }
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px;
	margin-bottom: 50px;
	background-color: #fff;
  }
  .paper-tail {
	margin: 30px 0 50px 0;
	.buttons.flex{
    align-items: center;
		min-width: 270px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			min-width: 185px;
		}
		  
	}
  }
  .wrap{
	flex-wrap: wrap;
  }
  .paper-tail h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #2f3930;
  }
  .paper-tail .scroll{
	max-width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	&::-webkit-scrollbar {
	  height: .1rem;
	}
	  &::-webkit-scrollbar-thumb {
	  background-color: #F26144;
	  border-radius: 0.5rem;
	}
  }
  .paper-tail .grid {
	display: grid;
	width: 100%;
    min-width: 950px;
    grid-gap: 28px;
    margin: 30px 0;
	grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		min-width: auto;
				grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
	}
	  }
  }
  .paper-tail{
	  .text-input{
		max-width: 20%;
		margin-bottom: 23px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			max-width: 45%;		
		  }
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			max-width: 80%;		  }
	  }
	.pink {
		color: #f26144;
		background-color: #fff1de;
		font-weight: 600;
		border-radius: 10px;
		padding: 7px 12px;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.5px;
		&:hover {
		  color: #fff1de;
		  background-color: #f26144;
		  transition: 0.3s;
		}
	  }
  }
  .paper-tail>div.flex{
	  justify-content: space-between;
	  .button {
		padding: 0.4rem 2.5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 0.4rem 1.5rem;
		}
		  
	  }
  }
  .grid-items .product {
    background-color: #f3f0f0;
    padding: 38px 5px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }
  .grid-items .product:before {
    content: "";
    display: block;
    position: absolute;
	height: 0%;
	left:0;
    width: 100%;
    bottom: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  .grid-items .product:hover:before {
    height: 100%;
  }
  .grid-items .image {
	height: 172px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .grid-items .image1 {
    background-image: url(${shirt});
  }
  .grid-items .image2 {
    background-image: url(${pants});
  }
  .grid-items .image3 {
    background-image: url(${menShoes});
  }
  .grid-items .image4 {
    background-image: url(${tie});
  }
  .grid-items .text {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
  }
  .grid-items .name {
    font-weight: bold;
    margin: 18px 0 10px 0;
  }

.product{
	.image-tag{
		right: 8px;
		bottom: 8px;
	}
}

`;
function reviewOutfit(props) {
    const [outfitName, setOutfitName] = useState('');

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
                    <LinkMaterial className="crumbs" color="inherit" href="/clients/client">
                        Joseph Thornberry
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="inherit" href="/clients/editOutfit">
                        Outfit
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Review Outfit
                    </LinkMaterial>
                </Breadcrumbs>
                <h3 className="title">Review Outfit</h3>

                <div className="paper paper-tail">
                    <div className="flex wrap">
                        <h1>Outfit</h1>
                        <div className="buttons flex">
                            <Link href="/clients/editOutfit">
                                <Button theme="pink">Back</Button>
                            </Link>
                            <Link href="/clients/outfitCreated">
                                <Button theme="orange">Finish</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-input">
                        <TextInput
                            label="Enter Outfit Name"
                            value={outfitName}
                            onChange={setOutfitName}
                            type="text"
                            placeholder="Outfit Name"
                        />
                    </div>

                    <div className="scroll">
                        <div className="grid">
                            <div className="grid-items">
                                <div className="product">
                                    <div className="image image1" />
                                </div>
                                <p className="name text">Plain black shirt</p>
                                <p className="pink"> Remove</p>
                            </div>
                            <div className="grid-items">
                                <div className="product">
                                    <div className="image image2" />
                                </div>
                                <p className="name text">Plain black shirt</p>
                                <p className="pink"> Remove</p>
                            </div>
                            <div className="grid-items">
                                <div className="product">
                                    <div className="image image3" />
                                </div>
                                <p className="name text">Plain black shirt</p>
                                <p className="pink"> Remove</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </Wrapper>
    );
}

reviewOutfit.propTypes = {};

export default reviewOutfit;
