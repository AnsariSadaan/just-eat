import RestaurantCard, { withBestSellerLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import Dishes from "./Dishes";
import Footer from "./Footer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [title, setTitle] = useState('');
    const RestaurantCardBestSeller = withBestSellerLabel(RestaurantCard);
    // const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9777315&lng=72.8273249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setTitle(json?.data?.cards[1]?.card?.card?.header?.title);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you're offline please check your internet connection</h1>
    }


    return listOfRestaurants?.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="searchBar m-4 p-4">
                    <input data-testid="searchInput" type="text" className="border border-solid py-1 pl-1 border-pink-100 rounded-sm" placeholder="Search.." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
                    <button name="Search" className="px-4 py-1 m-4 bg-pink-100 rounded-lg" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(rest => rest.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="searchBar p-4 flex items-center">
                    <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setFilteredRestaurant(filteredList)
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div>
                <Dishes />
            </div>
            <div className="w-full flex justify-between mt-5 font-bold text-2xl">
                <h1 className="ml-11">{title}</h1>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant ? (
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
                            {restaurant.info.avgRating > 4.5 ? (
                                <RestaurantCardBestSeller resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    ))
                ) : null}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Body;

