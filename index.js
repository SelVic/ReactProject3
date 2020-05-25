import React from "react";
import TestPage from "./test.js";
import { render } from "react-dom";

//сервак из доков экспресса
//что делать с аутпутом если есть несколько энтри
//sass
//ревращатор js в java

const App = () => (
    <TestPage/>
);

render(<App/>, document.querySelector("#root"))