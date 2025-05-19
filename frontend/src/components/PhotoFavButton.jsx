import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//this component is responsible for favourite button, it handles the click and the actual change in appearance when the botton is clicked
const PhotoFavButton = (props) => {
  const { toggleFavourite, favouriteStatus } = props

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={favouriteStatus === "favourited"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
