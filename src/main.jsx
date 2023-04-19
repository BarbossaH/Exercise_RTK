import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/userSlice';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchPosts } from './features/post/postSlice';
// before app created, prepare the users data first
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode></React.StrictMode>,
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
