import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { location, urls, user } = props.sampleDataForPhotoListItem;

  return (
    <div className="PhotoListItem">
      <div className="photo-list__item">
        <img className="photo-list__image" src={urls.regular} alt={`photolabs photo by ${user.username}`} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`${user.username} profile picture`} />
        <div className="photo-list__user-info" >
          {user.name}
        </div>
        <div className="photo-list__user-location ">
          {`${location.city}, ${location.country}`}
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem;
