import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


//organises logo, topics, and notifications into the nav bar. each of these items require state information form the props
const TopNavigation = (props) => {
  const { topics, favourites, selectedTopic, toggleSelectedTopic, clearSelectedTopic } = props;


  //checks if any photos have been favourited
  const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

  return (
    <div className="top-nav-bar">
      {/* click logo to clear filters and show all photos */}
      <span className="top-nav-bar__logo" onClick={clearSelectedTopic} >PhotoLabs</span>
      {/* click topics to filter to photos of that topic */}
      <TopicList
        topics={topics}
        selectedTopic={selectedTopic}
        toggleSelectedTopic={toggleSelectedTopic}
      />
      {/* check if any photo has been liked and adds a little green notification icon, notification does not clear, functionality to be added later */}
      <FavBadge
        isFavPhotoExist={!isObjectEmpty(favourites)}
        selected={true}
      />
    </div>
  )
};

export default TopNavigation;
