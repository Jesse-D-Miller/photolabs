import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { photos = [], favourites, toggleFavourite, toggleModal } = props;

  //this takes the photos from the database and puts them into an array
  const dynamicArrayOfPhotos = photos.map((photo) => {
    const photoId = photo.id;
    const favouriteStatus = favourites[photoId] || 'notfavourited';
  
    return (
      <PhotoListItem
        key={photoId}
        photo={photo}
        toggleFavourite={() => toggleFavourite(photoId)}
        favouriteStatus={favouriteStatus}
        toggleModal={toggleModal}
      />
    );
  });
  
  return (
    <ul className="photo-list">
      {dynamicArrayOfPhotos}
    </ul>
  );
};

export default PhotoList;
