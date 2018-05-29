import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './containers/app.css';
import { Provider } from "react-redux";
import { createStore } from 'redux';

import reducers from './redux/reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("root")
)