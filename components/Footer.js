import styled from 'styled-components';
import ashLogo from '../public/assets/ash_logo.png'
const FooterStyles = styled.footer`
    width: 100%;
    height: 248px;
    display: flex;
    background-color: #F3F0F0;
    justify-content: center;
    align-items: center;

`;

export default function Footer() {
    return (
        <>
            <FooterStyles>
                <img src={ashLogo} alt="brand Logo" className="logo" /> 
            </FooterStyles>
        </>
    );
}
