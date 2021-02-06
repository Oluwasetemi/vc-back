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

	textarea {
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

function Textarea({ value, onChange, label, name, placeholder }) {
	// const handleChange = event => {
	// 	onChange(event.target.value);
	// };
	return (
		<Wrapper>
			<div>
				<h6 className="input_label">{label}</h6>
				<textarea
					rows="8"
					value={value}
					onChange={onChange}
					name={name}
					placeholder={placeholder}
				/>
			</div>
		</Wrapper>
	);
}

Textarea.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { Textarea };
