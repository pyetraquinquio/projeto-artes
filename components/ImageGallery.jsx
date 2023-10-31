import { useState } from "react";
import styles from "../app/impressionismo/galeria.module.css"

const ImageGallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <>

            <div className={styles.imageGallery}>
                {props.fotos.map((imageUrl, index) => (

                    <div
                        key={index}
                        className={styles.imageThumbnail}
                        onClick={() => openImage(imageUrl)}
                    >
                        <img src={imageUrl} alt={'Image ${index}'} />
                    </div>

                ))}
            </div>

            {selectedImage && (
                <div className={styles.imageModal}>
                    <span className={styles.closeButton} onClick={closeImage}>
                        &times;
                    </span>
                    <img src={selectedImage} alt="Selected Image" className={styles.fotinhas} />
                </div>

            )}

            <div className={styles.imageGallery}>
                {props.fotos.map((imageUrl, index) => (

                    <div
                        key={index}
                        className={styles.imageThumbnail}
                        onClick={() => openImage(imageUrl)}
                    >
                        <img src={imageUrl} alt={'Image ${index}'} />
                    </div>

                ))}
            </div>

            {selectedImage && (
                <div className={styles.imageModal}>
                    <span className={styles.closeButton} onClick={closeImage}>
                        &times;
                    </span>
                    <img src={selectedImage} alt="Selected Image" className={styles.fotinhas} />
                </div>

            )}

        </>
    )
}

export default ImageGallery