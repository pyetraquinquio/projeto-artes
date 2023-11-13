import { useState } from "react";
import styles from "../app/impressionismo/galeria.module.css"
import Image from "next/image";

const ImageRenas = (props) => {
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
                        <Image src={imageUrl.img} alt={`Image ${index}`} width={1000} height={400}/>

                        
                    </div>

                ))}
            </div>

            {selectedImage && (
                <div className={styles.imageModal}>

                    <span className={styles.closeButton} onClick={closeImage}>
                        &times;
                    </span>

                    <Image src={selectedImage} alt="Selected Image" width={1000} height={700}/>

                    <p className="descricao">{selectedText}</p>

                </div>

            )}


        </>
    )
}

export default ImageRenas