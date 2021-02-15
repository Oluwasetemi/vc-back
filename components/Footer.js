import styled from 'styled-components';
import ashLogo from '../public/assets/ash_logo.svg'
const FooterStyles = styled.footer`
    width: 100%;
    height: 248px;
    display: flex;
    flex-direction: column;
    background-color: #F3F0F0;
    justify-content: center;
    align-items: center;
p{
    font-size: 12px;
line-height: 16px;
margin-top:19px;
color: #9C9B7C;
}
`;

export default function Footer() {
    return (
        <>
            <FooterStyles>
                <img src={ashLogo} alt="brand Logo" className="logo" /> 
                <p>Copyright © {(new Date().getFullYear())} Postagraph</p>
            </FooterStyles>
        </>
    );
}
