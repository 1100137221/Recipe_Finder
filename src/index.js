

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log('store',store.getState());
});

ReactDom.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={App} ></Route>
                <Route path="/favorites" component={FavoriteRecipeList}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

