import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import brand from "../public/assets/brand.svg";
import { TextInput, PasswordInput } from "../components/dashboard/inputs";
import Link from "next/link";
import Button from "@components/common/Button";

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
    margin-top: 32px;
    padding: 30px;
    height: 439px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    h1 {
      font-size: 30px;
      line-height: 32px;
      color: #4b6962;
      font-weight: 600;
    }
    .greeting {
      font-size: 16px;
      line-height: 24px;
      margin: 21px 0;
      color: #2f3930;
    }
  }
  .label-name {
    display: flex;
    justify-content: space-between;
    .orange-link > a {
      color: #f26144;
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
function login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <div className="main">
        <img src={brand} alt="brand" />
        <div className="paper">
          <h1>Log In</h1>
          <p className="greeting">
            Welcome to your admin portal. Enter your details to login.
          </p>
          <div className="mb-30">
            <TextInput
              label="Email Address"
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={setEmail}
            />
          </div>
          <div className="mb-30">
            <PasswordInput
              label={
                <div className="label-name flex">
                  <span>Password</span>
                  <span className="orange-link">
                    <Link href="/requestPasswordReset">Forgot Your Password?</Link>
                  </span>
                </div>
              }
              value={password}
              onChange={setPassword}
            />
          </div>
          <Link href="/dashboard">
            <Button theme="orange">Log In</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

login.propTypes = {};

export default login;
