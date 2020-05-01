import React from 'react';
import {BrowserRouter} from 'react-route-dom';
import Home from '../containers/Home';

const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
    </BrowserRouter>
);

export default App;