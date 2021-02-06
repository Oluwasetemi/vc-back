import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import shirt from "../../../public/assets/shirt.png";
import pants from "../../../public/assets/pants.png";
import menShoes from "../../../public/assets/men_shoes.png";
import tie from "../../../public/assets/tie.png";
import { UploadImage } from "../../../components/dashboard/inputs";
import Button from "@components/common/Button";
import Link from "next/link";

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
   .user-details .dp {
    width: 70px;
    height: 70px;
    background-color: #9c9b7c;
    border-radius: 50%;
    justify-content: center;
    background-color: #9c9b7c;
    margin-right: 24px;
    .initials {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
    }
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px;
	margin-bottom: 50px;
	background-color: #fff;
  }
  .wrap{
	flex-wrap: wrap;
  }
.grid {
  display: grid;
}

  .paper-tail {
	margin: 30px 0 50px 0;
	.buttons.flex{
		align-items: baseline;
		min-width: 270px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			min-width: -webkit-fill-available;
		}
	}	 
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
  .paper-tail>div.flex{
	  justify-content: space-between;
	  .button {
		padding: 0.4rem 2.5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 0.4rem 1.5rem;
		}
	  }
  }
  .grid-items .button{
	padding: .4rem 2.5rem;
	margin-top: 15px;
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
  
  .text {
    font-size: 16px;
    line-height: 24px;
	color: #2f3930;
	margin-bottom: 10px;
  }
  
  .name {
    font-weight: bold;
    margin: 18px 0 10px 0;
  }
  .grid-items .info{
	font-weight:normal;
  }
  .absolute{
	  position: absolute;
  }

  .product .checked{
    right: 8px;
    top: 8px;
  }
  .checked .MuiFormControlLabel-root{
    margin-right: 0;
  }
  button.disabled {
    border: 0;
    color: #fff;
    padding: 7px 35px;
    background-color: #D6D8D3;
  }
`;
function updateCloset(props) {
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
          <LinkMaterial
            className="crumbs"
            color="inherit"
            href="/clients/client"
          >
            Joseph Thornberry
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Add to Wardrobe
          </LinkMaterial>
        </Breadcrumbs>
        <h3 className="title">Update Closet/Vault</h3>

        <div className="paper paper-tail">
          <div className="flex wrap">
            <h1>Items</h1>
            <div className="buttons flex">
              <Link href="/clients/closet">
                <Button theme="pink">Back</Button>
              </Link>
              <Link href="/clients/closet/addToWardrobe">
                <Button className="disabled">Continue</Button>
              </Link>
            </div>
          </div>

          <p className="info name text">
            Add single or multiple items to the wardrobe
          </p>

          <div className="scroll">
            <div className="grid">
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
              <div className="grid-items">
                <UploadImage />

                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
                <p className="id text">Type: Shirt</p>
                <p className="id text">Category: Long sleeve</p>
                <p className="id text">Color: Black</p>
                <Link href="#">
                  <Button theme="pink">View</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

updateCloset.propTypes = {};

export default updateCloset;
