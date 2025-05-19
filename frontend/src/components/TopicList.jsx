import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


// notice that the mapping is done inline here, I found this to be more readable
//this creates an onClick enent handler and passes it down to TopicListItem 
//gathers topics from dataset and displays them in the navbar
const TopicList = (props) => {
  const { topics, toggleSelectedTopic } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          onClick={() => toggleSelectedTopic(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
