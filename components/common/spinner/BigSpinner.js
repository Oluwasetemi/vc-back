import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 222;
		background: rgba(0, 0, 0, 0.6);
		.modal-main {
			text-align: center;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
		}
	}
		.MuiCircularProgress-indeterminate{
				width: 100px !important;
		height: 100px !important;
		color: ${(props) => props.theme.color.brand_02};
		}
`;

function BigSpinner() {
	return (
		<Wrapper>
			<div className="modal">
				<section className="modal-main">
					<div className="loader">
						<CircularProgress />
					</div>
				</section>
			</div>
		</Wrapper>
	);
}

BigSpinner.propTypes = {};

export default BigSpinner;
