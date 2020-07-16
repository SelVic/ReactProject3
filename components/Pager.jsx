import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";

//отправить севрверу топмувис пейджсайз

const Pager = props => {
    let visiblePages = props.visiblePages;
    let offset = Math.floor(visiblePages / 2);
    let maxPages = Math.ceil(props.total / props.itemAmount) || 1;
    let pages = [];
    let start = 1;
    let search = qs.parse(location.search, {ignoreQueryPrefix: true});
    let currentPage = props.currentPage;

    if (props.currentPage > offset) {
        start = props.currentPage - offset;
        if (start > maxPages - visiblePages + 1 && maxPages >= visiblePages)
            start = maxPages - visiblePages + 1;
    }

    if (start + visiblePages > maxPages)
        visiblePages = Math.abs(maxPages - start) + 1;

    for (let i = 0; i < visiblePages; ++i) {
        pages.push(i + start);
    }
    //         switch (true) {
//             case (leftHidden && !rightHidden): {
//                 let extraPages = Paging(start - totalHidden, start - 1);
//                 pages = [leftPageButton, ...extraPages, ...pages];
//                 break;
//             }
//             }
    /* domain.com/users/10/vasya?cat=1&page=2#hook */
    let LeftPageButton = first(pages) > 1;
    let RightPageButton = last(pages) < maxPages;
    return (
        <div className="pager ml-30 mt-20">
            {
                LeftPageButton && <Link to={`${location.pathname}?${qs.stringify({...search, page: currentPage - 1})}`} >prev</Link>
            }
            {
                pages.map(page => <Link to={`${location.pathname}?${qs.stringify({...search, page})}`} key={page} className = "pager-item">{page}</Link>)
            }
            {
                RightPageButton && <Link to={`${location.pathname}?${qs.stringify({...search, page: currentPage + 1})}`} >next</Link>
            }
        </div>
    );
}

Pager.propTypes = {
    currentPage: PropTypes.number,
    itemAmount: PropTypes.number,
    visiblePages: PropTypes.number,
    total: PropTypes.number
}

Pager.defaultProps = {
    currentPage: 1,
    itemAmount: 15,
    visiblePages: 5,
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

