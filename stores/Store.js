import {createStore,combineReducers} from 'redux';
import Counter from '../reducers/Counter';
import CountReducer from '../reducers/CountReducer';
import TodoReducer from '../reducers/TodoReducer';
import ProductsReducer from '../reducers/ProductsReducer';
import ForumReducer from  '../reducers/ForumReducer';
import TodoContainerReducer from '../reducers/TodoContainerReducer';
import RegistrationReducer from '../reducers/RegistrationReducer';
import LoginReducer from '../reducers/LoginReducer';
//let rootReducer =combineReducers({count:Counter, products:ProductsReducer});

const store = createStore(LoginReducer);
export default store;