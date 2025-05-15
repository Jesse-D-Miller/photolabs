import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import photos from './mocks/photos';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState({});

  const toggleFavourite = (photoId) => {
    setFavourites(prevFavourites => ({
      ...prevFavourites,
      [photoId]: prevFavourites[photoId] === 'favourited' ? 'notfavourited' : 'favourited'
    }));
  };

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
      {dynamicArrayOfPhotos}
    </div>
  );
};

export default App;
