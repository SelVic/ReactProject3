import React, {Component, Fragment} from "react";
import {Pager} from "./components/Pager.jsx";
import { render } from "react-dom";
import qs from "qs";
import {Router} from "@reach/router";


//синтаксис для описания путей к файлам (см. гульпфайл)
//плагины для релиза и трансформации кода
//youtube gulp plugins
//ошибка при замене тильды на node-modules
//почитать про typescript
//screencast в вотсе


class App extends Component{
    state = {
        page: 1,
        sides: 2
    };

    componentDidMount(){
        let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
        this.setState({page});
        console.log(page);
    }
    componentDidUpdate(prevProps, prevState){
        let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
        if (prevState.page !== page) {
            this.setState({page});
        }
        console.log(page);
    }

    render(){
        let total = 15;
        let curr = this.state.page;
        let visible = 5;
        let sides = 2;
        return <Fragment>{this.props.children}<Pager total={total} current={curr}/></Fragment>
    }
}

let TestComponent = () => {
    return <div>123</div>
}

render(<Router><App path = "/"><TestComponent default/></App></Router>, document.querySelector("#root"))