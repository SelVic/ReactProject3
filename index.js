import React, {Component, Fragment} from "react";
import { render } from "react-dom";
import {Router} from "@reach/router";
import {MainMoviePage} from "./pages/MainMoviePage";


const App = () => {
    return(
        <Router>
            <MainMoviePage path="/"/>
            <MainMoviePage path="/user"/>
        </Router>
    )
}

render(<App/>, document.querySelector("#root"))