import { useState } from "react";
import { galleryImages } from "./imgData";
import styles from "./Carousel.module.css"; 

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [more, setMore] = useState(false); 

    function handleNext() {
        setMore(false); 
        if (index === galleryImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handlePrevious() {
        setMore(false); 
        if (index === 0) {
            setIndex(galleryImages.length - 1); 
        } else {
            setIndex(index - 1);
        }
    }

    function handleMoreClick() {
        setMore(!more);
    }

    let slide = galleryImages[index];
    
    return (
        <div className={styles.carouselContainer}> 
            <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={handlePrevious}>Previous</button>
                <button className={styles.button} onClick={handleNext}>Next</button>
            </div>
        
            <h2 className={styles.title}>
                <i>{slide.name}</i> by {slide.artist}
            </h2>

            <h3 className={styles.counter}>
                ({index + 1} of {galleryImages.length})
            </h3>

            <img className={styles.image} src={slide.url} alt={slide.alt} />

            <div className={styles.detailsArea}>
                <button className={styles.button} onClick={handleMoreClick}>
                    {more ? "Hide description" : "Show description"}
                </button>

            {more && <p className={styles.description}>{slide.description}</p>}
            </div>
        </div>
    );
}