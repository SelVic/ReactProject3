import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";
import {moviesApi} from "../moviesApi";


const Pager = props => {
    let visiblePagesCount = props.visiblePagesCount;
    let offset = Math.floor(visiblePagesCount / 2);
    let maxPagesCount = Math.ceil(props.total / props.pageSize) || 1;
    let pages = [];
    let start = 1;
    let query = qs.parse(location.search, {ignoreQueryPrefix: true});
    let currentPage = props.currentPage;

    if (props.currentPage > offset) {
        start = props.currentPage - offset;
        if (start > maxPagesCount - visiblePagesCount + 1 && maxPagesCount >= visiblePagesCount)
        {
            start = maxPagesCount - visiblePagesCount + 1;
        }
    }

    if (start + visiblePagesCount > maxPagesCount)
    {
        visiblePagesCount = Math.abs(maxPagesCount - start) + 1;
    }

    for (let i = 0; i < visiblePagesCount; ++i)
    {
        pages.push(i + start);
    }

    let isPrev = first(pages) > 1;
    let isNext = last(pages) < maxPagesCount;

    return (
        <div>
            Test
            {
                isPrev && <Link to={`${location.pathname}?${qs.stringify({...query, page: currentPage - 1})}`} ><a>prev</a></Link>
            }
            {
                pages.map(p => <Link to={`${location.pathname}?${qs.stringify({...query, page})}`} key={p}>{p}</Link>)
            }
            {
                isNext && <Link to={`${location.pathname}?${qs.stringify({...query, page: currentPage + 1})}`}><a>next</a></Link>
            }
        </div>
    );
}


Pager.propTypes = {
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    visiblePagesCount: PropTypes.number,
    total: PropTypes.number
}

Pager.defaultProps = {
    currentPage: 1,
    pageSize: 20,
    visiblePagesCount: 5,
    total: 0
}
//
// const leftPageButton = "left";
// const rightPageButton = "right";
//
// const Paging = (start, finish) =>{
//     let i = start;
//     const visibleRange = [];
//     while (i <= finish)
//     {
//         visibleRange.push(i);
//         i += 1;
//     }
//     return visibleRange;
// }
//
//
// class Pager extends Component {
//     constructor(props) {
//         super(props);
//         let total = null;
//         //максимальное значение смещения, а не ровно 2
//         //стрелка видна-не видна
//         //math.ceil math floor округление относительно нуля
//         let sides = 2;
//         let current = 1;
//     }
//
//     getPageNumbers = () => {
//         let start = 1;
//         let total = this.total;
//         let sides = this.sides;
//         let pageSize = this.pageSize;
//         let totalVisible = (this.total*2) + 1;
//         let totalPages = Math.ceil(total / pageSize);
//         let pages = Paging(1,20)  ;
//         let leftHidden = start > 2;
//         let rightHidden = (total - endPage) > 1;
//         let totalHidden = totalVisible - (pages.length + 1)
//
//         switch (true) {
//             case (leftHidden && !rightHidden): {
//                 let extraPages = Paging(start - totalHidden, start - 1);
//                 pages = [leftPageButton, ...extraPages, ...pages];
//                 break;
//             }
//             case (!leftHidden && rightHidden): {
//                 const extraPages = Paging(endPage + 1, endPage + totalHidden);
//                 pages = [...pages, ...extraPages, rightPageButton];
//                 break;
//             }
//             case (leftHidden && rightHidden):
//             default: {
//                 pages = [leftPageButton, ...pages, rightPageButton];
//                 break;
//             }
//             }
//         return [1,...pages,totalPages]
//     }
//
//     render() {
//         let pages = this.props.pages;
//         return (
//             <div>
//                 {
//                     leftPageButton && pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
//                 }
//                 {
//                     pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
//                 }
//                 {
//                     rightPageButton && pages.map((p, i) => <Fragment key={p}><Link to={`/?page=${p}`}>{p}</Link>{"  "} </Fragment>)
//                 }
//                 <div className="myFont">{this.props.current} {this.props.total}</div>
//             </div>
//         )
//     }
// }
//
// Pager.defaultProps = {
//     pages :[1,2,3,4,5,6,7,8,9,10],
//     firstPage : 1,
//     total : 20,
//     current : 1,
//     pageSize: 4,
//     pagerSize: 5
// }
//
// Pager.propTypes = {
// }

export {Pager};

