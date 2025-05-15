import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { toggleFavourite, favouriteStatus } = props

  // const handleClick = () => toggleFavourite();

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={favouriteStatus === "favourited"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
