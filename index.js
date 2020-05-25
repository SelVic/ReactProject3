import React from "react";
import TestPage from "./test.js";
import { render } from "react-dom";

//dependencies devDependencies
//babel
//build
//html script


const App = () => (
    <TestPage/>
)

render(<App/>, document.querySelector("#root"))