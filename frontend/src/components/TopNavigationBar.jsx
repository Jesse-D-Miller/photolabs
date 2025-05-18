import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favourites, selectedTopic, toggleSelectedTopic, clearSelectedTopic } = props;


  //checks if any photos have been favourited
  const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={clearSelectedTopic} >PhotoLabs</span>
      <TopicList
        topics={topics}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
      />
      <FavBadge
        isFavPhotoExist={!isObjectEmpty(favourites)}
        selected={true}
      />
    </div>
  )
};

export default TopNavigation;
