import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
// import './PayPal.css'
import { useAuth0 } from "@auth0/auth0-react";
import { postPayment } from "../../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";



const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function CheckoutBut({totalPrice}) {
  const navigate = useNavigate(); 

  const {user, isAuthenticated} = useAuth0()
  const dispatch = useDispatch()
  

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log(data);
    console.log(user);
    let pago = {
      email: user.email,//orderID: '267984262X213011X', payerID
      orderID:data.orderID,
      payerID:data.payerID,
      amount: totalPrice
    }
    dispatch(postPayment(pago));
    swal({
      title:"Successful Payment",
      icon: "success",
    });
    navigate('/banner')
    
    console.log(actions.order.capture());
    return actions.order.capture();
  };

  
    //console.log('!!!!!!!!!!!!!!!!!', user.email)
  return (
    <div className="paypalButContainer">
      <PayPalButton style={{ color: "blue", shape: "pill", label: "pay", height: 40, with:20}}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)         
      }/>
    
    </div>
      
    );
    
  }
  

export default CheckoutBut
//<CheckoutBut totalPrice={7} items={1} totalItems={1} />