import React from "react";
import TestPage from "./components/Pager.jsx";
import { render } from "react-dom";


const App = () => (
    <TestPage/>
);

render(<App/>, document.querySelector("#root"))