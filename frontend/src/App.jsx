import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import photos from './mocks/photos';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState({});

  // const toggleLike = () => setLikeStatus((likeStatus === "liked") ? "notLiked" : "liked");

  const toggleLike = (photoId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [photoId]: prevLikes[photoId] === 'liked' ? 'notLiked' : 'liked'
    }));
  };


  // let dynamicArrayOfPhotos = photos.map((photo, i) => <PhotoListItem key={i} photo={photo} toggleLike={toggleLike} likeStatus={likeStatus} />)

   const dynamicArrayOfPhotos = photos.map((photo) => {
    const photoId = photo.id;
    const likeStatus = likes[photoId] || 'notLiked';

    return (
      <PhotoListItem
        key={photoId}
        photo={photo}
        toggleLike={() => toggleLike(photoId)}
        likeStatus={likeStatus}
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
