import React from 'react';
import Movie from 'shared/model/movie';
import MovieStars from '../MovieStars'
import './style.css'

interface Props {
    movie: Movie;
}

const index = ({movie}: Props) => {
    const getFills = (score: number | undefined) => {
        if(score){
            const fills = [0,0,0,0,0]
            const integerPart = Math.floor(score)
            for(let i = 0; i < integerPart; i++){
                fills[i] = 1;
            }
            const diff = score - integerPart
            if(diff > 0){
                fills[integerPart] = 0.5
            }

            return fills
        }
    }

    const fills = getFills(movie.score)

    return (
        <div className="dsmovie-score-container">
            {
                movie.score && (
                    <p className="dsmovie-score-value">{movie.score > 0 ? movie.score.toFixed(1) : '-'}</p>
                )
            }
            <MovieStars stars={fills} />
            <p className="dsmovie-score-count">{movie.count} avaliações</p>
        </div>
    );
};

export default index;