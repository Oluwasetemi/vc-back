import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function SingleItem({ item, userId, button }) {
    return (
        <div className="grid-items">
            <Link
                href={{
                    pathname: '/clients/item',
                    query: { id: item._id, userId },
                }}
            >
                <div className="product">
                    <div className="image image1" />
                </div>
            </Link>
            <p className="name text">{item.name}</p>
            <p className="id text">ID: {item._id.slice(-6)}</p>
            {button}
        </div>
    );
}

SingleItem.propTypes = {
    button: PropTypes.any,
    item: PropTypes.shape({
        _id: PropTypes.shape({
            slice: PropTypes.func,
        }),
        name: PropTypes.any,
    }),
    userId: PropTypes.String,
};
