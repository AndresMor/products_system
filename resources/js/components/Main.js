import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Product/Nav";
import FormProduct from "./Product/Form_product";
import Edit from "./Product/Edit";
import FormCategory from "./Product/Form_category";
import List from "./Product/List";


import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { min } from 'lodash';

function Main(){
    return(
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route path="/product/index" exact component={List}></Route>
                    <Route path="/product/form" component={FormProduct}></Route>
                    <Route path="/product/edit/:id" component={Edit}></Route>
                    <Route path="/category/form" component={FormCategory}></Route>
                </Switch>
            </main>
        </Router>
     
    );
}

export default Main;
ReactDOM.render(<Main />,document.getElementById('main-product'));