import { useReducer, useEffect } from "react";

const ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

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

    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    favourites: {},
    modalOpen: false,
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  };

  const toggleModal = (photo) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: photo });
  };

  return {
    favourites: state.favourites,
    modalOpen: state.modalOpen,
    photoData: state.photoData,
    topicData: state.topicData,
    toggleFavourite,
    toggleModal
  }

}

export default useApplicationData;

// "GET_PHOTOS": "http://localhost:8001/api/photos",
// "GET_TOPICS": "http://localhost:8001/api/topics",
// "GET_PHOTOS_BY_TOPICS": "http://localhost:8001/api/topics/:topic_id/photos",