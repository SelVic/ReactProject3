import React, {Component, Fragment} from "react";
import {Link} from "@reach/router";
import {render} from 'react-dom';
import qs from "qs";


class Pager extends Component {



    // updateCurr = (page) => {
    //     this.setState({current : page})
    // };
    //yandex.ru/maps/city/5?id=4&category=gifts#hook
    //path?query#hook

    render() {
        let pages = this.props.pages;
        return (
            <div>
                {
                    pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "}</Fragment>)
                }
                <div className="myFont">{this.props.current} {this.props.total}</div>
            </div>
        )
    }
}

Pager.defaultProps = {
    pages :[1,2,3,4,5,6,7,8,9,10],
    firstPage : 1,
    visible : 5,
    total : 10,
    current : 1
}

// const Pager = props => {
//     let pages = [1,2,3,4,5,6,7,8,9,10];
//     let total = 10;
//     let current = 1;
//     let firstPage = 1;
//     let visible = 5;
//     let sides = Math.floor(visible / 2)
//
//     let updateCurr = (newCurr) => {
//         current=newCurr;
//     }
//
//     // if (firstPage ) {
//     //     visible = Math.abs(sides - firstPage) + 1;
//     // }
//
//     // if (current > sides)
//     //     firstPage = current - sides;
//
//     // for (let i=0; i < visible; i++ ){
//     //     pages.push()
//     // }
//     return (
//         <div>
//             {
//                 pages.map((p, i) => <span key={p} onClick={e => updateCurr(p)}><Link to='/'>{p}{"   "}</Link></span>)
//             }
//             <div>{current}</div>
//         </div>
//
//
//     )
// }


export {Pager}