import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './pages/Body'
import Contact from './pages/Contact'
import Error from './pages/Error'
import RestaurantMenu from './pages/restaurantMenuPages/RestaurantMenu'
import { Provider } from 'react-redux'
import Store from './reduxStore/store'
import FoodinoCart from './pages/FoodinoCart'
import CartItem from './pages/CartItem'
import Header from "./components/Header";
import Footer from "./components/Footer";
const About = lazy(()=>import('./pages/About'))

const App = () => {
  return (
 
   <BrowserRouter>
    <Provider store={Store}>
   <Header />
    <Routes>
        <Route path='/Foodino' element={<Body/>}/>
        <Route path='/about' element={<Suspense fallback={<h1 className='text-center my-20 text-3xl'>Loading...</h1>}><About/></Suspense>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<FoodinoCart/>}/>
        <Route path='cart-item' element={<CartItem/>}/>
        <Route path='restaurant-menu/:restId' element={<RestaurantMenu/>}/>
        <Route path='*' element={<Error/>}/>
     
    </Routes>
    <Footer />
   </Provider>
   </BrowserRouter>
  )
}

export default App
