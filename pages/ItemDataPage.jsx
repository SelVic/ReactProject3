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
                                <div><b>Длительность:</b> {movieData.runtime} мин</div>
                                <div><b>Популярность:</b> {movieData.popularity}</div>
                                <div><b>Дата выхода:</b> {moment(movieData.release_date).format("DD MMMM YYYY")} </div>
                                <div><b>Жанр:</b> {movieData.genres.map((genre, i) => genre.name).join(', ')}</div>
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