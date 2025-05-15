import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { topics, photos, favourites, toggleFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} topics={topics} />
    </div>
  );
};

export default HomeRoute;
