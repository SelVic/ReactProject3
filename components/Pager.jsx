import React, {Component} from "react";
import {Link} from "@reach/router";
import {render} from 'react-dom';

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

class Pager extends Component {
    state = {
        pages :[1,2,3,4,5,6,7,8,9,10],
        total : 10,
        current : 1,
        firstPage : 1,
        visible : 5
    };

    updateCurr = (page) => {
        this.setState({current : page})
    };


    render() {
        let curr = this.state.current;
        let pages = this.state.pages;
        return (
            <div>
                {
                    pages.map((p, i) => <span key={p} value = {p} onClick={e => e.currentTarget.value}><Link to='/'>{p}{"   "}</Link></span>)
                }
                <div>{curr}</div>
            </div>
        )
    }
}




export default Pager