import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
const { location, urls, user } = props.sampleDataForPhotoListItem;

  return (
  <div>
    <img src={urls.regular} alt={`photolabs photo by ${user.username}`} />
    <div>
      <img src={user.profile} alt={`${user.username} profile picture`} />
      <div>
        {user.name}
      </div>
      <div>
        {`${location.city}, ${location.country}`}
      </div>
    </div>
  </div> 
  )
}

export default PhotoListItem;
