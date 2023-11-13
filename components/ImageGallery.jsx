import { useState } from "react";
import styles from "../app/impressionismo/galeria.module.css"

const ImageGallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedText, setSelectedText] = useState(null);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl.img);
        setSelectedText(imageUrl.text)
    };

    const closeImage = () => {
        setSelectedImage(null);
        setSelectedText(null);
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
                        <img src={imageUrl.img} alt={`Image ${index}`} />

                        
                    </div>

                ))}
            </div>

            {selectedImage && (
                <div className={styles.imageModal}>

                    <span className={styles.closeButton} onClick={closeImage}>
                        &times;
                    </span>

                    <img src={selectedImage} alt="Selected Image"/>

                    <p className="descricao">{selectedText}</p>

                </div>

            )}


        </>
    )
}

export default ImageGallery