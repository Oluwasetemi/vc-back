import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkMaterial from '@material-ui/core/Link';
import DashboardLayout from '../components/layout/DashboardLayout';

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
    .grid {
        display: grid;
        grid-gap: 22px;
        margin: 30px 0;
        grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    }
    .grid-item {
        background: #ffffff;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        .flex {
            display: flex;
            justify-content: space-between;
        }
        .head {
            padding: 14px 20px 9px 20px;
            border-radius: 10px 10px 0px 0px;
            color: #fff;
            .title {
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
            }
            .amount {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
            }
        }
        .platinum {
            background-color: #f26144;
        }
        .gold {
            background-color: #ff974e;
        }
        .silver {
            background-color: #ffdba8;
        }
        .vault {
            background-color: #4b6962;
        }
        .On-Demand {
            background-color: #9c9b7c;
        }
        .content {
            padding: 0 0px 22px 0px;
            .item {
                font-size: 12px;
                line-height: 16px;
                border-top: 1px solid #f3f0f0;
                color: #4b6962;
                padding: 5px 20px;
            }
            .bold {
                font-weight: 600;
                font-size: 14px;
            }
            .first {
                border: none;
            }
        }
    }
`;

function subscriptions(props) {
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
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Subscriptions
                    </LinkMaterial>
                </Breadcrumbs>
                <div className="grid">
                    <div className="grid-item">
                        <div className="head flex platinum">
                            <p className="title">Platinum</p>
                            <p className="amount">$159.99/month</p>
                        </div>
                        <div className="content">
                            <p className="item first">100 clothing items</p>
                            <p className="item">35 accessories</p>
                            <p className="item">15 pairs of shoes</p>
                            <p className="item">Help me pack (4x a year)</p>
                            <p className="item">Personal stylist</p>
                            <p className="item">Vault (10 items)</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="head flex gold">
                            <p className="title">Gold</p>
                            <p className="amount">$99.99/month</p>
                        </div>
                        <div className="content">
                            <p className="item first">50 clothing items</p>
                            <p className="item">10 accessories</p>
                            <p className="item">5 pairs of shoes</p>
                            <p className="item">Help me pack (4x a year)</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="head flex silver">
                            <p className="title">Silver</p>
                            <p className="amount">$49.99/month</p>
                        </div>
                        <div className="content">
                            <p className="item first">25 clothing items</p>
                            <p className="item">5 accessories</p>
                            <p className="item">5 pairs of shoes</p>
                            <p className="item">Help me pack (4x a year)</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="head flex vault">
                            <p className="title">Vault</p>
                            <p className="amount">$25/month</p>
                        </div>
                        <div className="content">
                            <p className="item first">25 clothing items</p>
                            <p className="item">5 accessories</p>
                            <p className="item">5 pairs of shoes</p>
                            <p className="item">Help me pack (4x a year)</p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="head flex On-Demand">
                            <p className="title">On-Demand</p>
                        </div>
                        <div className="content">
                            <div className="item first flex">
                                <p>Additional shoes (Platinum & Gold)</p> <p className="bold">$3</p>
                            </div>
                            <div className="item  flex">
                                <p>Accessories (Ties, scarves, purses, etc)</p> <p className="bold">$1</p>
                            </div>
                            <div className="item  flex">
                                <p>Help me pack</p> <p className="bold">$50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </Wrapper>
    );
}

subscriptions.propTypes = {};

export default subscriptions;
