import EventsTab from '@components/dashboard/events/EventsTab';
import DashboardLayout from '@components/layout/DashboardLayout';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	.bread-crumbs {
		margin: 30px 0 10px 0;
	}
	.crumbs {
		font-size: 18px;
		line-height: 30px;
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			font-size: 13px;
		}
	}
`;
function allEvents(props) {
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
					<LinkMaterial className="crumbs" color="inherit" href="/calendar">
						Calendar
					</LinkMaterial>
					<LinkMaterial className="crumbs" color="textPrimary" href="#">
						Events
					</LinkMaterial>
				</Breadcrumbs>
				<EventsTab />
			</DashboardLayout>
		</Wrapper>
	);
}

allEvents.propTypes = {};

export default allEvents;
