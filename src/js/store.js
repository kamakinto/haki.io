import {createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory } from 'react-router';

//import the root reducer
import rootReducter from './reducers/index';

//create an object for the default data

const defualtState = {


};