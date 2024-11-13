import { useEffect, useState } from "react";
import { restaurants } from "../../services/services";

const useBodyFetch = () => {
    let [restaurant, setRestaurant] = useState([]);
    let [filteredRestaurant,setFilteredRestaurant] = useState()
    useEffect(() => {
        let rest = (async function () {
          let data = await restaurants();
          setRestaurant(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
          setFilteredRestaurant( 
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         
        })();
        
      }, []);
}

export default useBodyFetch
