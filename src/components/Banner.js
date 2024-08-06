import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner02 from '../images/image02.jpg';
import Banner01 from '../images/cooking-banner.jpg';

const Banner = () => {
        return (
            <Carousel
            showArrows={false}
            ariaLabel={false}
            labels={false}
            showThumbs={false}
            >
                <div>
                    <img src={Banner01} />
                    <p className="heding">Recipe Book</p>
                </div>
                <div>
                    <img src={Banner02} />
                    <p className="heding">Enjoy Cooking</p>
                </div>
            </Carousel>
        );
};

export default Banner;
