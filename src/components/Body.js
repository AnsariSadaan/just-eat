import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    console.log(listOfRestaurants)
    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9777315&lng=72.8273249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks like you're offline please check your internet connection</h1>
    }

    return listOfRestaurants?.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="searchBar m-4 p-4">
                    <input type="text" className="border border-solid py-1 border-pink-100 rounded-sm" placeholder="search.." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
                    <button className="px-4 py-1 m-4 bg-pink-100 rounded-lg" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(rest => rest.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="searchBar p-4 flex items-center">
                <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            </div>
            <div className="flex flex-wrap">
                {/* {
                    filteredRestaurant.map((restaurant) => (
                        <Link to={'/restaurants/' + restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} resData={restaurant} /></Link>
                    ))
                } */}
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={'/restaurants/' + restaurant?.info?.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;