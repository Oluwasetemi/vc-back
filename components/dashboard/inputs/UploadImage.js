import camera from '@public/assets/photo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    input {
        display: none;
    }
    .image {
        background-size: cover;
    }
`;
function UploadImage() {
    const [image, setImage] = useState({ file: '' });
    const handleChange = (e) => {
        setImage({
            file: URL.createObjectURL(e.target.files[0]),
        });
    };

    return (
        <Wrapper>
            <input accept="image/*" id="icon-button-file" type="file" type="file" onChange={handleChange} />
            <label htmlFor="icon-button-file">
                <div className="product" aria-label="upload picture" component="span">
                    <div className="checked absolute">
                        {' '}
                        <img src={camera} onChange={handleChange} />
                    </div>
                    <div className="image" style={{ backgroundImage: `url(${image.file})` }} />
                </div>
            </label>
        </Wrapper>
    );
}

export { UploadImage };
