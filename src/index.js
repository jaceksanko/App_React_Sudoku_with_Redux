import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './containers/app.css';
import { Provider } from 'react-redux';
import { createStore } from 'react';

import reducer from './redux/reducer';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);