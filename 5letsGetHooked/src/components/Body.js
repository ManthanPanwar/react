import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// filter function
function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput)
  );
  return filteredData;
}

const Body = () => {
  // const searchTxt = "KFC";

  // searchText is a local state variable
  // const [searchText] = useState("defaultValue");
  const [searchInput, setSearchInput] = useState("");
  // const [searchClicked, setSearchClicked] = useState("false");

  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div id="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value.toLowerCase());
          }} // when you change the value, React re-render this element but the value is always KFC.
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }} // need to filter the data

          // reconciliation in LIVE
          // onClick={() => {
          //   if (searchClicked === "true") setSearchClicked("false");
          //   else setSearchClicked("true");
          // }}
        >
          Search
        </button>
        {/* <h1>{searchClicked}</h1> */}
      </div>
      <div className="restaur">
        {restaurants.map((rest) => {
          return <RestaurantCard {...rest.info} key={rest.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
