import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {img} from './img/data'
import classes from './Carousel.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import transitions from '@material-ui/core/styles/transitions';
function Carouselfun() {
    const customArrowStyles = {
        position: 'absolute',
        top: '40%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 2,
        width: '80px',
        height: '200px',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        
        
    };
    return (
        <div className={classes.carouselContainer}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                className={classes.carousel}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button onClick={onClickHandler} title={label} style={{ ...customArrowStyles, left: 0 }}>
                            <ArrowBackIosIcon style={{fontSize:"50px"}} />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button onClick={onClickHandler} title={label} style={{ ...customArrowStyles, right: 0 }}>
                            <ArrowForwardIosIcon style={{fontSize:"50px",}}/>
                        </button>
                    )
                }
            >
                {img.map((imageItemLink, index) => (
                    <div key={index} className={classes.slide}>
                        <img src={imageItemLink} alt={`slide-${index}`} className={classes.image} />
                    </div>
                ))}
            </Carousel>
            <div className={classes.hero_img}></div>
        </div>
    )
}

export default Carouselfun;
