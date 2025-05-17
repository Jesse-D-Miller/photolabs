import { useState } from "react";


const useApplicationData = () => {
  const [favourites, setFavourites] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  
  //togles the favourite icon on each photo by photo.id and uses ...prevfavourites to remember an object of the prev values 
  //this is the mutable -> immutable thing we did in lecture
  const toggleFavourite = (photoId) => {
    console.log(favourites)
    setFavourites(prevFavourites => ({
      ...prevFavourites,
      [photoId]: prevFavourites[photoId] === 'favourited' ? 'notfavourited' : 'favourited'
    }));
  };
  
  const toggleModal = (photo) => {
    console.log("photo Id", photo.id);
    setModalOpen((modalOpen) ? false : photo);
  }

  return {
    favourites,
    modalOpen,
    toggleFavourite,
    toggleModal
  }

}


export default useApplicationData;