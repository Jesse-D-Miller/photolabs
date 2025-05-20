import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist, selected, onClick } = props;

  return (
    <div className='fav-badge' onClick={onClick} >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  )
};

export default FavBadge;
