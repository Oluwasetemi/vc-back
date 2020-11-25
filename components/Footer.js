import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  img.logo {
    height: 2em;
    margin: 5px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        Made with{" "}
        <img src="/netliheart.svg" alt="Netlify Logo" className="logo" /> for
        you
      </FooterStyles>
    </>
  );
}
