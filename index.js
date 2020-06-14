import React, {Component} from "react";
import {Pager} from "./components/Pager.jsx";
import { render } from "react-dom";
import qs from "qs";


class App extends Component{
    state = {
        page: 1,
        sides: 2
    };

    //
    //setState в дидмаунте
    //что срабатывает когда хожу по ссылкам
    //доки REACT
    // 
    //
    componentDidMount(){
        let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
        this.page = page;
        // this.setState({...page});
        console.log(page);
    }
    //
    // componentDidUpdate(prevPage){
    //     let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
    //     if (this.page !== prevPage) {
    //         this.setState({...page});
    //     }
    //     console.log(page);
    // }

    render(){
        let total = 15;
        let curr = this.page;
        let visible = 5;
        let sides = 2;
        return <Pager total={total} current={curr}/>
    }
}

render(<App/>, document.querySelector("#root"))