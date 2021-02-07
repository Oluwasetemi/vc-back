import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    h6 {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 5px;
        color: #2f3930;
    }
    .mtb {
        margin: 26px 0;
    }
    input {
        outline: none;
        background: #ffffff;
        border: 1px solid #d6d8d3;
        padding: 6px 8px;
        border-radius: 10px;
        font-family: Matteo;
        font-size: 14px;
        line-height: 24px;
        color: #4b6962;
        width: 100%;
        &:focus {
            border: 1px solid #f26144;
        }
    }
`;

function TextInput({ type, value, onChange, placeholder, label, margin, name }) {
    // const handleChange = event => {
    // 	console.log(event);
    // 	onChange(event.target.value);
    // };
    return (
        <Wrapper>
            <div className={`${margin}`}>
                <h6 className="input_label">{label}</h6>
                <input
                    type={type || 'number'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            </div>
        </Wrapper>
    );
}

TextInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    margin: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export { TextInput };
