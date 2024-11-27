import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurants } from "../services/services";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import PromtedRestaurantCard from "./restaurantMenuPages/PromtedRestaurantCard";
import data from "../services/restaurant.json";
import Slider from "../components/Slider";

const Body = () => {
  let [searchValue,setSearchValue] = useState('')
  let [restaurant, setRestaurant] = useState([]);
  // let [testData, setTestData] = useState([]);
  let [filteredRestaurant,setFilteredRestaurant] = useState()
  let PromtedRestaurant = PromtedRestaurantCard(RestaurantCard)

  useEffect(() => {
    // console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    // let rest = (async function () {
      // let data = await restaurants();
      // setRestaurant(
      //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
      // setFilteredRestaurant( 
      //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      setRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
      setFilteredRestaurant( 
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
       
    // })();
    
  }, []);

  
 
  function handleClick(){
  let filteredRestraurat =  restaurant?.filter(rest=>rest?.info?.avgRatingString > 4)
  setFilteredRestaurant(filteredRestraurat)
  }
  function handleSearch(){
    setFilteredRestaurant(restaurant.filter(rest=>rest?.info?.name.toLowerCase().includes(searchValue.toLowerCase())))
  }

  if ( restaurant?.length === 0){
     return  <Shimmer/> 
  }
   return (
     <div className="  bg-gray-100">
     <div className="flex flex-col md:flex-row justify-between md:px-5 items-center shadow-inner shadow-gray-400 bg-gray-300 ">

         <div className="flex items-center flex-nowrap">
         <input className="h-8 rounded-lg bg-gray-200 border-2 border-gray-300" type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
         <button
         className="bg-gray-400 rounded-lg px-5 py-0.5 mx-3 my-2 text-center shadow-sm shadow-gray-700"
         onClick={handleSearch}> 🔎 </button>
         </div>
       <button
         className="bg-gray-400 rounded-lg px-2 py-0.5 m-2 text-center  shadow-sm shadow-gray-700"
         onClick={handleClick}> Top Rated </button>

         </div>
         <div>
          <Slider/>
         </div>

       <div className="flex flex-wrap justify-evenly bg-gray-100 " id="card">
         {filteredRestaurant && filteredRestaurant.map((rest) => (
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
