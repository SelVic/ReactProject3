import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";
import {moviesApi} from "../moviesApi";
import {Pager} from "../components/Pager";

class MainMoviePage extends Component{
    state = {
        page: 1,
        total: 0
    };

    fetch = async (params) => {
        this.setState({
            page: +params.page
        })
        let apiData = moviesApi.getTopList(params)
        this.setState({
            total: apiData.total_results
        })
    }

    // componentDidMount(){
    //     let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
    //     this.setState({page});
    //     console.log(page);
    // }
    // componentDidUpdate(prevProps, prevState){
    //     let {page} = qs.parse(location.search, {ignoreQueryPrefix: true});
    //     if (prevState.page !== page) {
    //         this.setState({page});
    //     }
    //     console.log(page);
    // }
    componentDidMount() {
        let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        this.fetch({page: newQuery.page});
    };

    componentDidUpdate(prevProps) {
        let oldQuery = qs.parse(prevProps.location.search, {ignoreQueryPrefix: true});
        let newQuery = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        if (!isEqual(oldQuery, newQuery))
            this.fetch({page: newQuery.page});
    };

    render(){
        let total = this.total;
        let curr = this.state.page;
        return <Fragment>{this.props.children}<Pager total={total} current={curr}/></Fragment>
    }
}

export {MainMoviePage}