

export default function Product({itemData, updateCart, currentCartItems}) {

    function checkIfAvailable() {
        
        const amountInStock = itemData.stock;
        const amountInCart = currentCartItems.filter(item => item.name === itemData.name).length;
        if(amountInStock - amountInCart > 0) {
            return true;
        }
        return false;
    }

    function addToCart() {

        if(!checkIfAvailable()) {
            alert("No more items in stock!");
            return;
        }else{
           // random number between 1 and 10000
            const cartId = Math.floor(Math.random() * 10000) + 1;
            const itemDataWithId = {...itemData, cartId};
            updateCart([...currentCartItems, itemDataWithId]); 
        }
    }

    return (
        <div className="product">
            <img src={itemData.imgSrc} alt={itemData.name} />
            <h3>{itemData.name}</h3>
            <p>price: {itemData.price}</p>
            <p>In stock: {itemData.stock}</p>
            <button className="addBtn" onClick={addToCart}>Add to cart</button>
        </div>
    )

}