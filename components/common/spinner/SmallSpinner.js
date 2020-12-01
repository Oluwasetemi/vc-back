import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
.MuiCircularProgress-indeterminate{
	width: 15px !important;
	height: 15px !important;
	color: ${(props) => props.theme.color.brand_02};
	}
`;

function SmallSpinner() {
	return (
		<Wrapper>
			<CircularProgress />
		</Wrapper>
	);
}

SmallSpinner.propTypes = {

};

export default SmallSpinner;

