import { useQuery } from '@apollo/client';
import Button from '@components/common/Button';
import gql from 'graphql-tag';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SingleItem = ({ image, name, id }) => (
    <div className="grid-items">
        <div className="product">
            <div className="image image1" />
        </div>
        <p className="name text">{name}</p>
        <p className="pink"> Remove</p>
    </div>
);

// FETCH SINGLE OUTFIT
const SINGLE_OUTFIT = gql`
    query SINGLE_OUTFIT($id: ID!) {
        fetchOneOutfit(id: $id) {
            _id
            name
            description
            items {
                _id
                name
            }
            user {
                _id
                email
            }
            tags
            recommendations {
                type
                note
            }
            createdAt
            updatedAt
        }
    }
`;

const SingleOutfit = ({ id, userid }) => {
    const { data, loading, error } = useQuery(SINGLE_OUTFIT, {
        variables: { id },
    });
    // console.log(data);

    return (
        <div className="paper paper-tail">
            <div className="flex">
                <h1>Outfit</h1>
                <Link href={{ pathname: '/clients/reviewoutfit', query: { id, userid } }}>
                    <Button theme="orange">Continue</Button>
                </Link>
            </div>

            <div className="scroll">
                <div className="grid">
                    {data && data.fetchOneOutfit.items.length === 0 ? (
                        <p>No items in the outfit</p>
                    ) : (
                        data &&
                        data.fetchOneOutfit.items.map((item) => (
                            <SingleItem name={item.name} id={item._id} key={item._id} image={item.image} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

SingleOutfit.propTypes = {
    id: PropTypes.any,
    userid: PropTypes.any,
};

export default SingleOutfit;
