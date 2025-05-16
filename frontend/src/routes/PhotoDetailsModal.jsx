import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({toggleModal, photo}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className='photo-details-modal__image' src={photo.urls.full} alt='a really cool photo if something really cool' />
    </div>
  )
};

export default PhotoDetailsModal;
