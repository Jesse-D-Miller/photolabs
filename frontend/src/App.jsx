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
    clearSelectedTopic,
    toggleShowLikedOnly,
    showLikedOnly,
  } = useApplicationData();

  const visiblePhotos = showLikedOnly
    ? photoData.filter(photo => favourites[photo.id] === 'favourited') //filters photodate by if it has or has not been favourited
    : selectedTopic
      ? topicByPhotoData
      : photoData;

  //all information passed down through HomeRoute
  //conditional on Modal using short circuit so that it only displays on click event
  return (

    <div className="App">
      <HomeRoute
        clearSelectedTopic={clearSelectedTopic}
        photos={visiblePhotos}
        topics={topicData}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
        toggleShowLikedOnly={toggleShowLikedOnly}
        showLikedOnly={showLikedOnly}
      />
      {modalOpen && (
        <PhotoDetailsModal toggleModal={toggleModal} photo={modalOpen} toggleFavourite={toggleFavourite} favourites={favourites} />
      )}
    </div>
  );
};

export default App;
