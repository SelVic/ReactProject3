import React, {Component, Fragment} from "react";
import {moviesApi} from "../moviesApi";
import moment from "moment";
import {Header} from "../components/Header";
import {Link} from "@reach/router";

class ItemDataPage extends Component {
    state = {
        fetchProgress: false,
        fetchDone: false,
        movieData: {},
        similarItems: []
    }

    componentDidMount() {
        this.fetch(this.props.id);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.id != this.props.id)
            this.fetch(this.props.id);
    };

    fetch = async (id) => {
        this.setState({
            fetchProgress: true,
            fetchDone: false
        })
        let movieData = await moviesApi.getMovie(id);
        let similarItems = await moviesApi.getIdentical(id);
        this.setState({
            movieData: movieData,
            similarItems:similarItems.results,
            fetchProgress: false,
            fetchDone: true
        })
    };
    render() {
        let {movieData, similarItems, fetchProgress, fetchDone} = this.state;
        return (
            <Fragment>
                <Header/>
            <div className="fade-in">
                <h1 className="ml-150"><b>{movieData.vote_average}</b> {movieData.title}</h1>
                {
                    fetchDone &&
                    <Fragment>
                        <div className="item-details ml-50">
                            <div>
                                <div>{movieData.overview}</div>
                                <div><h2>Длительность:</h2> {movieData.runtime} минут</div>
                                <div><h2>Популярность:</h2> {movieData.popularity}</div>
                                <div><h2>Дата выхода:</h2> {moment(movieData.release_date).format("DD MMMM YYYY")}</div>
                            </div>
                            <div>
                                <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}/>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
                <div className="similars-header-display fade-in">Схожие фильмы</div>
                <div className="similars">
                    {
                        similarItems.map(m => (<Link className="similars-text" key={m.id} to={`/movie/${m.id}`}> <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}/> <div>{m.title}</div> </Link>))
                    }
                </div>
            </Fragment>
        );
    }
}

export {ItemDataPage}