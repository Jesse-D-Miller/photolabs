import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import photos from "./mocks/photos";
import { useState } from 'react';

const App = () => {
  const [favourites, setFavourites] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  //togles the favourite icon on each photo by photo.id and uses ...prevfavourites to remember an object of the prev values 
  //this is the mutable -> immutable thing we did in lecture
  //somthing like this vvv
  //   {
  //   1: 'liked',
  //    we’ll add or overwrite below
  //   }
  const toggleFavourite = (photoId) => {
    setFavourites(prevFavourites => ({
      ...prevFavourites,
      [photoId]: prevFavourites[photoId] === 'favourited' ? 'notfavourited' : 'favourited'
    }));
  };

  const toggleModal = (photo) => {
    console.log("photo Id",photo.id);
    setModalOpen((modalOpen) ? false : photo);
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} toggleFavourite={toggleFavourite} toggleModal={toggleModal} />
      {modalOpen && (
        <PhotoDetailsModal toggleModal={toggleModal} photo={modalOpen} />
      )}
    </div>
  );
};

export default App;
