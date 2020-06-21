import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price})=> {
  const priceForStripe =  price*100;
  const publishableKey = 'pk_test_51GwN10B1VNWVuYQuxoXnM84Vez6jqWtqY0pbgs4ECPCdNMyHl9pIWC0vmbjkk26aYi9LuNtRI6LKaYY9vel5pauL00tkRg0F4Y';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel='Pay Now'
      token = {onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;