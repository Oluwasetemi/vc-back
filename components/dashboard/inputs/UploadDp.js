import React from 'react';
import styled from 'styled-components';
import alt from '../../../public/assets/String-initials.png';
import camera from '../../../public/assets/camera.svg';

const Wrapper = styled.div`
    input {
        display: none;
    }
    .dp {
        width: 70px;
        height: 70px;
        background-color: #9c9b7c;
        border-radius: 50%;
        justify-content: center;
        background-color: #9c9b7c;
        position: relative;
        cursor: pointer;
        .picture {
            max-width: 100%;
        }
    }
    .absolute {
        bottom: -8px;
        right: 0;
        cursor: pointer;
        position: absolute;
    }
`;
class UploadDp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: alt,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
        });
    }

    render() {
        return (
            <Wrapper>
                <input accept="image/*" id="icon-button-file" type="file" type="file" onChange={this.handleChange} />
                <label htmlFor="icon-button-file">
                    <div className="dp flex" color="primary" aria-label="upload picture" component="span">
                        <img className="picture" src={this.state.file} />
                        <img className="absolute" src={camera} onChange={this.handleChange} />
                    </div>
                </label>
            </Wrapper>
        );
    }
}
export { UploadDp };
