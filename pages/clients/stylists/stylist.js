import Button from '@components/common/Button';
import DashboardLayout from '@components/layout/DashboardLayout';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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
// .grided{
//     display: grid;
//     grid-template-columns: 45% 53%;
//     grid-gap: 2%;
//     @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
//         display:block;
//                 }
// }
    .dp {
        margin-right: 28px;
        width: 70px;
        height: 70px;
        background-color: #9c9b7c;
        border-radius: 50%;
        justify-content: center;
        background-color: #9c9b7c;
        .initials {
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            color: #ffffff;
        }
    }

    .full-detail {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        margin-top:20px;
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
    .full-detail .rhs .grid .text,
    .item-details .text.email,
    .bio .text {
        font-size: 15px;
        line-height: 24px;
        color: #2f3930;
    }
    .item-details .text.email {
        margin: 10px 0 13px 0;
    }
    .item-details .name {
        font-size: 20px;
        line-height: 30px;
        color: #2f3930;
    }
    .full-detail .rhs .grid .bold,
    .bio . {
        white-space: nowrap;
        justify-self: end;
        font-weight: 600;
    }
    .full-detail .rhs .grid .red-color {
        color: #f26144;
    }
    .full-detail .rhs .first {
        border-top: 1px solid #d6d8d3;
    }
    .button {
        padding: 7px 35px;
    }
    .bio {
        margin-top: 12px;
    }
`;
function stylist(props) {
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
                    <LinkMaterial className="crumbs" color="inherit" href="/clients/stylists">
                        Stylists
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Stylist
                    </LinkMaterial>
                </Breadcrumbs>
                <Paper className="paper">
                    <h1 id="tag">Plain Black Shirt</h1>
                    <div className="flex wrap item-details">
                        <div className="flex wrap">
                            <div className="dp flex">
                                <p className="initials">JT</p>
                            </div>
                            <div>
                                <p className="name">Joseph Thornberry</p>
                                <p className="text email">Email: john233@gmail.com</p>
                                <Link href="/clients/stylists/stylist">
                                    <Button theme="pink">Remove</Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="full-detail grid">
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Phone</p>
                                        <p className="text bold">2341232334544</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Joined </p>
                                        <p className="text bold">20/10/2020</p>
                                    </div>
                                </div>
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Email</p>
                                        <p className="text bold">jane@ekanem.com</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Tags</p>
                                        <p className="text bold red-color">Corporate, Social, Tall</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bio">
                                <p className="text">Bio</p>
                                <p className="text bold">
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                                    print, graphic or web designs. The passage is attributed to an unknown typesetter in
                                    the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                                    Bonorum et Malorum for use in a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </Paper>
            </DashboardLayout>
        </Wrapper>
    );
}

stylist.propTypes = {};

export default stylist;
