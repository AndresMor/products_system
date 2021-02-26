import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CardProdutcs from "./Shop/Card_Products";


import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function User(){
    return(
        <main>
            <CardProdutcs></CardProdutcs>
        </main>
        // <Router>
        //     <main>  
        //         <Switch>
        //             <Route path="/user/index" exact component={CardProdutcs}></Route>
        //         </Switch>
        //     </main>
        // </Router>
     
    );
}

export default User;
ReactDOM.render(<User />,document.getElementById('user-view'));