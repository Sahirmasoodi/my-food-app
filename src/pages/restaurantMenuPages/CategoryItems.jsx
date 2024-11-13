import React from "react";
import { IMAGE_URL } from "../../services/services";
import { useDispatch } from "react-redux";
import { addItem } from "../../reduxStore/CartSlice";

const CategoryItems = ({ data }) => {
  let dispatch = useDispatch()
  function addItemToCart(item){
    dispatch(addItem(item))
    alert('ITEM ADDED SUCCESSFULLY')
    
  }
  
  
  return (
    <>
      {data.map((item) => (
       <div key={item?.card?.info?.id}  className="py-2 my-2 border-b-2 border-gray-100 flex justify-between">
            <div  className=" text-left">
                <div > {item?.card?.info?.name}</div>
                <div className="mb-2">₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</div>
                <div className="opacity-65 text-xs">{item?.card?.info?.description}</div>
                <div className="text-sm flex items-center mt-3 text-green-700">
                    <span>★</span>
                    <span>{item?.card?.info?.ratings?.aggregatedRating?.rating || 4.1}</span>
                    <span className="ps-1 text-black">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 19})</span>
                </div>
            </div> 
            <div className="size-16">
                <img className=" w-16 h-full rounded-lg"
                    src={ IMAGE_URL + item?.card?.info?.imageId}/>
                    <button onClick={()=>addItemToCart(item)} className="relative -top-4 px-2 bg-white rounded-lg shadow-md border border-gray-100 text-green-500 font-bold">Add</button>
            </div>
        </div> 
      ))
      }
    </>
  );
};

export default CategoryItems;
