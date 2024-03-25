import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;


    const truncateCuisines = (cuisines) => {
        const truncatedCuisines = cuisines.slice(0, 2).join(",");
        if(cuisines.length > 2){
            return truncatedCuisines + "...";
        }
        return truncatedCuisines;
    }

    return (
//     
        <div data-testid="resCard" className="m-4 mt-6 p-4 w-[230px] h-[350px] rounded-lg shadow-lg bg-white hover:bg-gray-100 flex flex-col justify-between">
            <img className="res-logo rounded-lg h-[170px]" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <div>
                <h3 className="font-bold text-sm">{name}</h3>
                <h4 className="text-sm text-gray-600">{truncateCuisines(cuisines)}</h4>
                <div className="flex items-center mt-2">
                    <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                            <path d="M12 2C5.383 2 0 7.383 0 14c0 4.402 2.5 8.447 6.457 10.438.19.113.39.167.586.167.586 0 1.13-.387 1.363-1.004.269-.71-.195-1.461-.93-1.461-.477 0-.905.293-1.074.738C4.176 21.477 2 17.684 2 14c0-5.514 4.486-10 10-10s10 4.486 10 10c0 3.684-2.176 7.477-5.502 9.14-.168.445-.597.738-1.074.738-.734 0-1.199-.75-.93-1.461.233-.617.777-1.004 1.363-1.004.195 0 .395.054.586.167C21.5 22.447 24 18.402 24 14c0-6.617-5.383-12-12-12z" />
                    </svg>
                    <span className="text-sm text-gray-600">{avgRating}</span>
                </div>
                <div className="flex items-center mt-2">
                    <svg className="h-4 w-4 fill-current text-gray-600 mr-1" viewBox="0 0 24 24">
                        <path d="M3 4v2h18V4H3zm0 6v2h10v-2H3zm0 6v2h10v-2H3zm14 0h-4v2h4v-2zm-4-4H3v2h10v-2zm4-4h-4v2h4V8zm0-4h-4v2h4V4z" />
                    </svg>
                    <span className="text-sm text-gray-600">{costForTwo}</span>
                </div>
                <div className="mt-2">
                    <span className="text-sm text-gray-600">Delivery Time: {resData.info.sla.deliveryTime} Minutes</span>
                </div>
            </div>
        </div>


    )
}

export const withBestSellerLabel = (RestaurantCard) => {
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-gray-600 text-white p-1 m-2 rounded-lg flex justify-between overflow-x-auto gap-10 ml-8 mr-32 mt-3 hide-scrollbar">BestSeller</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;