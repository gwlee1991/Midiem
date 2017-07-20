import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllTopics} from './actions/topic_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser){
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.dispatch = store.dispatch;
    window.fetchAllTopics = fetchAllTopics;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});