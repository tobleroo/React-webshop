

import React from 'react';
// import { Link } from 'react-router-dom';


export default function Navbar({changePage, currentPage, cartSize}){

    function changeComponent(pageName){
        if(pageName === 'cart'){
            changePage('cart')
        } else if(pageName === 'shop') {
            changePage('shop')
        }
    }


    return (
        <div className="navbar">
            <button className='linkBtn' onClick={() => {changeComponent('shop')}}>Shop</button>

            <div className="cart-box">
                <button className='linkBtn' onClick={() => {changeComponent('cart')}}>Cart</button>
                <span>items in cart: {cartSize}</span>
            </div>

        </div>

    )
}