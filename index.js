import React, {Component, Fragment} from "react";
import { render } from "react-dom";
import {Router} from "@reach/router";
import {MainMoviePage} from "./pages/MainMoviePage";


const App = (props) => {
    return(
        <Router>
            <MainMoviePage path="/"/>
        </Router>
    )
}

render(<App/>, document.querySelector("#root"))