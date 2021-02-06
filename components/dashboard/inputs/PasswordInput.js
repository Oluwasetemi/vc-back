import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div`
  h6 {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 5px;
    color: #2f3930;
    margin-top: 1.5rem;
    width: 100%;
  }
  .input_div {
    height: 36px;
    border: 1px solid #d6d8d3;
    display: grid;
    grid-template-columns: 1fr max-content;
    border-radius: 8px;
    &:hover {
      border: 1px solid #f26144;
      transition: 0.3s;
    }
    &:focus-within {
      outline: none;
      border: 1px solid #f26144;
    }
  }
  .MuiIconButton-root {
    padding: 0;
  }
  .input {
    outline: none;
    border: none;
    padding: 0px 8px;
    border-radius: 10px;
    font-family: Matteo;
    font-size: 14px;
    line-height: 24px;
    color: #4b6962;
    width: 100%;
  }

  .adornment {
    width: max-content;
	padding-right: 1rem;
	margin: auto;
  }
`;

function PasswordInput({ label, onChange, value }) {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <h6 className="input_label">{label}</h6>
      <div className="input_div">
        <input
          className="input"
          type={values.showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
        />
        <div className="adornment">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {value.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { PasswordInput };
