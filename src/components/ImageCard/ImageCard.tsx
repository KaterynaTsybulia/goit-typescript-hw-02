import { Image } from '../../types';

import css from './ImageCard.module.css';


interface ImageCardProps {
    image: Image;
    onClick: (image: Image) => void;
}

const ImageCard:React.FC<ImageCardProps> = ({ image, onClick }) => {
    return (
    <div className={css.thumb}>
        <img className={css.img} src={image.urls.small} alt={image.alt_description} onClick={()=> onClick(image)}/>
    </div>
    );
}

export default ImageCard;