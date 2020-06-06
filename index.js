import React from "react";
import Pager from "./components/Pager.jsx";
import { render } from "react-dom";

//router express

const App = () => (
    <Pager/>
);

render(<App/>, document.querySelector("#root"))