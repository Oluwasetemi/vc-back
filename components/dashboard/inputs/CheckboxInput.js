import React, { useState } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

const Wrapper = styled.div`
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type=checkbox],
input[type=radio] {
    --active: #F26144;
    --active-inner: #fff;
    --background: #FF974E;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type=checkbox]:after,
input[type=radio]:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
  }
  input[type=checkbox]:checked,
input[type=radio]:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: .3s;
    --d-t: .6s;
    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
  }
  input[type=checkbox]:disabled,
input[type=radio]:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }
  input[type=checkbox]:disabled:checked,
input[type=radio]:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }
  input[type=checkbox]:disabled + label,
input[type=radio]:disabled + label {
    cursor: not-allowed;
  }
  input[type=checkbox]:hover:not(:checked):not(:disabled),
input[type=radio]:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }
  input[type=checkbox]:focus,
input[type=radio]:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  input[type=checkbox]:not(.switch),
input[type=radio]:not(.switch) {
    width: 21px;
  }
  input[type=checkbox]:not(.switch):after,
input[type=radio]:not(.switch):after {
    opacity: var(--o, 0);
  }
  input[type=checkbox]:not(.switch):checked,
input[type=radio]:not(.switch):checked {
    --o: 1;
  }
  input[type=checkbox] + label,
input[type=radio] + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }

  input[type=checkbox]:not(.switch) {
    border-radius: 4px;
  }
  input[type=checkbox]:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }
  input[type=checkbox]:not(.switch):checked {
    --r: 43deg;
  }
  input[type=checkbox].switch {
    width: 38px;
    border-radius: 11px;
  }
  input[type=checkbox].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }
  input[type=checkbox].switch:checked {
    --ab: var(--active-inner);
    --x: 17px;
  }
  input[type=checkbox].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }

  input[type=radio] {
    border-radius: 50%;
  }
  input[type=radio]:after {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
  }
  input[type=radio]:checked {
    --s: .5;
  }
}

`
function CheckboxInput() {
  const [isChecked,setIsChecked] = useState(true);
  const handleChecked= () =>{
    setIsChecked({isChecked: !isChecked});
  }
  
  return (
    <Wrapper>
    <input id="c1" type="checkbox" onChange={ handleChecked }/>
    </Wrapper>
  )
}

CheckboxInput.propTypes = {
}

export {CheckboxInput}

