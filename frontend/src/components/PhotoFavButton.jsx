import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { toggleLike, likeStatus } = props

  const handleClick = () => toggleLike();

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg" >
        <FavIcon selected={likeStatus === "liked"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
