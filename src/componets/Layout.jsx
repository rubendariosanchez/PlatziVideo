import React, { Children } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Layout = ({children}) =>(
    <div className="App">
        <Header/>
            {children}
        <Footer/>
    </div>
);

export default Layout;