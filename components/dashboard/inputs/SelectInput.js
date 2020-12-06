import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const Wrapper = styled.div`
h6{
	font-size: 14px;
line-height: 24px;
margin-bottom: 5px;
color: #2F3930;

}
.mtb{
	margin:26px 0;
}
select{
	outline: none;
	background: #FFFFFF;
border: 1px solid #D6D8D3;
padding: 6px 8px;
border-radius: 10px;
font-family: Matteo;
font-size: 14px;
line-height: 24px;
color: #4B6962;
width: 100%;
&:focus{
	border: 1px solid #F26144;
}
}
option{
	color: #F26144;
	background-color: antiquewhite;
	border: none;
}
option:hover,option:active{
	background-color: black;
	}

`

function SelectInput({options, value, onChange, margin ,label}) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<Wrapper >
			<div className={`${margin}`}>
			<h6 className="input_label">{label}</h6>
			 <select  value={value} onChange={handleChange} >
			 {options && options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.text}
					</option>
				))}
				 </select>
				 </div>
		</Wrapper>
	)
}

SelectInput.propTypes = {
	options: PropTypes.array.isRequired,
label: PropTypes.string.isRequired,
margin: PropTypes.string,
value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export {SelectInput}

