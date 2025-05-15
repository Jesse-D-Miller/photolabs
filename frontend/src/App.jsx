import PhotoList from './components/PhotoList';
import './App.scss';
import photos from "./mocks/photos";
import { useState } from 'react';

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


//this used to be where map was now its in photo list

  return (
    <div className="App">
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default App;
