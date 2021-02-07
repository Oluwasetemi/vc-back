import styled from 'styled-components';
import menShoes from '../../public/assets/men_shoes.png';

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
    .mt-50 {
        margin-top: 50px;
    }
    .paper {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 25px 29px;
        margin-bottom: 50px;
        #tag {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 21px;
            color: #2f3930;
        }
    }
    .item-details {
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .flex {
        display: flex;
    }
    .grid {
        display: grid;
    }
    .item-image {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${menShoes});
        padding: 38px 5px;
        border-radius: 5px;
        width: 216px;
        margin-bottom: 20px;
        height: 308px;
        background-repeat: no-repeat;
        background-position: center;
        /* margin-right: auto; */
    }

    .full-detail {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
    .full-detail .rhs .grid {
        grid-template-columns: 1fr 1fr;
        padding: 11px 0;
        border-bottom: 1px solid #d6d8d3;
    }
    .full-detail .rhs .grid .text {
        font-size: 15px;
        line-height: 24px;
        color: #2f3930;
    }
    .full-detail .rhs .grid .bold {
        white-space: nowrap;
        justify-self: end;
        font-weight: 600;
    }
    .full-detail .rhs .first {
        border-top: 1px solid #d6d8d3;
    }
`;

export default Wrapper;
