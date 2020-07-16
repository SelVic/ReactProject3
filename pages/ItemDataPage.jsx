import React, {Component, Fragment} from "react";
import {moviesApi} from "../moviesApi";
import moment from "moment";

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
            <div>
                <h1><b title="Рейтинг">{movieData.vote_average}</b> {movieData.title}</h1>
                {
                    <Fragment>
                        <div>
                            <div>
                                <div>{movieData.overview}</div>
                                <div><h2>Длительность:</h2> {movieData.runtime} мин</div>
                                <div><h2>Популярность:</h2> {movieData.popularity}</div>
                                <div><h2>Дата выхода:</h2> {moment(movieData.release_date).format("DD MMMM YYYY")} </div>
                            </div>
                            <div>
                                <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title}/>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        );
    }
}

export {ItemDataPage}