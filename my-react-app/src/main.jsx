import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.css';
import store from './store/store';
import { getTache } from './action/tache.action';
import AfficherTache from './components/tasks';

store.dispatch(getTache())
createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Provider store={store}>
      <AfficherTache/>  
    </Provider>
  </React.StrictMode>,
);
