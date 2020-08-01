import React, {Component, Fragment} from 'react';
import qs from 'qs';
import isEqual from 'lodash/isEqual';
import {moviesApi} from "../moviesApi";
import {Pager} from "../components/Pager";
import {Item} from "../components/Item";
import {Header} from "../components/Header";
import {ProgressBar} from "../components/ProgressBar";

//
//

class MainMoviePage extends Component{
    state = {
        fetchProgress: false,
        fetchDone: false,
        items: [],
        page: 1,
        total: 0
    };

    fetch = async (params) => {
        this.setState({
            fetchProgress: true,
            fetchDone: false,
            page: +params.page || 1
        })
        let response = await moviesApi.getTopList(params);
        this.setState({
            items: response.results,
            total: response.total_results,
            fetchProgress: false,
            fetchDone: true
        })
    }

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
        let {fetchProgress, items, page, total} = this.state;
        return (
            <Fragment>
                <Header/>
                <Pager total={total} currentPage={page}/> <ProgressBar isLoading = {fetchProgress}/>
                <div className = "gallery fade-in">
                    {
                        items.map(mov => <Item key = {mov.id} movie = {mov} width = "100%" className = "gallery-item"/>)
                    }
                </div>
            </Fragment>

            )

    }
}

export {MainMoviePage}