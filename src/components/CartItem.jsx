


export default function CartItem({item, allItems, updateCart}){

    function removeItem(){
        const updatedCart = allItems.filter(cartItem => cartItem.cartId !== item.cartId);
        updateCart(updatedCart);
    }

    return (
        <div className="product">
            <img src={item.imgSrc} alt={item.name} />
            <h3>{item.name}</h3>
            <p>price:{item.price}</p>
            <button className="btn" onClick={removeItem}>Remove from cart</button>
        </div>
    )
}