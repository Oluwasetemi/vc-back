import styled from 'styled-components';

const Wrapper = styled.div`
    .bread-crumbs {
        margin: 30px 0;
    }
    .crumbs {
        font-size: 18px;
        line-height: 30px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            font-size: 13px;
        }
    }
  
    .searchbar {
        position: absolute;
        top: 0;
        right: 24px;
        background: #ffffff;
        border: 1px solid #9c9b7c;
        border-radius: 10px;
        padding: 3px 15px;
        max-width: 30%;
        display: flex;
        overflow: hidden;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            position: relative;
            max-width: 50%;
            margin-bottom: 10px;
            margin-top: 10px;
            margin-left: auto;
        }
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            max-width: 100%;
            right: 0;
        }

        &:focus-within {
            border: 1px solid #f26144;
        }
        input {
            outline: none;
            border: none;
            font-size: 14px;
            line-height: 24px;
            font-family: 'Matteo';
            padding-left: 8px;
        }
    }
    .paper {
        margin-top: 29px;
        background-color: #fff;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 100%;
        overflow-x: auto;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            padding-top: 20px;
        }

        &::-webkit-scrollbar {
            height: 0.4rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #f26144;
            border-radius: 0.5rem;
        }
    }
    .status {
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
        background: #9c9b7c;
        border-radius: 10px;
        padding: 2px 20px;
        white-space: nowrap;
    }
    td .button {
        padding: 0.4rem 2rem;
    }
    .MuiTableCell-paddingCheckbox {
        display: none;
    }
    .MuiTableSortLabel-root {
        font-size: 12px;
        line-height: 16px;
        color: #4b6962;
        font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        font-weight: normal;
    }
    .MuiTableCell-root,
    .MuiTablePagination-caption {
        font-size: 14px;
        line-height: 24px;
        color: #2f3930;
        text-align: left;
        padding: 16px 0 16px 30px;
        font-weight: 500;
        font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
    }
    tbody .MuiTableRow-root > th {
        padding-left: 30px;
    }
    .pagination {
        display: flex;
        justify-content: center;
        margin: 30px 0;
        img {
            cursor: pointer;
        }
    }
    .page {
        margin: 0 30px;
        color: #2f3930;
        font-size: 14px;
        line-height: 24px;
    }
    .MuiTableRow-root.Mui-selected,
    .MuiTableRow-root.Mui-selected:hover {
        background-color: rgba(0, 0, 0, 0);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 850px;
    }
`;

export default Wrapper;
