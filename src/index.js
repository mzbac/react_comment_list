import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

import reducers from './reducers';
import CommentList from './components/commentList';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <CommentList/>
  </Provider>
  , document.querySelector('.container'));
