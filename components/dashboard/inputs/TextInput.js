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
input{
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
`

function TextInput({type, value, onChange,placeholder ,label,margin,}) {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<Wrapper>
			<div  className={`${margin}`}>
			<h6 className="input_label">{label}</h6>
			 <input type={type ? type : 'number'} placeholder={placeholder} value={value} onChange={handleChange} />
			</div>
					</Wrapper>
	)
}

TextInput.propTypes = {
type: PropTypes.string,
placeholder: PropTypes.string,
label: PropTypes.string.isRequired,
value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export  {TextInput}

