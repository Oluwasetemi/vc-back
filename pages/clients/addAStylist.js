import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import { TextInput, Textarea , UploadImage,TagInput } from "../../components/dashboard/inputs";
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
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px 72px 59px;
	margin-bottom: 50px;
  background-color: #fff;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    padding-left: 29px;
  }
  }
  .paper-tail {
	margin: 30px 0 50px 0;
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
 
  .paper-tail .grid {
	grid-gap: 43px;
    margin-top: -25px;
  display: grid;
  grid-template-columns: max-content 1fr;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    grid-template-columns:1fr;
  }
  .start{
    align-items: flex-start;
  }
  }
  .w-30{
    min-width: 30%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			min-width: 85%;
		}
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width:100%;
		}
  }
  .mr-40{
    margin-right: 40px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      margin-right:0px;
		}
  }
  
	.pink {
		color: #f26144;
		background-color: #fff1de;
		margin-bottom: 10px;
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
 
  .paper-tail .buttoned{
	margin-left: auto;
    width: fit-content;
  	  .button {
		padding: 0.4rem 2.5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 0.4rem 1.5rem;
		}
		  
	  }
  }
  
 
`;
function addAStylist(props) {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [stylistBio, setStylistBio] = useState("Stylist Bio");

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
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Add A Stylist
          </LinkMaterial>
        </Breadcrumbs>
        <h3 className="title">Add A Stylist</h3>

        <div className="paper paper-tail">
		<div className="flex buttoned">
              <Link href="/clients/stylists">
                <Button theme="orange">Save</Button>
              </Link>
            </div>
          <div className=" grid wrap">
		  
<UploadImage/>
           <div className="flex wrap start">
           <div className="text-input w-30 mr-40">
              <TextInput
                label="Full Name"
                value={fullName}
                onChange={setFullName}
                type="text"
                placeholder="Name"
              />
              <TextInput
                label="Email Address"
                value={emailAddress}
                onChange={setEmailAddress}
                type="text"
                placeholder="name@email.com"
              />
              <TagInput label="Strengths"
              />
                        </div>
		<div className="w-30 mr-40">
    <Textarea
                    label="Bio"
                    value={stylistBio}
                    onChange={setStylistBio}
                  />
    </div>
           </div>
            
          </div>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

addAStylist.propTypes = {};

export default addAStylist;
