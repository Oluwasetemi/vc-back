import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import next from '@public/assets/next.svg';
import tabImage1 from '@public/assets/tabImage1.png';
import tabImage2 from '@public/assets/tabImage2.png';
import tabImage3 from '@public/assets/tabImage3.png';
import tabImage4 from '@public/assets/tabImage4.png';
import tabImage5 from '@public/assets/tabImage5.png';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .MuiAppBar-colorPrimary {
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
        padding: 0 10px;
        margin-bottom: 32px;
    }
    .prev {
        transform: scaleX(-1);
    }
    .MuiTabs-fixed {
        max-width: 100%;
        overflow-x: scroll !important;
        &::-webkit-scrollbar {
            height: 0.1rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #9c9b7c;
            border-radius: 0.5rem;
        }
    }
    .pd-0,
    .MuiBox-root {
        position: relative;
        padding: 0;
    }
    .control {
        position: absolute;
        width: 80%;
        cursor: pointer;
        justify-content: space-between;
        right: 75px;
        top: 50%;
        width: 45%;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            width: 30%;
        }
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            right: 20px;
        }
    }
    .MuiTab-wrapper {
        font-family: 'Matteo';
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #9c9b7c;
        text-transform: capitalize;
    }
    .MuiTab-root {
        padding: 0;
        min-width: auto;
        margin-right: 24px;
    }
    .PrivateTabIndicator-colorSecondary-3 {
        background-color: #f26144;
    }
    .MuiTab-textColorInherit.Mui-selected .MuiTab-wrapper {
        color: #2f3930;
    }
    .orange-title {
        font-weight: 600;
        margin-bottom: 49px;
        font-size: 30px;
        line-height: 32px;
        color: #f26144;
    }
    .tab-image {
        max-width: 100%;
    }
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
function HowItWorks(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Wrapper>
            <h1 className="orange-title">How it works</h1>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="1. You Book" />
                    <Tab label="2. We Collect" />
                    <Tab label="3. We Store & Catalogue" />
                    <Tab label="4. We Preserve" />
                    <Tab label="5. We Deliver" />
                </Tabs>
            </AppBar>

            <TabPanel className="pd-0" value={value} index={0}>
                <div className="control flex">
                    <img className="prev" src={next} onClick={() => (value === 0 ? value : setValue(value - 1))} />
                    <img src={next} onClick={() => (value < 4 ? setValue(value + 1) : value)} />
                </div>
                <img className="tab-image" src={tabImage1} alt="tabImage1" />
            </TabPanel>
            <TabPanel className="pd-0" value={value} index={1}>
                <div className="control flex">
                    <img className="prev" src={next} onClick={() => (value === 0 ? value : setValue(value - 1))} />
                    <img src={next} onClick={() => (value < 4 ? setValue(value + 1) : value)} />
                </div>
                <img className="tab-image" src={tabImage2} alt="tabImage2" />
            </TabPanel>
            <TabPanel className="pd-0" value={value} index={2}>
                <div className="control flex">
                    <img className="prev" src={next} onClick={() => (value === 0 ? value : setValue(value - 1))} />
                    <img src={next} onClick={() => (value < 4 ? setValue(value + 1) : value)} />
                </div>
                <img className="tab-image" src={tabImage3} alt="tabImage3" />
            </TabPanel>
            <TabPanel className="pd-0" value={value} index={3}>
                <div className="control flex">
                    <img className="prev" src={next} onClick={() => (value === 0 ? value : setValue(value - 1))} />
                    <img src={next} onClick={() => (value < 4 ? setValue(value + 1) : value)} />
                </div>
                <img className="tab-image" src={tabImage4} alt="tabImage4" />
            </TabPanel>
            <TabPanel className="pd-0" value={value} index={4}>
                <div className="control flex">
                    <img className="prev" src={next} onClick={() => (value === 0 ? value : setValue(value - 1))} />
                    <img src={next} onClick={() => (value < 4 ? setValue(value + 1) : value)} />
                </div>
                <img className="tab-image" src={tabImage5} alt="tabImage5" />
            </TabPanel>
        </Wrapper>
    );
}

HowItWorks.propTypes = {};

export default HowItWorks;
