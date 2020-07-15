import React, {Component, Fragment} from "react";
import {moviesApi} from "../api/moviesApi";
import {Progress} from "../components/Progress";
import moment from "moment";
import {Link} from "@reach/router";

class MovieDataPage extends Component {
    state = {
        fetchProgress: false,
        fetchDone: false,
        details: {},
        similars: []
    }
    componentDidMount = () => {
        this.fetch(this.props.id);
    };

    fetch = async (id) => {
        this.setState({
            fetchProgress: true,
            fetchDone: false
        })
        let details = await moviesApi.getMovieDetails(id);
        let similars = await moviesApi.getSimilarMovies(id);
        this.setState({
            details,
            similars: similars.results,
            fetchProgress: false,
            fetchDone: true
        })

    };

    render() {
        let {details, similars, fetchProgress, fetchDone} = this.state;
        return (
            <div className="container">
                <h1 className="white"><b title="Рейтинг">{details.vote_average}</b> {details.title} <Progress isProgress={fetchProgress}/></h1>
                {
                    fetchDone &&
                    <Fragment>
                        <div className="details mb-50">
                            <div>
                                <div className="mb-30">{details.overview}</div>
                                <div><b>Длительность:</b> {details.runtime} мин</div>
                                <div><b>Популярность:</b> {details.popularity}</div>
                                <div><b>Дата выхода:</b> {moment(details.release_date).format("DD MMMM YYYY")} </div>
                                <div><b>Жарн:</b> {details.genres.map((genre, i) => genre.name).join(', ')}</div>
                            </div>
                            <div>
                                <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title}/>
                            </div>
                        </div>
                        <h2>Похожие фильмы</h2>
                        <div className="similars">
                            {
                                similars.map(movie => (
                                    <Link className="similar movie-link" key={movie.id} to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""/>
                                        <div>{movie.title}</div>
                                    </Link>
                                ))
                            }
                        </div>
                    </Fragment>
                }
            </div>
        );
    }
}

export {MovieDataPage}