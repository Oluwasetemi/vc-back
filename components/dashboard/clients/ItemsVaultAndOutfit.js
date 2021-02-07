/* eslint-disable react/jsx-props-no-spreading */
import Button from '@components/common/Button';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import vaultIcon from '../../../public/assets/Vault.svg';
import SingleItem from './Item';
import SingleOutfit from './SingleOutfit';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

TabPanel.propTypes = {
    children: PropTypes.any,
    index: PropTypes.any,
    value: PropTypes.any,
};

export default function ItemsVaultAndOutfit({ user }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper className="paper-client">
            <h1 id="tag">Items</h1>
            <AppBar position="static">
                <div className="flex wrap" style={{ justifyContent: 'space-between' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label={`Closet (${(user && user.closet && user.closet.items.length) || 0})`} />
                        <Tab label="Vault (coming soon)" />
                        <Tab label={`Outfits (${user.outfit.length})`} />
                    </Tabs>
                    {value === 1 && (
                        <TabPanel value={value} index={1}>
                            <Link href="/clients/editOutfit">
                                <Button theme="orange">Edit</Button>
                            </Link>
                        </TabPanel>
                    )}
                    {value === 2 && (
                        <TabPanel value={value} index={2}>
                            <Link
                                href={{
                                    pathname: '/clients/createoutfit',
                                    query: { userid: user._id },
                                }}
                            >
                                <Button theme="orange"> Create an Outfit</Button>
                            </Link>
                        </TabPanel>
                    )}
                </div>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="flexy">
                    {user.closet === null ? (
                        <p>No items in the user closet</p>
                    ) : (
                        user.closet.items.map((item) => <SingleItem item={item} userId={user._id} />)
                    )}
                </div>
            </TabPanel>
            {value === 1 && (
                <TabPanel value={value} index={1} className="gray-paper-client">
                    <p className="season">Sweet Summer </p>
                    <div className="flexy">
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image1" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                    </div>
                    <p className="season">Sweet Summer </p>
                    <div className="flexy">
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image1" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <Link href="/clients/item">
                                <div className="product">
                                    <div className="location absolute">
                                        <img src={vaultIcon} alt="vault" />{' '}
                                    </div>
                                    <div className="image image2" />
                                </div>
                            </Link>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                    </div>
                </TabPanel>
            )}

            {value === 2 && (
                <TabPanel value={value} index={2}>
                    <>
                        {user.outfit && user.outfit.length === 0 ? (
                            <p>user do not have any outfit</p>
                        ) : (
                            user.outfit.map((outfit) => <SingleOutfit outfit={outfit} userId={user._id} />)
                        )}
                    </>
                </TabPanel>
            )}
        </Paper>
    );
}

ItemsVaultAndOutfit.propTypes = {
    user: PropTypes.shape({
        _id: PropTypes.any,
        closet: PropTypes.shape({
            items: PropTypes.shape({
                length: PropTypes.any,
                map: PropTypes.func,
            }),
        }),
        outfit: PropTypes.shape({
            length: PropTypes.any,
            map: PropTypes.func,
        }),
    }),
};
