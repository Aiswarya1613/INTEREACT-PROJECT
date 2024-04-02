import React,{useState} from "react"
import Navbar from "./componets/Navbar"
import Product from "./componets/Product"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom" 
import ProductDetail from "./componets/ProductDetail"
import SearchItem from "./componets/SearchItem"
import Cart from "./componets/Cart"
import { items } from "./componets/Data" 


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  
    </Router>
    </>
  )
}

export default App
