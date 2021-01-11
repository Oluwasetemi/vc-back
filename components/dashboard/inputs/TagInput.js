/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import add from '../../../public/assets/Add.svg';

const Wrapper = styled.div`
h6{
	font-size: 14px;
line-height: 24px;
margin-bottom: 5px;
color: #2F3930;

}
.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child{
  padding: 6px 8px;
}
.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]{
  padding: 0px;
border-radius: 10px;
}
.MuiChip-root{
  background: #9C9B7C;
border-radius: 27px;
color: #fff;
height: 25px;
}
.MuiChip-label{
  padding: 2px 20px;
  font-size: 12px;
  font-family: Matteo;
  height: 22px;
}
.MuiChip-deleteIcon{
  height: 26px;
}
.MuiAutocomplete-clearIndicator{
   display: none;
}

  `

function TagInput({label}) {

  return (
    <Wrapper >
      <h6 className="input_label">{label}</h6>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={strengths}
      popupIcon = {<img src={add} />}
        getOptionLabel={(option) => option.title}
        defaultValue={[strengths[0],]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined"  />
        )}

      />

    </Wrapper>
  );
}

const strengths = [
  { title: 'Social' },
  { title: 'Shy' },
  { title: 'Awesome' },
  { title: 'Handsome' },


];

TagInput.propTypes = {
  label: PropTypes.string.isRequired,
  }


export { TagInput };
