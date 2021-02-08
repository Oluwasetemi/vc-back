import { useQuery } from '@apollo/client';
import { Paper } from '@material-ui/core';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';

const ONE_ITEM_QUERY = gql`
    query ONE_ITEM_QUERY($id: ID!, $userId: ID!) {
        fetchOneItemUser(id: $id, userId: $userId) {
            _id
            name
            type
            brand
            category
            pickup {
                datetimePicked
            }
        }
    }
`;

export default function SingleItemFull() {
    const { query } = useRouter();
    const { id, userid } = query;
    const { data, loading, error } = useQuery(ONE_ITEM_QUERY, {
        variables: { id, userId: userid },
    });
    return (
        <Paper className="paper">
            <h1 id="tag">{loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.name}</h1>
            <div className="flex item-details wrap">
                <div className="item-image" />
                <div className="full-detail grid">
                    <div className="rhs">
                        <div className="list grid first">
                            <p className="text">Item Name</p>
                            <p className="text bold">
                                {loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.name}
                            </p>
                        </div>
                        <div className="list grid">
                            <p className="text">Type </p>
                            <p className="text bold">
                                {loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.type}
                            </p>
                        </div>
                        <div className="list grid">
                            <p className="text">Label</p>
                            <p className="text bold">
                                {loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.brand}
                            </p>
                        </div>
                        <div className="list grid">
                            <p className="text">Location</p>
                            <p className="text bold">In Storage</p>
                        </div>
                    </div>
                    <div className="rhs">
                        <div className="list grid first">
                            <p className="text">Item Tag</p>
                            <p className="text bold">
                                {loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.tag || 'tag'}
                            </p>
                        </div>
                        <div className="list grid">
                            <p className="text">Category</p>
                            <p className="text bold">
                                {loading ? 'loading' : error ? 'no data' : data.fetchOneItemUser.category}
                            </p>
                        </div>
                        <div className="list grid">
                            <p className="text">Date of Last Pickup</p>
                            <p className="text bold">
                                {loading
                                    ? 'loading'
                                    : error
                                    ? 'no data'
                                    : (data.fetchOneItemUser.pickup &&
                                          data.fetchOneItemUser.pickup.datetimePicked.substring(0, 10)) ||
                                      'none'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
}
