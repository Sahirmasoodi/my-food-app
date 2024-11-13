import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../services/services";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import PromtedRestaurantCard from "./restaurantMenuPages/PromtedRestaurantCard";

const Body = () => {
  let [searchValue,setSearchValue] = useState('')
  let [restaurant, setRestaurant] = useState([]);
  let [testData, setTestData] = useState([]);
  let [filteredRestaurant,setFilteredRestaurant] = useState()
  let PromtedRestaurant = PromtedRestaurantCard(RestaurantCard)

  useEffect(() => {
    let rest = (async function () {
      let data = await restaurants();
      setRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
      setFilteredRestaurant( 
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setTestData( 
          data?.data)
       
    })();
    
  }, []);

  
 
  function handleClick(){
  let filteredRestraurat =  restaurant?.filter(rest=>rest?.info?.avgRatingString > 4)
  setFilteredRestaurant(filteredRestraurat)
  }
  function handleSearch(){
    setFilteredRestaurant(restaurant.filter(rest=>rest?.info?.name.toLowerCase().includes(searchValue.toLowerCase())))
  }

  if ( restaurant.length === 0){
     return  <Shimmer/> 
  }
   return (
     <div className=" bg-gray-100">
     <div className="flex flex-wrap justify-between ">
       <button
         className="bg-gray-300 rounded-lg px-5 py-1 m-5 text-center shadow-sm shadow-gray-700"
         onClick={handleClick}> Top Rated </button>

         <div className="flex items-center flex-nowrap">
         <input className="h-8 rounded-lg bg-gray-200 border-2 border-gray-300" type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
         <button
         className="bg-gray-300 rounded-lg px-5 py-1 m-5 text-center shadow-sm shadow-gray-700"
         onClick={handleSearch}> Search </button>
         </div>
         </div>

       <div className="flex flex-wrap justify-evenly bg-gray-100 " id="card">
         {filteredRestaurant.map((rest) => (
          <Link key={rest?.info?.id} to={`/restaurant-menu/${rest?.info?.id}`}>
          {
            rest?.info?.isOpen ? <PromtedRestaurant restaurant={rest}/> 
            :  
            <RestaurantCard  restaurant={rest} />
          }
          </Link>
         ))}
       </div>
     </div>
   )
};

export default Body;
