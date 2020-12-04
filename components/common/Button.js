/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallSpinner from './spinner/SmallSpinner';

const Wrapper = styled.div`
width: 100%;

.pinkBtn {
	border: 1px solid #FFF1DE;
    color:  #F26144;
	background-color:  #FFF1DE;
}
;
}
.pinkBtn:hover {
    color:#FFF1DE;
	background-color:  #F26144;
	transition: 0.4s;
}


.button {
	display: flex;
	align-items: center;
	justify-content: center;
	
}
`;


function Button({style, theme, isLoading, children, text, title, ...rest}) {
	const themeClassName = theme ? `${theme}Btn`: '';
	return (
		<Wrapper>

			<button
				disabled={isLoading}
				type="button"
				className={`${themeClassName} button`}
				title={title}
				style={{
					borderRadius: '9px',
					fontSize: '14px',
					fontWeight: 'bold',
					outline: 'none',
					cursor: 'pointer',
					...style
				}}
				{...rest }
			>
				{isLoading ?
					<SmallSpinner /> :
					<React.Fragment>
						<span>{text}</span>
						{children}
					</React.Fragment>
				}
			</button>
		</Wrapper>

	);
}

Button.defaultProps = {
	isLoading: false,
};

Button.propTypes = {
	style: PropTypes.object,
	title: PropTypes.string,
	theme: PropTypes.oneOf([
		'pink',
		'purple',
		'yellow',
		'green',
		'white',
		'deepYellow',
		'darkGreen'])
};


export default Button;

