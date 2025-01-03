import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";

import css from "./ImageGallery.module.css";


interface ImageGalleryProps {
    images: Image[];
    onImageClick: (onImageClick:Image)=> void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
    <ul className={css.container}>
        {images.map(image => (
            <li key={image.id} className={css.wrap}>
                <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
        )
        )}
    </ul>
    )
}

export default ImageGallery;
