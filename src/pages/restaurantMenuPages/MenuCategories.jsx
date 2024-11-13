import CategoryItems from "./CategoryItems";

const MenuCategories = ({ data,showItem,setShowIndex }) => {
    
   console.log(showItem);
    

  return (
    <div className="w-1/2  bg-gray-200 mx-auto my-5 p-5 shadow-sm rounded-md  min-w-80">
      <div className="flex justify-between items-center cursor-pointer"
      onClick={()=>setShowIndex()}
      >
        <span className="font-bold">{data?.title } ({data?.itemCards.length})</span>
        <span >↓</span>
      </div>
      {
        showItem && <CategoryItems data={data?.itemCards}/>
      }
     
    </div>
  );
};

export default MenuCategories;
