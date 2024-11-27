import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../reduxStore/CartSlice'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'

const FoodinoCart = () => {
  let cartItem = useSelector((state)=>state.cart.items)
  let dispatch = useDispatch()
  const navigate = useNavigate()
  function handleClick(){
    dispatch(clearCart())
    }
  return (
    <div className='bg-gray-100 '>
    <div className='  text-2xl text-center font-bold pt-5 md:pt-10 '>Cart</div>

    
    {
        cartItem.length === 0 ?
        <div className='pb-40 md:pb-72 flex flex-col items-center'>
          <h1 className='opacity-60 text-center '> Cart is Empty</h1>
          <button onClick={()=>navigate('/')} className=' bg-gray-400 py-1 px-3 rounded-2xl text-white'>Add item</button>

        </div>
           :
         <div className='w-full  bg-gray-100 mx-auto  p-5 shadow-sm rounded-md  min-w-80 min-h-96' >
           <button className='bg-gray-400 py-1 px-3 rounded-2xl text-white' onClick={handleClick}>Clear cart</button>
           <div className='flex flex-wrap justify-center md:justify-start gap-5 mt-7 '>
           <CartCard data={cartItem}/>

           </div>
         </div>
    }
   
    </div>
  )
}

export default FoodinoCart
