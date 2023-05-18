import { useEffect, useState } from "react";

import axios from "axios";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTION_PURCHASE } from "../redux/cart/cart.actions";
import { getUserData } from "../redux/auth/auth.actions";
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


function RazorPay() {
  const navigate = useNavigate()
  const onToken = (token) => {
    console.log('token = ',token);
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    navigate("/OrderSuccessfull")
  }

  return (
    <Stack zIndex={500}>
       <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N98S7SJEFJloXvKe5zee6E0rZqVpCdUbdwX88v51OSIkZ3qlc3nG3nOYyp15j9GWs4PRLHwsw5SqXkBNkZBPcsc00szD2ao35"
      />
    </Stack>
  );
}

export default RazorPay;