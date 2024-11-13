import { useEffect, useState } from "react"
import {  MENU_URl } from "../../services/services"

const useRestaurantMenu = (resId) => {
const [restInfo,setRestInfo] = useState([])
let [restMenu, setRestMenu] = useState([]);
let [showIndex,setShowIndex] = useState(0)

 useEffect(()=>{
  let fetchMenu = async function (){
    let response = await fetch(MENU_URl+resId)
    let result = await response.json()
    setRestMenu(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRestInfo(result?.data?.cards[2]?.card?.card?.info);
  }()

 },[])
 let menuCategories = restMenu.filter(menu=>menu?.card?.card?.['@type']  === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' )
  
 return {restInfo,restMenu,menuCategories,showIndex,setShowIndex}
}

export default useRestaurantMenu