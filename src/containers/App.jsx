import React, {useState, useEffect} from 'react';
import Header from '../componets/Header';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import Footer from '../componets/Footer';
import useInitialState from '../hooks/useInitialState.js';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';
//const allVideos = useInitialState(API, {mylist: [], trends: [], originals: []});
const API = "http://localhost:3000/initalState";
const App = () => {   
    
    //const initialState = useInitialState(API, {mylist: [], trends: [], originals: []});
    /*const [allVideos, setVideos] = useState({mylist: [], trends: [], originals: []});
            
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);*/
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

    /*return (
        <div className="App">
            <Header />
            <Search />
            {allVideos.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {allVideos.mylist.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            }
            
            {allVideos.trends.length > 0 &&
                <Categories title="Tendencias">
                    <Carousel>
                    {allVideos.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            }
            
            {allVideos.originals.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                    {allVideos.originals.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            }

            <Footer/>
        </div>
    );*/
    return (
        <div>
          <Header />
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
          <Footer />
        </div>
      );
}

export default App;