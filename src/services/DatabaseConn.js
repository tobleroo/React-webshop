

// recieves the current balance of the database and the cart items, then updates the database with the new balance
function updateDatabase(currentBalance, cartItems){

    // loops through the current balance and the cart items and updates the stock of the current balance
    currentBalance.map((item) => {
        cartItems.map((cartItem) => {
            if(item.name === cartItem.name){
                item.stock = item.stock - 1;
            }
        })
    })

    // updates the database with the new balance
    fetch("https://webbshop-39560-default-rtdb.europe-west1.firebasedatabase.app/products.json", {
        method: "PUT",
        body: JSON.stringify(currentBalance),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// fetches the data from the database
async function getItems() {
    const response = await fetch("https://webbshop-39560-default-rtdb.europe-west1.firebasedatabase.app/products.json");
    const data = await response.json();
    return data;
}

export {updateDatabase, getItems};