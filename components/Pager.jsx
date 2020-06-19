import React, {Component, Fragment} from "react";
import {Link} from "@reach/router";
import {render} from 'react-dom';
import qs from "qs";
import PropTypes from 'prop-types';

const leftPageButton = "left";
const rightPageButton = "right";

const Paging = (start, finish) =>{
    let i = start;
    const visibleRange = [];
    while (i <= finish)
    {
        visibleRange.push(i);
        i += 1;
    }
    return visibleRange;
}


class Pager extends Component {
    constructor(props) {
        super(props);
        let total = null;
        //максимальное значение смещения, а не ровно 2
        //стрелка видна-не видна
        //math.ceil math floor округление относительно нуля
        let sides = 2;
        let current = 1;
    }

    getPageNumbers = () => {
        let start = 1;
        let total = this.total;
        let sides = this.sides;
        let pageSize = this.pageSize;
        let totalVisible = (this.total*2) + 1;
        let totalPages = Math.ceil(total / pageSize);
        let pages = Paging(1,20)  ;
        let leftHidden = start > 2;
        let rightHidden = (total - endPage) > 1;
        let totalHidden = totalVisible - (pages.length + 1)

        switch (true) {
            case (leftHidden && !rightHidden): {
                let extraPages = Paging(start - totalHidden, start - 1);
                pages = [leftPageButton, ...extraPages, ...pages];
                break;
            }
            case (!leftHidden && rightHidden): {
                const extraPages = Paging(endPage + 1, endPage + totalHidden);
                pages = [...pages, ...extraPages, rightPageButton];
                break;
            }
            case (leftHidden && rightHidden):
            default: {
                pages = [leftPageButton, ...pages, rightPageButton];
                break;
            }
            }
        return [1,...pages,totalPages]
    }

    render() {
        let pages = this.props.pages;
        return (
            <div>
                {
                    leftPageButton && pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
                }
                {
                    pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
                }
                {
                    rightPageButton && pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
                }
                <div className="myFont">{this.props.current} {this.props.total}</div>
            </div>
        )
    }
}

Pager.defaultProps = {
    pages :[1,2,3,4,5,6,7,8,9,10],
    firstPage : 1,
    total : 20,
    current : 1,
    pageSize: 4,
    pagerSize: 5
}

Pager.propTypes = {
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