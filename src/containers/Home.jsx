import React, {useState, useEffect} from 'react';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import useInitialState from '../hooks/useInitialState.js';
import '../assets/styles/App.scss';

const API = "http://localhost:3000/initalState";
const Home = () => {   
    
    const videos = useInitialState(API);

    const renderList = (list = []) => {
        return (
            <>
                {list.map((item) => (
                    <CarouselItem key={item.id} {...item} />
                ))}
            </>
        );
    };
    
    return (
        <>
          <Search />
          {videos.mylist && videos.mylist.length > 0 && (
            <Categories title="Mi Lista">
              <Carousel>{renderList(videos.mylist)}</Carousel>
            </Categories>
          )}
          {videos.trends && videos.trends.length > 0 && (
            <Categories title="Tendencias">
              <Carousel>{renderList(videos.trends)}</Carousel>
            </Categories>
          )}
          {videos.originals && videos.originals.length > 0 && (
            <Categories title="Originales ">
              <Carousel>{renderList(videos.originals)}</Carousel>
            </Categories>
          )}
        </>
      );
}

export default Home;