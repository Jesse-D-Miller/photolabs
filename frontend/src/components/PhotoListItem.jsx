import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//lots of things get passed in here but essentially this is just organising the data on each image card and applying the styling that gives each image-card its look
const PhotoListItem = (props) => {
  const { photo, toggleFavourite, favouriteStatus, toggleModal } = props;
  const { location, urls, user } = photo;

  return (
    <div className="photo-list__item" >

      <PhotoFavButton toggleFavourite={toggleFavourite} favouriteStatus={favouriteStatus} />

      <div>
        <img
          onClick={() => toggleModal(photo)}
          className="photo-list__image"
          src={urls.regular}
          alt={`photolabs photo by ${user.username}`}
        />
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`${user.username} profile picture`}
        />
        <div className="photo-list__user-info" >
          {user.name}
          <div className="photo-list__user-location ">
            {`${location.city}, ${location.country}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
