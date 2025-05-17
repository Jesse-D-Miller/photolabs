import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import photos from "./mocks/photos";
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    favourites,
    modalOpen,
    toggleFavourite,
    toggleModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} toggleFavourite={toggleFavourite} toggleModal={toggleModal} />
      {modalOpen && (
        <PhotoDetailsModal toggleModal={toggleModal} photo={modalOpen} toggleFavourite={toggleFavourite} favourites={favourites} />
      )}
    </div>
  );
};

export default App;
