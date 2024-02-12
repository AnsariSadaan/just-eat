import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const {loggedInUser} = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        // <div data-testid="resCard" className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-300">
        //     <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
        //     <h3 className="font-bold py-4 text-lg">{name}</h3>
        //     <h4>{cuisines.join(", ")}</h4>
        //     <h4>{avgRating}</h4>
        //     <h4>{costForTwo}</h4>
        //     <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        //     <h4>User : {loggedInUser}</h4>
        // </div>
        <div data-testid="resCard" className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-300">
    <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
    <div className="mt-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <div className="flex items-center mt-2">
            <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                <path d="M12 2C5.383 2 0 7.383 0 14c0 4.402 2.5 8.447 6.457 10.438.19.113.39.167.586.167.586 0 1.13-.387 1.363-1.004.269-.71-.195-1.461-.93-1.461-.477 0-.905.293-1.074.738C4.176 21.477 2 17.684 2 14c0-5.514 4.486-10 10-10s10 4.486 10 10c0 3.684-2.176 7.477-5.502 9.14-.168.445-.597.738-1.074.738-.734 0-1.199-.75-.93-1.461.233-.617.777-1.004 1.363-1.004.195 0 .395.054.586.167C21.5 22.447 24 18.402 24 14c0-6.617-5.383-12-12-12z"/>
            </svg>
            <span className="text-sm text-gray-600">{avgRating}</span>
        </div>
        <div className="flex items-center mt-2">
            <svg className="h-4 w-4 fill-current text-gray-600 mr-1" viewBox="0 0 24 24">
                <path d="M3 4v2h18V4H3zm0 6v2h10v-2H3zm0 6v2h10v-2H3zm14 0h-4v2h4v-2zm-4-4H3v2h10v-2zm4-4h-4v2h4V8zm0-4h-4v2h4V4z"/>
            </svg>
            <span className="text-sm text-gray-600">{costForTwo}</span>
        </div>
        <div className="mt-2">
            <span className="text-sm text-gray-600">Delivery Time: {resData.info.sla.deliveryTime} Minutes</span>
        </div>
        <div className="mt-2">
            <span className="text-sm text-gray-600">User: {loggedInUser}</span>
        </div>
    </div>
</div>

    )
}

export const withBestSellerLabel = (RestaurantCard) => {
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-gray-600 text-white p-1 m-2 rounded-lg">BestSeller</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;