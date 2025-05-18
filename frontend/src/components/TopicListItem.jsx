import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, onClick } = props;

  return (
    <div className="topic-list__item" onClick={onClick} >
      {topic.title}
    </div>
  );
};

export default TopicListItem;
