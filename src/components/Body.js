import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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

    return listOfRestaurants?.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="searchBar">
                    <input type="text" placeholder="search.." value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(rest => rest.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link to={'/restaurants/' + restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;