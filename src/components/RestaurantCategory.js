// import { useState } from "react";
// import ItemList from "./itemList";

// const RestaurantCategory = ({data, showItems, setShowIndex})=> {
//     // const [showItems, setShowItems] = useState(false);
//     const handleClick = () =>{
//         setShowIndex();
//     }
//     return <div>
//         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
//             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//             <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
//             <span>🔽</span>
//             </div>

//             {showItems && <ItemList items={data.itemCards}/>}
//         </div>
//     </div>
// }


// export default RestaurantCategory;


// RestaurantCategory.js
// import Shimmer from "./Shimmer";
// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, onClick, Dummy }) => {
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={onClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>{showItems ? "🔼" : "🔽"}</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
