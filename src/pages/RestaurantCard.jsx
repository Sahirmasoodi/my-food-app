import React from 'react'
import { IMAGE_URL } from '../services/services';

const RestaurantCard = ({restaurant}) => {
  let { name, cloudinaryImageId, avgRatingString, sla, areaName } = restaurant?.info;
  
  return (
    <div>
      <div className="min-w-60 w-60  rounded shadow-xl shadow-gray-400 hover:scale-95">
        <img
          className="h-40 w-60  rounded-lg"
          src={IMAGE_URL+ cloudinaryImageId}/>
        <div className="mt-5 ps-2">
          <h1 className=" font-bold text-wrap">{name.toUpperCase()}</h1>
          <div className="flex items-center">
            <img className="size-5" src="images/star.webp" />
            <span>{avgRatingString}</span>
            <span className="ps-4">{sla?.slaString} </span>
          </div>
        </div>
        <p className="mt-1 ps-2 opacity-50">{areaName}</p>
      </div>
    </div>
  );
}

export default RestaurantCard

