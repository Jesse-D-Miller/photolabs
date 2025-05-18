import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// import topics from './mocks/topics';
// import photos from "./mocks/photos";
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    favourites,
    modalOpen,
    toggleFavourite,
    toggleModal,
    photoData,
    topicData
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favourites={favourites} toggleFavourite={toggleFavourite} toggleModal={toggleModal} />
      {modalOpen && (
        <PhotoDetailsModal toggleModal={toggleModal} photo={modalOpen} toggleFavourite={toggleFavourite} favourites={favourites} />
      )}
    </div>
  );
};

export default App;
