import styled from "styled-components";
import brand from "../public/assets/brand.svg";

const Wrapper = styled.div`
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
position: fixed;
width: 100%;
height: 48px;
top: 0;
z-index: 1;
background-color: #fff;
.main {
    max-width: ${(props) => props.theme.breakpoint.lg};
    margin: auto;
padding: 8px 35px;
}
`

export default function Header() {
    return <Wrapper className="header">
        <div className="main">
        <img src={brand} alt="brand"></img>        
        </div>
    
    </Wrapper>;
}
