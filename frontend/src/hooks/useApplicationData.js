import { useReducer, useEffect } from "react";

//action definitions for readability
const ACTIONS = {
  TOGGLE_SELECTED_TOPIC: 'TOGGLE_SELECTED_TOPIC',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  CLEAR_SELECTED_TOPIC: 'CLEAR_SELECTED_TOPIC'
};


// reducer switch cases for each action, they all return previous states using spread operator applied to objects. the second property of each is the most current value of the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      const photoId = action.payload;
      const currentStatus = state.favourites[photoId] || 'notfavourited';
      const updatedStatus = currentStatus === 'favourited' ? 'notfavourited' : 'favourited';

      return {
        ...state,
        favourites: {
          ...state.favourites,
          [photoId]: updatedStatus
        }
      };

    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: state.modalOpen ? false : action.payload
      };

    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload
      };

    case 'SET_TOPIC_DATA':
      return {
        ...state,
        topicData: action.payload
      };

    case 'GET_PHOTOS_BY_TOPICS':
      return {
        ...state,
        topicByPhotoData: action.payload
      };

    case 'TOGGLE_SELECTED_TOPIC':
      const topicId = action.payload;

      return {
        ...state,
        selectedTopic: topicId
      };

    case 'CLEAR_SELECTED_TOPIC':
      return {
        ...state,
        selectedTopic: null,
        topicByPhotoData: []
      };

    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    favourites: {},
    modalOpen: false,
    photoData: [],
    topicData: [],
    selectedTopic: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //async datafetching using useEffect hook and useRuducer via dispatch
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error("Failed to fetch photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.error("Failed to fetch photos:", error);
      });
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/${state.selectedTopic}/photos`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
        })
        .catch((error) => {
          console.error("Failed to fetch photos:", error);
        });
    }
  }, [state.selectedTopic]);

  const toggleFavourite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: photoId });
  };

  const toggleModal = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  };

  const toggleSelectedTopic = (topicId) => {
    dispatch({ type: ACTIONS.TOGGLE_SELECTED_TOPIC, payload: topicId })
  };

  const clearSelectedTopic = () => {
    dispatch({ type: ACTIONS.CLEAR_SELECTED_TOPIC });
  };

  //this information is all passed to the App.jsx file so that the data from the API fetches can be disseminated throuhgout the components
  return {
    clearSelectedTopic,
    selectedTopic: state.selectedTopic,
    favourites: state.favourites,
    modalOpen: state.modalOpen,
    photoData: state.photoData,
    topicData: state.topicData,
    topicByPhotoData: state.topicByPhotoData,
    toggleSelectedTopic,
    toggleFavourite,
    toggleModal
  }

}

export default useApplicationData;