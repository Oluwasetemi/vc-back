import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@components/common/Button';
import brand from '../public/assets/brand.svg';
import { TextInput, PasswordInput } from '../components/dashboard/inputs';

const Wrapper = styled.div`
    display: flex;
    place-content: center;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    padding: 40px 0;
    .main {
        width: 400px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            width: 90%;
        }
    }

    .paper {
        background-color: #ffffff;
        margin: 32px 0;
        padding: 30px;
        height: auto;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        h1 {
            font-size: 25px;
            line-height: 32px;
            color: #4b6962;
            font-weight: 600;
        }
    }
    .label-name {
        display: flex;
        justify-content: center;
        .orange-link > a {
            color: #f26144;
            margin-left: 5px;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .mb-30 {
        margin-bottom: 30px;
    }
    .button {
        padding: 16px 39px;
    }
`;
function requestPasswordReset(props) {
    const [email, setEmail] = useState('');

    return (
        <Wrapper>
            <div className="main">
                <img src={brand} alt="brand" />
                <div className="paper">
                    <h1 className="mb-30">Request Password Reset</h1>

                    <div className="mb-30">
                        <TextInput
                            label="Email Address"
                            type="text"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <Link href="#">
                        <Button theme="orange">Request Reset</Button>
                    </Link>
                </div>
                <div className="label-name">
                    <span>Remember Password?</span>
                    <span className="orange-link">
                        <Link href="/login">Login</Link>
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

requestPasswordReset.propTypes = {};

export default requestPasswordReset;
