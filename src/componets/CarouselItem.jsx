import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

// Se debe Ajustar
/*class CarouselItem extends React.Component{
    render({children}){
        return(
            <div className="carousel-item">
                <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
                <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src="../assets/icons/play-icon.png" alt="Play Icon"/> 
                    <img className="carousel-item__details--img" src="../assets/icons/plus-icon.png" alt="Plus Icon"/> 
                </div>
                <p className="carousel-item__details--title">Título descriptivo</p>
                <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
                </div>
            </div>
            
        );
    }
}*/

const CarouselItem = ({cover, title, year, contentRating, duration}) => {
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}  />
            <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
            </div>
        </div>    
    );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
};

export default CarouselItem;