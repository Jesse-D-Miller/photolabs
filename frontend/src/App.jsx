import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// sample data
const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem key={sampleDataForPhotoListItem.id} sampleDataForPhotoListItem={sampleDataForPhotoListItem} />
    </div>
  );
};

export default App;
