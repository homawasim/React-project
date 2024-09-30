import React from "react"
import './App.css'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Footer from "./components/Footer/Footer"
import men_banner from "./Assets/banner_mens.png"
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'
function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} Category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} Category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} Category="kid" />} />
          <Route path="product" element={<>
            <Outlet />
          </>}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/casrt' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App




