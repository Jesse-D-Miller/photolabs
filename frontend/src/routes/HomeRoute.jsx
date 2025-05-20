import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';


//this route contains all visual information in the app
const HomeRoute = (props) => {
  const { topics, photos, favourites, toggleFavourite, toggleModal, selectedTopic, toggleSelectedTopic, clearSelectedTopic, toggleShowLikedOnly, showLikedOnly } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
        clearSelectedTopic={clearSelectedTopic}
        toggleShowLikedOnly={toggleShowLikedOnly}
        showLikedOnly={showLikedOnly}
      />
      <PhotoList
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
