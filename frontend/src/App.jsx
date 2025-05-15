import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import photos from './mocks/photos';
import { useState } from 'react';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState({});


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
      />
    );
  });

  return (
    <div className="App">
      <PhotoList dynamicArrayOfPhotos={dynamicArrayOfPhotos} />
    </div>
  );
};

export default App;
