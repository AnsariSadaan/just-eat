// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";

// const RestaurantMenu = () => {
//     const {resId} = useParams();
//     const resInfo = useRestaurantMenu(resId);
//     const [showIndex, setShowIndex] = useState(0);
//     if (resInfo === null) return <Shimmer />

//     const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
//     const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//     const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//     return (
//         <div className="text-center">
//             <h1 className="font-bold my-5 text-2xl">{name}</h1>
//             <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
//             {/* categories */}
//             {categories.map((category, index)=>(
//                 <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)}/>
//             ))}
//         </div>
//     )
// }

// export default RestaurantMenu;


// RestaurantMenu.js
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [openIndex, setOpenIndex] = useState(0); // Track the index of the currently open accordion
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleCategoryClick = (index) => {
        // If the clicked index is already open, close it; otherwise, open it.
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === openIndex}
                    onClick={() => handleCategoryClick(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
