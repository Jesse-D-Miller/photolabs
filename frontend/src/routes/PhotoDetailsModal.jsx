import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

//takes in information from app.jsx and photolist and favbutton in order to generate modal and give it state consistency with the rest of the app
const PhotoDetailsModal = (props) => {
  const { toggleModal, photo, toggleFavourite, favourites } = props;

  return (
    // ----------------------------------->
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/*-----------------------------------> matches structure for PhotoListItem */}
      <div className="photo-details-modal__images">

        <div className="photo-details-modal__image-wrapper">
          <PhotoFavButton toggleFavourite={() => toggleFavourite(photo.id)} favouriteStatus={favourites[photo.id] || 'notfavourited'} />

          <img
            className="photo-details-modal__image"
            src={photo.urls.regular}
            alt={'a really cool photo of something really cool'}
          />
        </div>

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`${photo.user.username} profile picture`}
          />
          <div className="photo-details-modal__photographer-info">
            {photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {`${photo.location.city}, ${photo.location.country}`}
            </div>
          </div>
        </div>

        {/* -----------------------------------> matches structure for PhotoList */}
        <div className='photo-details-modal__header' >
          Related Photos
        </div>

        <div className="photo-details-modal__images">
          <PhotoList photos={Object.values(props.photo.similar_photos)} favourites={props.favourites} toggleFavourite={props.toggleFavourite} />
        </div>

      </div>
    </div>


  )
};

export default PhotoDetailsModal;
