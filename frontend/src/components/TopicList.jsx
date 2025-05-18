import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, selectedTopic, toggleSelectedTopic } = props;

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
