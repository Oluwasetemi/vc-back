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
    select {
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
    option {
        color: #f26144;
        background-color: antiquewhite;
        border: none;
    }
    option:hover,
    option:active {
        background-color: black;
    }
`;

function SelectInput({ options, value, onChange, margin, label, name, disabled }) {
    // const handleChange = event => {
    // 	onChange(event.target.value);
    // };
    return (
        <Wrapper>
            <div className={`${margin}`}>
                <h6 className="input_label">{label}</h6>
                <select value={value} onChange={onChange} name={name}>
                    <option value="" disabled={disabled ? true : null}>
                        Select {name}
                    </option>
                    {options &&
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                </select>
            </div>
        </Wrapper>
    );
}

SelectInput.propTypes = {
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    margin: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export { SelectInput };
