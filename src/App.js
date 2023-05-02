import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import ShopPage from './pages/ShopPage.jsx';
import Cart from './pages/CartPage';
import { getItems } from './services/DatabaseConn';

import { useState, useEffect } from 'react';

function App() {

  const [page, setPage] = useState("shop");
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [originalList, setOriginalList] = useState([]); // used to reset items state to original state when user clicks on "reset" button in CartPage

  // fetches data from DB and sets it to items state
  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
      setOriginalList(data);
    });
  }, []);

  return (
    <div className="App">

      <Navbar
        changePage={setPage}
        currentPage={page}
        cartSize={cart.length}
      />

      {/* shows shopPage by default. Loading data message while fetching from DB */}
      {/* if user has selected CartPage , it will show instead of shopPage */}
      {page === 'shop' ? (
        items ? (
          <ShopPage shopItems={items}
            updateCart={setCart}
            currentCartItems={cart}
            setItems={setItems}
            orgList={originalList} />
        ) : (<p>Loading data</p>)
      ) : (<Cart cartItems={cart}
        updateCart={setCart}
        dbItems={items}
        changePage={setPage} />)
      };
    </div>

  );
}

export default App;
