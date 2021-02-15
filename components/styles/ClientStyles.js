import menShoes from '@public/assets/men_shoes.png';
import pants from '@public/assets/pants.png';
import shirt from '@public/assets/shirt.png';
import tie from '@public/assets/tie.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    .bread-crumbs {
        margin: 30px 0 10px 0;
    }
    .crumbs {
        font-size: 18px;
        line-height: 30px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            font-size: 13px;
        }
    }
    .mb-10 {
        margin-bottom: 10px;
    }
    .paper-client {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 25px 29px;
        margin: 30px 0 50px 0;
        #tag {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            color: #2f3930;
        }
        .wrap {
            flex-wrap: wrap;
        }
    }

    .paper-client .MuiAppBar-colorPrimary {
        color: #2f3930;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
        margin-bottom: 20px;
    }

    .paper-client .MuiTab-wrapper {
        font-weight: 500;
        font-size: 13px;
        line-height: 24px;
        text-transform: capitalize;
    }
    .paper-client .PrivateTabIndicator-colorSecondary-18 {
        background-color: #f26144;
    }

    .paper-client .MuiTab-root {
        min-width: auto;
        padding: 0;
        margin-right: 24px;
        letter-spacing: 0;
    }
    .paper-client .MuiTab-textColorInherit {
        color: #9c9b7c;
    }
    .paper-client .Mui-selected {
        color: #2f3930;
    }
    .paper-client .MuiTabs-fixed {
        overflow-x: scroll !important;
        &::-webkit-scrollbar {
            height: 0.1rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
            border-radius: 0.5rem;
        }
    }
    .gray-paper-client {
        background: #fbfcfa;
        padding: 24px 35px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .mt-10-sm{
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
                  margin-top: 10px;
        }

    }
    .mb-22{
        margin-bottom: 22px;
    }
    .mt--30{
        margin-top: -30px;
    }
    .gray-paper-client .season {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.75px;
        margin-bottom: 26px;
        text-transform: uppercase;
        color: #2f3930;
    }
    .gray-paper-client .season1 {
        margin-bottom: 0;
    }
    .mb-26 {
        margin-bottom: 26px;
    }
    .mt-22 {
        margin-top: 22px;
    }

    .paper-client .MuiBox-root {
        padding: 0;
        max-width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            height: 0.1rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #f26144;
            border-radius: 0.5rem;
        }
    }
    .paper-client .flexy {
        display: flex;
        width: 100%;
        min-width: max-content;
        margin: 0 0 30px 0;
    }

    .grid-items .product {
        background-color: #f3f0f0;
        padding: 38px 5px;
        position: relative;
        margin-right: 28px;
        border-radius: 5px;
        overflow: hidden;
        width: 157px;
        cursor: pointer;
    }
    .grid-items .product:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        height: 0%;
        width: 100%;
        bottom: 0;
        transition: height 0.5s ease-out;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
    .grid-items .product:hover:before {
        height: 100%;
    }
    .grid-items .image {
        height: 172px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .grid-items .image1 {
        background-image: url(${shirt});
    }
    .grid-items .image2 {
        background-image: url(${pants});
    }
    .grid-items .image3 {
        background-image: url(${menShoes});
    }
    .grid-items .image4 {
        background-image: url(${tie});
    }
    .grid-items .text {
        font-size: 16px;
        line-height: 24px;
        color: #2f3930;
    }
    .grid-items .name {
        font-weight: bold;
        margin: 18px 0 10px 0;
    }
    .absolute {
        position: absolute;
    }
    .product .location {
        right: 8px;
        bottom: 8px;
    }

    .button {
        padding: 0.4rem 2.5rem;
    }
    .gray-paper-client .edit-outfit {
        font-weight: 600;
        margin-left: 19px;
        font-size: 16px;
        line-height: 32px;
        text-decoration-line: underline;
        color: #f26144;
        cursor: pointer;
        &:hover {
            text-decoration: none;
            transition: 0.3s;
        }
    }
`;

export default Wrapper;
