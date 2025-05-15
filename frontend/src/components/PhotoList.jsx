import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { dynamicArrayOfPhotos } = props;

  return (
    <ul className="photo-list">
      {dynamicArrayOfPhotos}
    </ul>
  );
};

export default PhotoList;
