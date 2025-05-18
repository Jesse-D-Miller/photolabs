import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos, favourites, toggleFavourite, toggleModal, selectedTopic, toggleSelectedTopic } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
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
