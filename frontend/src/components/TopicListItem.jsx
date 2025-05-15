import "../styles/TopicListItem.scss";


const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {
  // const {label} = sampleDataForTopicList;

  return (
    <div className="topic-list__item">
      <span>{sampleDataForTopicListItem.label}</span>
    </div>
  );
};

export default TopicListItem;
