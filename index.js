import React from "react";
import Pager from "./components/Pager.jsx";
import { render } from "react-dom";

//тимур шемсединов ютуб ссылка в вотсе
//дописать request header в запрос
//router express

const App = () => (
    <Pager/>
);

render(<App/>, document.querySelector("#root"))