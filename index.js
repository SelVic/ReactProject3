import React, {Component} from "react";
import {Pager} from "./components/Pager.jsx";
import { render } from "react-dom";
import qs from "qs";


class App extends Component{
    state = {
        page: 1,
        sides: 2
    };

    //setState в дидмаунте
    //что срабатывает когда хожу по ссылкам
    //доки REACT
    // 
    //
    componentDidMount(){
        let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
        this.page = page;
        console.log(page);
    }

    // componentDidUpdate(){
    //
    // }

    render(){
        let total = 15;
        let curr = this.page;
        return <Pager total={total} current={curr}/>
    }
}

render(<App/>, document.querySelector("#root"))