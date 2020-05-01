import React from 'react';
import '../assets/styles/components/Carousel.scss';

// SE DEBE AJUSTAR
/*class Carousel extends React.Component{
    render({children}){
        return(
            <section class="carousel">
                <div class="carousel__container">
                    {children}
                </div>
            </section>
            
        );
    }
}*/

const Carousel = ({children}) =>{
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>        
    );
}

export default Carousel;