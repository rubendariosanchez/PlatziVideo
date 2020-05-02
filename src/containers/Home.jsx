import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({myList, trends, originals}) => {

    const renderList = (list = [], isList = false) => {
        return (
            <>
                {list.map((item) => (
                    <CarouselItem key={item.id} {...item} isList={isList}/>
                ))}
            </>
        );
    };
    
    return (
        <>
          <Search isHome/>
          {myList.length > 0 && (
            <Categories title="Mi Lista">
              <Carousel>{renderList(myList, true)}</Carousel>
            </Categories>
          )}
          {trends.length > 0 && (
            <Categories title="Tendencias">
              <Carousel>{renderList(trends)}</Carousel>
            </Categories>
          )}
          {originals.length > 0 && (
            <Categories title="Originales ">
              <Carousel>{renderList(originals)}</Carousel>
            </Categories>
          )}
        </>
      );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);