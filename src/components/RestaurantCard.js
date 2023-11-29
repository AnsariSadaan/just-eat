import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
            <h4>User : {loggedInUser}</h4>
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