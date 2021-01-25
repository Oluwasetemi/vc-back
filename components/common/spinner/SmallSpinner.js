import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";

const Wrapper = styled.div`
  .MuiCircularProgress-indeterminate {
    width: 15px !important;
    height: 15px !important;
    color: gray;
  }
`;

function SmallSpinner() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}

SmallSpinner.propTypes = {};

export default SmallSpinner;
