import React, {Component, Fragment} from "react";
import { render } from "react-dom";
import {Router} from "@reach/router";
import {MainMoviePage} from "./pages/MainMoviePage";
import {ItemDataPage} from "./pages/ItemDataPage";


const App = () => {
    return(
        <Router>
            <MainMoviePage path="/"/>
            <MainMoviePage path="/user"/>
            <ItemDataPage path = "/movie/:id"/>
        </Router>
    )
}

render(<App/>, document.querySelector("#root"))