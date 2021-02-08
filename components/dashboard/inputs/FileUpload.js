import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 12px;

    input[type='file'] {
        position: absolute;
        z-index: -1;
        top: 6px;
        left: 0px;
        font-size: 15px;
        color: rgb(153, 153, 153);
    }

    .new-button {
        padding: 8px 12px;
        cursor: pointer;
        font-family: 'Matteo';
        font-weight: 600;
        border: none;
        padding: 7px 15px;
        border-radius: 10px;
        background-color: #fff1de;
        color: #f26144;
        font-weight: 600;
        font-size: 14px;
    }
    img {
        max-width: 100%;
        height: auto;
        margin-top: 20px;
    }
`;
function FileUpload({ onChange, src }) {
    return (
        <Wrapper>
            <label className="new-button" htmlFor="upload">
                {' '}
                Choose Image
            </label>
            <input id="upload" type="file" onChange={onChange} />
            {src && <img src={src} alt="item preview" />}
        </Wrapper>
    );
}

FileUpload.propTypes = {
    onChange: PropTypes.any,
    src: PropTypes.any,
};

export default FileUpload;
