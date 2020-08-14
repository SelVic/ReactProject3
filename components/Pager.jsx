import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";



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

    let LeftPageButton = first(pages) > 1;
    let RightPageButton = last(pages) < maxPages;
    return (
        <div className="pager ml-800 mt-20">
            {
                LeftPageButton && <Link to={`${location.pathname}?${qs.stringify({...search, page: currentPage - 1})}`} className = "pager-item"><i className="fa fa-arrow-left"/></Link>
            }
            {
                pages.map(page => <Link to={`${location.pathname}?${qs.stringify({...search, page})}`} key={page} className = "pager-item">{page}</Link>)
            }
            {
                RightPageButton && <Link to={`${location.pathname}?${qs.stringify({...search, page: currentPage + 1})}`} className = "pager-item"><i className="fa fa-arrow-right"/></Link>
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


export {Pager};

