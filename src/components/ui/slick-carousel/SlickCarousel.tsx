import React from "react";
import Slider, { Settings as SlickProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCarousel.scss"

interface ISetting extends SlickProps {
    className?: string;
    children: React.ReactNode;
}

const SlickCarousel: React.FC<ISetting> = ({ className, children, ...props }) => {
    return (
        <Slider className={`slick-carousel ${className}`} {...props}>
            {children}
        </Slider>
    );
};

export default SlickCarousel;
