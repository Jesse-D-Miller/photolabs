import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import photos from './mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  let dynamicArrayOfPhotos = photos.map((photo, i) => <PhotoListItem key={i} photo={photo} />)

  return (
    <div className="App">
      {/* <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem} /> */}
      {dynamicArrayOfPhotos}
    </div>
  );
};

export default App;
