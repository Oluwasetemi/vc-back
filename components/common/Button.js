/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SmallSpinner from './spinner/SmallSpinner';

const Wrapper = styled.div`
    width: 100%;

    .pinkBtn {
        border: 1px solid #fff1de;
        color: #f26144;
        background-color: #fff1de;
    }

    .pinkBtn:hover {
        color: #fff1de;
        background-color: #f26144;
        transition: 0.4s;
    }
    .peachBtn {
        border: 1px solid #ffdba8;
        color: #f26144;
        background-color: #ffdba8;
    }

    .peachBtn:hover {
        color: #ffdba8;
        background-color: #f26144;
        transition: 0.4s;
    }
    .orangeBtn {
        border: 1px solid #f26144;
        color: #ffffff;
        background-color: #f26144;
    }

    .orangeBtn:hover {
        color: #f26144;
        background-color: #fff1de;
        transition: 0.4s;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

function Button({ style, theme, isLoading, disabled, children, text, title, ...rest }) {
    const themeClassName = theme ? `${theme}Btn` : '';
    return (
        <Wrapper>
            <button
                disabled={disabled}
                type="button"
                className={`${themeClassName} ${theme} button`}
                title={title}
                style={{
                    borderRadius: '9px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily:
                        ' Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    outline: 'none',
                    cursor: 'pointer',
                    ...style,
                }}
                {...rest}
            >
                {isLoading ? (
                    <SmallSpinner />
                ) : (
                    <>
                        <span>{text}</span>
                        {children}
                    </>
                )}
            </button>
        </Wrapper>
    );
}

Button.defaultProps = {};

Button.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.any,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default Button;
