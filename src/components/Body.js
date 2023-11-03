import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e)=>{
        setSearchInput(e.target.value);
    }

    const filteredRestaurants = listOfRestaurants.filter(restaurant =>
        restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    return (
        <div className="body">
            <div className="searchBar">
                <input type="search" name="search" id="search" placeholder="search.." value={searchInput} onChange={handleSearch} />
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                } */}
                {
                    filteredRestaurants.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;