import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function SingleItem({ name, id, userid }) {
    return (
        <div className="grid-items">
            <Link
                href={{
                    pathname: '/clients/item',
                    query: { id, userid },
                }}
            >
                <div className="product">
                    <div className="image image1" />
                </div>
            </Link>
            <p className="name text">{name}</p>
            <p className="id text">ID: {id.slice(-6)}</p>
            {/* {button} */}
        </div>
    );
}

SingleItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.any,
    userid: PropTypes.any,
};
