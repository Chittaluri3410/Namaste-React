import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({ resObj }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resObj;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
