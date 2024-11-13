const PromtedRestaurantCard = (RestaurantCard) => {
  return ({restaurant}) => {
    return (
      <div className="m-9  hover:scale-95">
        {/* <h1 className="relative top-8 w-12 px-1 bg-black text-white rounded-md ">Open</h1> */}
        <RestaurantCard restaurant={restaurant}/>
      </div>
    );
  };
};

export default PromtedRestaurantCard;
