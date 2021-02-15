import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
    query {
        me {
            _id
            name
            email
            password
            type
            phone
            source
            image
            gender
            nationality
            resetPasswordExpires
            resetPasswordToken
            otpExpires
            otp
            verified
            token
        }
    }
`;

function useUser() {
    const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
    if (data) {
        return data.me;
    }
}

export { CURRENT_USER_QUERY, useUser };
