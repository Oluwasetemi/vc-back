import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import SingleItem from './Item';

export default function SingleOutfit({ outfit }) {
    return (
        <div className="gray-paper-client mb-22">
            <div className="flex mb-26">
                <p className="season season1">{outfit.name}</p>{' '}
                <Link href={{ pathname: '/clients/editoutfit', query: { id: outfit._id, userid: outfit.user._id } }}>
                    <span className="edit-outfit">Edit Outfit</span>
                </Link>
            </div>
            <div className="flexy">
                {outfit.items.map((item) => (
                    <SingleItem item={item} userId={outfit.user._id} />
                ))}
            </div>
        </div>
    );
}

SingleOutfit.propTypes = {
    outfit: PropTypes.shape({
        _id: PropTypes.any,
        category: PropTypes.any,
        items: PropTypes.shape({
            map: PropTypes.func,
        }),
        user: PropTypes.shape({
            _id: PropTypes.any,
        }),
    }),
};
