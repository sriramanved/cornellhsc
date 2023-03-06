import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface EventCarouselProps {
  title: string;
  date: string;
  description: string;
  images: string[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ title, date, description, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`${title} Event`} />
          <div className="carousel-caption">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventCarousel;
