import { useSubscription } from '@apollo/client';
import React from 'react';
import { NEW_REQUEST } from '../pages/dashboard';

export default function Newrequest() {
    const { errorSub, loadingSub, dataSub } = useSubscription(NEW_REQUEST);
    console.log({ errorSub, loadingSub, dataSub });

    return (
        <div>
            <p>New Request</p>
        </div>
    );
}
