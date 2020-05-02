import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import {connect} from 'react-redux';
import {getVideos, isSearching} from '../actions';

const Search = (props) => {
    const {isHome} = props;

    const handlerInput = event => {
        /*if (event.target.value === "") {
            props.isSearching(false);
        } else {*/
            //props.isSearching(true);
            //props.getVideos(event.target.value);
       // }
    }
    const inputStyle = classNames('input-search', {
        isHome
    });

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={inputStyle} placeholder="Buscar..."/>
        </section>
    );
};

/*class Search extends React.Component{
    render(){
        return(
            <section className="main">
                <h2 className="main__title">¿Qué quieres ver hoy?</h2>
                <input type="text" className="input-search" placeholder="Buscar..."/>
            </section>
        );
    }
}*/

const mapDispatchToProps = {
    getVideos,
    isSearching,
};

//export default Search;
export default connect(null, mapDispatchToProps)(Search);