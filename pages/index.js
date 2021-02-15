/* eslint-disable camelcase */
import Button from '@components/common/Button';
import Footer from '@components/Footer';
import Header from '@components/Header';
import HowItWorks from '@components/website/HowItWorks';
import appStore from '@public/assets/app-store.png';
import gold_wardrobe from '@public/assets/gold_wardrobe.png';
import googlePlay from '@public/assets/google-play.svg';
import hanger from '@public/assets/hanger.svg';
import help_pack from '@public/assets/help_pack.svg';
import hero from '@public/assets/hero.png';
import lock from '@public/assets/lock.svg';
import platinum_wardrobe from '@public/assets/platinum_wardrobe.png';
import silver_wardrobe from '@public/assets/silver_wardrobe.png';
import storage from '@public/assets/storage.svg';
import van from '@public/assets/van.svg';
import what2 from '@public/assets/what2.svg';
import what3 from '@public/assets/what3.svg';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .main {
        max-width: ${(props) => props.theme.breakpoint.lg};
        margin: auto;
        margin-bottom: 77px;
        padding: 0 35px;
    }

    .mr-11 {
        margin-right: 11px;
    }
    .hero {
        margin-top: 66px;
        display: flex;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            display: block;
            margin-top: 70px;
        }
        .wrap {
            @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
                flex-wrap: wrap;
            }
        }
    }
    .hero .lhs {
        h1 {
            font-weight: 600;
            font-size: 41px;
            color: #f26144;
            @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
                font-size: 30px;
            }
        }
        .info {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            color: #4b6962;
            margin: 20px 0 32px 0;
        }
        .app-google {
            margin-top: 29px;
        }
    }
    .what {
        h1 {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            color: #4b6962;
            margin: 39px 0 9px 0;
        }
        p.detail {
            font-size: 16px;
            line-height: 24px;
            color: #2f3930;
        }
    }
    .get_early_assess {
        width: 90%;
        margin: auto;
        justify-content: space-between;
        background-color: #f26144;
        padding: 59px 77px;
        flex-wrap: wrap;
        align-items: center;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            padding: 50px;
        }
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            padding: 25px;
        }
        h2 {
            color: #ffffff;
            font-weight: 600;
            font-size: 41px;
            line-height: 52px;
            margin-bottom: 10px;
            @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
                font-size: 30px;
            }
        }

        .form {
            display: flex;
            margin-bottom: 10px;
            @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
                display: block;
                width: 100%;
            }
        }
    }
    .form button {
        padding: 7px 30px;
    }
    input[type='email'] {
        border: 1px solid #d6d8d3;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 11px 8px;
        margin-right: 17px;
        height: 34px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            margin-bottom: 10px;
            width: 100%;
        }
        &::placeholder {
            font-family: Matteo;
            font-size: 14px;
            line-height: 24px;
            color: #4b6962;
        }
    }
    .our_plans,
    .what_we_do {
        margin: 100px 0;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            margin: 50px 0;
        }
    }
    .orange-title {
        font-weight: 600;
        margin-bottom: 49px;
        font-size: 30px;
        line-height: 32px;
        color: #f26144;
    }
    .grid {
        display: grid;
        grid-gap: 78px;
        grid-template-columns: repeat(auto-fill, minmax(249px, 1fr));
    }
    .our_plans .gridy {
        box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 25px 17px;
        height: 773px;
    }
    .our_plans {
        .silver {
            background-color: #f3f0f0;
        }
        .gold {
            background-color: #ffdba8;
        }
        .platinum {
            background-color: #d6d8d3;
        }
    }
    .gridy {
        position: relative;
        .title {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #2f3930;
        }
        .price {
            font-weight: 600;
            font-size: 41px;
            line-height: 52px;
            margin: 14px 0;
            color: #4b6962;
        }
        .package {
            margin-bottom: 24px;
        }
        .package p {
            font-size: 13px;
            line-height: 18px;
            color: #2f3930;
            margin-left: 13px;
        }
        img.absolute {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            margin-top: 16px;
            height: 293px;
        }
    }
    img {
        max-width: 100%;
    }
`;
export default function Home() {
    return (
        <>
            <Head>
                <title>Virtual Closet!</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* write SEO for the landing page */}
            </Head>
            <Header />
            <Wrapper>
                <div className="main">
                    <div className="hero">
                        <div className="lhs">
                            <h1>Take your closet with you, anywhere you go</h1>
                            <p className="info">
                                A world where limitations between your clothing choices and wardrobe do not exist.
                            </p>
                            <form action="" className="flex wrap form">
                                <input type="email" name="email" id="email" placeholder="Your Email Address" />
                                <Button theme="orange">Get Early Access</Button>
                            </form>
                            <div className="flex app-google">
                                <img className="mr-11" src={appStore} alt="appStore" />
                                <img src={googlePlay} alt="googlePlay" />
                            </div>
                        </div>
                        <div className="rhs">
                            <img src={hero} alt="hero" />
                        </div>
                    </div>
                    <div className="what_we_do">
                        <p className="orange-title">What we do</p>
                        <div className=" grid">
                            <div className="what gridy">
                                <img src={what2} alt="store" />
                                <h1>We store as many as you want</h1>
                                <p className="detail">
                                    Your clothing items are stored at our climate controlled warehouses and available on
                                    demand.
                                </p>
                            </div>
                            <div className="what gridy">
                                <img src={what2} alt="plan" />
                                <h1>We plan as many outfits as you need</h1>
                                <p className="detail">
                                    Work, social, formal, dinner, cocktail. No matter the event, we have got you
                                    covered.
                                </p>
                            </div>
                            <div className="what gridy">
                                <img src={what3} alt="secure" />
                                <h1>We secure as many as you desire</h1>
                                <p className="detail">
                                    Preserve your heirlooms and valuables at our secure locations, and access them when
                                    you need them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <HowItWorks />
                    <div className="our_plans">
                        <p className="orange-title">Our Plans</p>
                        <div className=" grid">
                            <div className="silver gridy">
                                <h1 className="title">SILVER</h1>
                                <p className="price">$49.99/mo</p>
                                <div className="packages">
                                    <div className="package flex">
                                        <img src={storage} alt="storage" />
                                        <p>Storage capacity of any 25 items</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={hanger} alt="hanger" />
                                        <p>5 Accessories</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={help_pack} alt="help_pack" />
                                        <p>Help me pack (1 time a year)</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={van} alt="van" />
                                        <p>2 deliveries & pickups per month</p>
                                    </div>
                                    <img className="absolute" src={silver_wardrobe} alt="silver_wardrobe" />
                                </div>
                            </div>

                            <div className="gold gridy">
                                <h1 className="title">GOLD</h1>
                                <p className="price">$99.99/mo</p>
                                <div className="packages">
                                    <div className="package flex">
                                        <img src={storage} alt="storage" />
                                        <p>Storage capacity of any 50 items</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={hanger} alt="hanger" />
                                        <p>10 Accessories</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={help_pack} alt="help_pack" />
                                        <p>Help me pack (2 times a year)</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={van} alt="van" />
                                        <p>5 deliveries & pickups per month</p>
                                    </div>
                                    <img className="absolute" src={gold_wardrobe} alt="gold_wardrobe" />
                                </div>
                            </div>

                            <div className="platinum gridy">
                                <h1 className="title">PLATINUM</h1>
                                <p className="price">$159.99/mo</p>
                                <div className="packages">
                                    <div className="package flex">
                                        <img src={storage} alt="storage" />
                                        <p>Storage capacity of any 100 items</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={hanger} alt="hanger" />
                                        <p>35 Accessories</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={help_pack} alt="help_pack" />
                                        <p>Help me pack (4 times a year)</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={van} alt="van" />
                                        <p>8 deliveries & pickups per month</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={lock} alt="lock" />
                                        <p>Access to secure vault for valuables</p>
                                    </div>
                                    <div className="package flex">
                                        <img src={hanger} alt="hanger" />
                                        <p>Access to a Personal Stylist</p>
                                    </div>
                                    <img className="absolute" src={platinum_wardrobe} alt="platinum_wardrobe" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="get_early_assess flex wrap">
                        <h2>Get Early Access</h2>
                        <form action="" className="flex wrap form">
                            <input type="email" name="email" id="email" placeholder="Your Email Address" />
                            <Button theme="peach">Get Early Access</Button>
                        </form>
                    </div>
                </div>
                <Footer />
            </Wrapper>
        </>
    );
}
