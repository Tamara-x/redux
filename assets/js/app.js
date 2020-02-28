import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { createStore } from 'redux';

import Home from './components/home';

const store = createStore(allReducers);

const App = () => {
    return (
        <Home />
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));