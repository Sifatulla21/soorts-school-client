import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const classDetails = useLoaderData();
    const {_id, name, price} = classDetails;
    return (
        <div>
            <h1>Payment For: {name}</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm classDetails={classDetails}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;