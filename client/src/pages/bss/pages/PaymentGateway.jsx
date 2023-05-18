import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log('token = ',token);
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51N98S7SJEFJloXvKe5zee6E0rZqVpCdUbdwX88v51OSIkZ3qlc3nG3nOYyp15j9GWs4PRLHwsw5SqXkBNkZBPcsc00szD2ao35"
      />
    )
  }
}