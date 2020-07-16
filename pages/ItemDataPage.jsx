import React, {Component, Fragment} from "react";
import {moviesApi} from "../moviesApi";
import moment from "moment";
import {Header} from "../components/Header";

class ItemDataPage extends Component {
    state = {
        movieData: {},
    }

    componentDidMount = () => {
        this.fetch(this.props.id);
    };

    fetch = async (id) => {
        let movieData = await moviesApi.getMovie(id);
        this.setState({
            movieData: movieData,
        })
    };
    render() {
        let {movieData} = this.state;
        return (
            <Fragment>
                <Header/>
            <div>
                <h1><b>{movieData.vote_average}</b> {movieData.title}</h1>
                {
                    <Fragment>
                        <div>
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
            </Fragment>
        );
    }
}

export {ItemDataPage}