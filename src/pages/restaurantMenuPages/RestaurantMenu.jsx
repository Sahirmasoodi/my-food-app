import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../components/utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";

const RestaurantMenu = () => {
  let { restId } = useParams();
  let { restInfo, menuCategories ,showIndex,setShowIndex} = useRestaurantMenu(restId);
   
  return (
    <div className="text-center my-6">
      <p className="text-3xl font-bold ">{restInfo?.name}</p>
      <p>{restInfo?.sla?.slaString}</p>
      {menuCategories.map((menu, index) => (
        <MenuCategories key={index + 134e3}
          data={menu?.card?.card}
          showItem={index===showIndex ?true :false}
          setShowIndex = {()=>setShowIndex(index)}
          />
      ))}
    </div>
  );
};

export default RestaurantMenu;
