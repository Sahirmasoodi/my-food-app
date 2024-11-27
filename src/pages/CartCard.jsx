import React from 'react'
import { IMAGE_URL } from '../services/services'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../reduxStore/CartSlice'

const CartItem = ({data}) => {
    let cart = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch()
    function removeItemFromCart(){
     dispatch(removeItem())
    }
  return (
    <>
     {data.map((item) => (
       <div key={item?.card?.info?.id}  className="w-1/5 min-w-80 flex gap-3 bg-gray-300 p-5 rounded-md ">
            <div  className=" text-left">
                <div > {item?.card?.info?.name}</div>
                <div className="mb-2">₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</div>
                <div className="text-sm flex items-center mt-3 text-green-700">
                    <span>★</span>
                    <span>{item?.card?.info?.ratings?.aggregatedRating?.rating || 4.1}</span>
                    <span className="ps-1 text-black">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 19})</span>
                </div>
            </div> 
            <div className="size-20">
                <img className=" w-20  rounded-lg"
                    src={ IMAGE_URL + item?.card?.info?.imageId}/>
             <button onClick={()=>removeItemFromCart(item?.card?.info?.name)} className="relative -top-4 left-5  px-4 bg-white rounded-lg shadow-md border border-gray-100 text-red-500 font-bold">-</button>
                    
            </div>
        </div> 
      ))
     }
    </>
  )
}

export default CartItem
