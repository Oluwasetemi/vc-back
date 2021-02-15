import { useMutation } from '@apollo/client';
import Button from '@components/common/Button';
import gql from 'graphql-tag';
import useForm from 'lib/useForm';
import Link from 'next/link';
import React from 'react';
import { PasswordInput, TextInput } from './inputs';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            message
            token
        }
    }
`;

export default function Signin() {
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
    });
    const [signin, { error, loading }] = useMutation(SIGNIN_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    return (
        <div className="paper">
            <h1>Log In</h1>
            <p className="greeting">Welcome to your admin portal. Enter your details to login.</p>
            <div className="mb-30">
                <TextInput
                    label="Email Address"
                    type="text"
                    placeholder="name@example.com"
                    value={inputs.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-30">
                <PasswordInput
                    label={
                        <div className="label-name flex">
                            <span>Password</span>
                            {/* <span className="orange-link">
                                <Link href="/requestpasswordreset">Forgot Your Password?</Link>
                            </span> */}
                        </div>
                    }
                    value={inputs.password}
                    onChange={handleChange}
                />
            </div>
            <Link href="/dashboard">
                <Button type="submit" theme="orange">
                    Log In
                </Button>
            </Link>
        </div>
    );
}
