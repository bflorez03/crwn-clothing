import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HLWngIiLpIs0KA160JtMv7hQ3jYQZpfIed8t2UvvudQzOpptS9ibQV8dTqoRv9EbQkKEAEezggQu2Q96Utc5AZX00SqnGlqZz';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment, Please sure you use the provided credit cart');
      });
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CROWN Clothing.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
