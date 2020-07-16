import React from "react";
import {Link} from "@reach/router";
import moment from "moment";

const Item = props => {
    let {movie} = props;
    return (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
            <div>
                <div>{movie.vote_average}</div>
                <div>
                    <div>{movie.title}</div>
                    <div>{moment(movie.release_date).format("DD MMMM YYYY")}</div>
                </div>
            </div>
        </Link>
    )
};

export {Item}