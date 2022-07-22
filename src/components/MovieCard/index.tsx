import React from 'react';
import MovieScore from '../MovieScore'
import {Link} from 'react-router-dom'
import Movie from 'shared/model/movie';

interface Props {
    movie: Movie;
}

const index = ({movie}: Props) => {

    return (
        <>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </>
    );
};

export default index;