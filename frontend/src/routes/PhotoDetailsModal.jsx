import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ toggleModal, photo, toggleFavourite, favourites }) => {
  const { similar_photos } = photo;

  const dynamicArrayOfSimilarPhotos = Object.values(similar_photos).map((similar_photo) => {
    const similar_photoId = similar_photo.id;
    const favouriteStatus = favourites[similar_photoId] || 'notfavourited';

    return (
      <>
        <div>
          <PhotoFavButton toggleFavourite={() => toggleFavourite(similar_photo.id)} favouriteStatus={favouriteStatus || 'notfavourited'} />
          <img
            key={photo.id}
            className='photo-details-modal__image'
            photo={photo}
            src={similar_photo.urls.regular}
            alt={`similar photo ${photo.id}`}
          />
        </div>
     <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={similar_photo.user.profile}
            alt={`${similar_photo.user.username} profile picture`}
          />
          <div className="photo-details-modal__photographer-info">
            {similar_photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {`${similar_photo.location.city}, ${similar_photo.location.country}`}
            </div>
          </div>
        </div>
      </>
    );
  });


  return (
    <div className="photo-details-modal">
      <div>
        <div className="photo-details-modal__top-bar">
          <button className="photo-details-modal__close-button" onClick={toggleModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
        </div>
        <div >
          <PhotoFavButton toggleFavourite={() => toggleFavourite(photo.id)} favouriteStatus={favourites[photo.id] || 'notfavourited'} />
          <img
            className="photo-details-modal__image"
            src={photo.urls.regular} //ai says to make this photo.urls.full but its too large
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
      </div>
      <div className="photo-details-modal__images">
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <div className="similar-photos">
          {dynamicArrayOfSimilarPhotos}
        </div>
      </div>
    </div>


  )
};

export default PhotoDetailsModal;
