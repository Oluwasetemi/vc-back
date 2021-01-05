import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import menShoes from "../../public/assets/men_shoes.png";

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
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px 29px;
    margin-bottom: 50px;
    #tag {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 21px;
      color: #2f3930;
    }
  }
  .item-details {
    justify-content: space-between;
    align-items: flex-start;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .item-image {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${menShoes});
    padding: 38px 5px;
    border-radius: 5px;
    width: 216px;
    margin-bottom: 20px;
    height: 308px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .full-detail {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .full-detail .rhs .grid {
    grid-template-columns: 1fr 1fr;
    padding: 11px 0;
    border-bottom: 1px solid #d6d8d3;
  }
  .full-detail .rhs .grid .text {
    font-size: 15px;
    line-height: 24px;
    color: #2f3930;
  }
  .full-detail .rhs .grid .bold {
    white-space: nowrap;
    justify-self: end;
    font-weight: 600;
  }
  .full-detail .rhs .first {
    border-top: 1px solid #d6d8d3;
  }
`;
function item(props) {
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
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Plain Black Shirt
          </LinkMaterial>
        </Breadcrumbs>
        <Paper className="paper">
          <h1 id="tag">Plain Black Shirt</h1>
          <div className="flex item-details wrap">
            <div className="item-image"></div>
            <div className="full-detail grid">
              <div className="rhs">
                <div className="list grid first">
                  <p className="text">Item Name</p>
                  <p className="text bold">Long Sleeve LV Shirt</p>
                </div>
                <div className="list grid">
                  <p className="text">Type </p>
                  <p className="text bold">Shirt</p>
                </div>
                <div className="list grid">
                  <p className="text">Label</p>
                  <p className="text bold">Louis Vuitton</p>
                </div>
                <div className="list grid">
                  <p className="text">Location</p>
                  <p className="text bold">In Storage</p>
                </div>
              </div>
              <div className="rhs">
                <div className="list grid first">
                  <p className="text">Item Tag</p>
                  <p className="text bold">129i2312123</p>
                </div>
                <div className="list grid">
                  <p className="text">Category</p>
                  <p className="text bold">Sleeveless</p>
                </div>
                <div className="list grid">
                  <p className="text">Date of Last Pickup</p>
                  <p className="text bold">12/10/2020</p>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </DashboardLayout>
    </Wrapper>
  );
}

item.propTypes = {};

export default item;
