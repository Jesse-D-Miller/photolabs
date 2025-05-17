import { useReducer } from "react";

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

    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    favourites: {},
    modalOpen: false
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  };

  const toggleModal = (photo) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: photo });
  };

  return {
    favourites: state.favourites,
    modalOpen: state.modalOpen,
    toggleFavourite,
    toggleModal
  }

}

export default useApplicationData;