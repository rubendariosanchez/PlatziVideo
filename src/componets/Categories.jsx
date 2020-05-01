import React from 'react';
import '../assets/styles/components/Categories.scss';

class Categories extends React.Component{
    
    render(){
        return(
            <div className="categories">
                <h3 className="categories__title">{this.props.title}</h3>
                {this.props.children}
            </div>
            
        );
    }
}

/*const Categories = ({children, title}) =>{
    return(
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
        
    );
}*/

export default Categories;