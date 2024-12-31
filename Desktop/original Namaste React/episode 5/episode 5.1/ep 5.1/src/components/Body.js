import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";



const Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {alert("you clicked")}}>
            Top Rated Restaurant</button>  
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resObj={restaurant.info} />
          ))}
        </div>
      </div>
    );
  };
  
export default Body;