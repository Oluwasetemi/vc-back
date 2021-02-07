import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkMaterial from '@material-ui/core/Link';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import SearchStylist from '../../../components/dashboard/clients/stylist/SearchStylist';

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
`;
const query = [
    'Steven Toliver',
    'Alexa Jobs',
    'James Bond',
    'Frank Ben',
    'Ade Luke',
    'Medley Brian',
    'Simi James',
    'Steven Toliver',
];
function stylists(props) {
    return (
        <Wrapper>
            <DashboardLayout>
                <Breadcrumbs
                    className="bread-crumbs"
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <LinkMaterial className="crumbs" color="inherit" href="/dashboard">
                        Home
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="inherit" href="/clients">
                        Clients
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Stylists
                    </LinkMaterial>
                </Breadcrumbs>

                <SearchStylist query={query} />
            </DashboardLayout>
        </Wrapper>
    );
}

stylists.propTypes = {};

export default stylists;
