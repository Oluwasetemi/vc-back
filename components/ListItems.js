import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import calendarIcon from '../public/assets/calendarIcon.svg';
import clientsIcon from '../public/assets/clientsIcon.svg';
import homeIcon from '../public/assets/homeIcon.svg';
import paymentsIcon from '../public/assets/paymentsIcon.svg';
import subscriptionsIcon from '../public/assets/subscriptionsIcon.svg';
import supportIcon from '../public/assets/supportIcon.svg';

const Wrapper = styled.div`
    .MuiTypography-body1 {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #2f3930;
    }
    .MuiListItemIcon-root {
        min-width: 25px;
    }
    .MuiList-padding {
        padding-top: 0;
    }
    .MuiListItem-gutters {
        padding-left: 24px;
    }
    .active {
        background: #f3f0f0;
        border-left: 2px solid #f26144;
    }
    .active {
        background: #f3f0f0;
        border-left: 2px solid #f26144;
    }
`;

export function ListItems() {
    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }
    const router = useRouter();
    return (
        <Wrapper>
            <List>
                <Link href="/dashboard">
                    <ListItemLink className={router.pathname === '/dashboard' ? 'active' : ''}>
                        <ListItemIcon>
                            <img src={homeIcon} alt="homeIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemLink>
                </Link>

                <Link href="/calendar">
                    <ListItemLink
                        className={
                            (router.pathname === '/calendar' ? 'active' : '') ||
                            (router.pathname === '/calendar/allEvents' ? 'active' : '') ||
                            (router.pathname === '/requests/pickupRequest' ? 'active' : '') ||
                            (router.pathname === '/requests/deliveryRequest' ? 'active' : '') ||
                            (router.pathname === '/requests/startPickup' ? 'active' : '') ||
                            (router.pathname === '/requests/sendPickup' ? 'active' : '') ||
                            (router.pathname === '/deliveries/delivery' ? 'active' : '')
                        }
                    >
                        <ListItemIcon>
                            <img src={calendarIcon} alt="calendarIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemLink>
                </Link>

                <Link href="/clients">
                    <ListItemLink
                        className={
                            (router.pathname === '/clients' ? 'active' : '') ||
                            (router.pathname === '/clients/client' ? 'active' : '') ||
                            (router.pathname === '/clients/item' ? 'active' : '') ||
                            (router.pathname === '/clients/paymenthistory' ? 'active' : '') ||
                            (router.pathname === '/clients/subscriptionhistory' ? 'active' : '') ||
                            (router.pathname === '/clients/createoutfit' ? 'active' : '') ||
                            (router.pathname === '/clients/editoutfit' ? 'active' : '') ||
                            (router.pathname === '/clients/reviewoutfit' ? 'active' : '') ||
                            (router.pathname === '/clients/outfitcreated' ? 'active' : '') ||
                            (router.pathname === '/clients/wardrobe' ? 'active' : '') ||
                            (router.pathname === '/clients/wardrobe/addtowardrobe1' ? 'active' : '') ||
                            (router.pathname === '/clients/wardrobe/addtowardrobe2' ? 'active' : '') ||
                            (router.pathname === '/clients/wardrobe/addtowardrobe3' ? 'active' : '') ||
                            (router.pathname === '/clients/addstylist' ? 'active' : '') ||
                            (router.pathname === '/clients/stylists' ? 'active' : '') ||
                            (router.pathname === '/clients/stylists/stylist' ? 'active' : '')
                        }
                    >
                        <ListItemIcon>
                            <img src={clientsIcon} alt="clientsIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Clients" />
                    </ListItemLink>
                </Link>
                <Link href="/payments">
                    <ListItemLink className={router.pathname === '/payments' ? 'active' : ''}>
                        <ListItemIcon>
                            <img src={paymentsIcon} alt="paymentsIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Payments" />
                    </ListItemLink>
                </Link>

                <Link href="/subscriptions">
                    <ListItemLink className={router.pathname === '/subscriptions' ? 'active' : ''}>
                        <ListItemIcon>
                            <img src={subscriptionsIcon} alt="subscriptionsIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Subscriptions" />
                    </ListItemLink>
                </Link>

                <Link href="/support">
                    <ListItemLink className={router.pathname === '/support' ? 'active' : ''}>
                        <ListItemIcon>
                            <img src={supportIcon} alt="supportIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Support" />
                    </ListItemLink>
                </Link>
            </List>
        </Wrapper>
    );
}
