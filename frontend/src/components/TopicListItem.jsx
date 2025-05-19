import "../styles/TopicListItem.scss";

//allows for styling of each topic list item in a dynamic way and creates a clickable area for filtering data by topic
const TopicListItem = (props) => {
  const { topic, onClick } = props;

  return (
    <div className="topic-list__item" onClick={onClick} >
      {topic.title}
    </div>
  );
};

export default TopicListItem;
