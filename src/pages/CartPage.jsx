
// import React from 'react';

import CartItem from "../components/CartItem"
import { useState, useEffect } from "react";
import { updateDatabase } from "../services/DatabaseConn";

export default function Cart({cartItems, updateCart, dbItems, changePage}) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(CalcTotalPrice())
    }, [cartItems])

    function CalcTotalPrice(){
        return cartItems.length ? cartItems.reduce((total, item) => total + item.price, 0): 0;
    }

    function makePurchase(dbItems, cartItems){
        updateDatabase(dbItems, cartItems)
        alert("Thank you for your purchase!");
        updateCart([]);
        changePage("shop");
    }

    function clearCart(){
        updateCart([]);
        changePage("shop");
    };

    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="products">
                {cartItems.length ? (
                cartItems.map((item, index) => {
                    return <CartItem key={index} item={item} allItems={cartItems} updateCart={updateCart} />
                })): (
                    <p>Cart is empty</p>
                )} 
            </div>
            
            <b>total price: {totalPrice} bitcoin</b>
            <div className="buttonBox">
                <button id="buyBtn" onClick={() => {makePurchase(dbItems, cartItems)}}>Place order</button>
                <button id="clearBtn" onClick={clearCart}>Clear cart</button>
            </div>

        </div>
    )
}