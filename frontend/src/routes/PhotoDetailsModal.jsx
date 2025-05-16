import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ toggleModal, photo }) => {
  const { similar_photos } = photo;


  return (
    <div className="photo-details-modal">
      <div>
        <div className="photo-details-modal__top-bar">
          <button className="photo-details-modal__close-button" onClick={toggleModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
        </div>
        <div >
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
      </div>
      <div className="photo-details-modal__images">
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <div className="similar-photos">
          {Object.values(similar_photos).map((similar_photo) => (
            <img
              key={similar_photo.id}
              src={similar_photo.urls.regular}
              alt={`similar photo ${similar_photo.id}`}
              className="photo-details-modal__image"
            />
          ))}
        </div>
      </div>
    </div>











    //       <div className='photo-details-modal__header' >
    //         <div>
    //           {/* <PhotoFavButton toggleFavourite={toggleFavourite} favouriteStatus={favouriteStatus} /> */}
    //           <img className='photo-details-modal__image' src={photo.urls.full} alt='a really cool photo of something really cool' />
    //         </div>
    //         <div className="photo-details-modal__top-bar" >
    //           <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt={`${photo.user.username} profile picture`} />
    //           <div className="photo-details-modal__photographer-info" >
    //             {photo.user.name}
    //             <div className="photo-details-modal__photographer-location">
    //               {`${photo.location.city}, ${photo.location.country}`}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='photo-details-modal__images'>
    //         {Object.values(similar_photos).map((similar_photo) => {
    //           console.log(similar_photo)
    //           return (
    //             < img
    //               key={similar_photo.id}
    //               src={similar_photo.urls.regular}
    //               alt={`similar photo ${similar_photo.id}`}
    //             />
    //           )
    //         })}
    //       </div>
    //     </div>
  )
};

export default PhotoDetailsModal;
