import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  //information form dataset via useApplicationData
  const {
    favourites,
    modalOpen,
    selectedTopic,
    toggleSelectedTopic,
    toggleFavourite,
    toggleModal,
    photoData,
    topicData,
    topicByPhotoData,
    clearSelectedTopic
  } = useApplicationData();

  //all information passed down through HomeRoute
  //conditional on Modal using short circuit so that it only displays on click event
  return (
    <div className="App">
      <HomeRoute
        clearSelectedTopic={clearSelectedTopic}
        photos={selectedTopic ? topicByPhotoData : photoData}
        topics={topicData}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
      />
      {modalOpen && (
        <PhotoDetailsModal toggleModal={toggleModal} photo={modalOpen} toggleFavourite={toggleFavourite} favourites={favourites} />
      )}
    </div>
  );
};

export default App;
