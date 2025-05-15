import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {

  const dynamicArrayOfTopics = topics.map((topic) => {
    const topicId = topic.id;

    return (
      <TopicListItem
        key={topicId}
        topic={topic}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {dynamicArrayOfTopics}
    </div>
  );
};

export default TopicList;
