
import Product from "../components/Product"
import Search from "../components/search"

export default function ShopPage({shopItems, updateCart, currentCartItems, setItems, orgList}) {


    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <div className="searchBox">
                <Search 
                shopItems={shopItems}
                updateShopItems={setItems}
                orgList={orgList}/>
            </div>
            <div className="products">
                {shopItems.length ?
                 shopItems.map(item => <Product itemData={item}
                    updateCart={updateCart}
                    currentCartItems={currentCartItems}/>)
                 : <p>No items in shop!</p>}
            </div>
        </div>
    )
}