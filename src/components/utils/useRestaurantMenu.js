import { useEffect, useState } from "react"
import result from '../../services/restaurantMenu.json'

const useRestaurantMenu = (resId) => {
const [restInfo,setRestInfo] = useState([])
let [restMenu, setRestMenu] = useState([]);
let [showIndex,setShowIndex] = useState(0)

 useEffect(()=>{
  setRestMenu(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  setRestInfo(result?.data?.cards[2]?.card?.card?.info);

 },[])
 let menuCategories = restMenu.filter(menu=>menu?.card?.card?.['@type']  === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' )
  
 return {restInfo,restMenu,menuCategories,showIndex,setShowIndex}
}

export default useRestaurantMenu