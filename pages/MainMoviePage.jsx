import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {Link} from "@reach/router";
import first from "lodash/first";
import last from "lodash/last";
import isEqual from 'lodash/isEqual';
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
        let response = await moviesApi.getTopList(params);
        this.setState({
            total: response.total_results,
        })
    }
    //
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
        let newLocation = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        this.fetch({page: newLocation.page});
    };

    componentDidUpdate(prevProps) {
        let oldLocation = qs.parse(prevProps.location.search, {ignoreQueryPrefix: true});
        let newLocation = qs.parse(this.props.location.search, {ignoreQueryPrefix: true});
        if /*(oldQuery != newQuery)*/ (!isEqual(oldLocation,newLocation))
            this.fetch({page: newLocation.page});
    };

    render(){
        /*
        * let total = this.state.total;
        * let curr = this.state.curr;
        * */
        let {page, total} = this.state;
        return <Pager total={total} currentPage={page}/>
    }
}

export {MainMoviePage}