import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../reduxStore/CartSlice'
import CartItem from './CartItem'

const FoodinoCart = () => {
  let cartItem = useSelector((state)=>state.cart.items)
  let dispatch = useDispatch()
  function handleClick(){
    dispatch(clearCart())
    }
  return (
    <>
    <div className='  text-2xl text-center font-bold mt-6'>Cart</div>
    
    {
        cartItem.length === 0 ? <h1 className='opacity-60 text-center mb-72'> Cart is Empty</h1>  :
         <div className='w-1/4  bg-gray-300 mx-auto my-5 p-5 shadow-sm rounded-md  min-w-80'>
           <button className=' bg-gray-500 py-1 px-3 rounded-2xl text-white' onClick={handleClick}>Clear cart</button>
           <CartItem data={cartItem}/>
         </div>
    }
   
    </>
  )
}

export default FoodinoCart
