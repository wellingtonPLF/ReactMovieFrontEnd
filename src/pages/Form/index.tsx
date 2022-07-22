import React, { useEffect, useState } from 'react';
import './style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import movieService from 'shared/service/movieService';
import Movie from 'shared/model/movie';
import { validateEmail } from 'shared/utils/validateEmail';
import Score from 'shared/model/score';
import scoreService from 'shared/service/scoreService';

const Index = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState<Movie>();

    useEffect( () => {
       const id = params.movieId
       if (id){
            movieService.pesquisarPorId(parseInt(id)).then(
                it => {
                    setMovie(it)
                }
           )
       }
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as any).email.value
        const score = (e.target as any).score.value
        if(!validateEmail(email)){
            return
        }
        const updateScore = new Score(movie!.id, email, score)

        scoreService.atualizar(updateScore).then(
            it => {
                navigate("/")
            }
        )
    }

    return (
        <div className="dsmovie-form-container">
            {
                movie && (
                    <>
                        <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
                        <div className="dsmovie-card-bottom-container">
                            <h3>{movie.title}</h3>
                            <form className="dsmovie-form" onSubmit={handleSubmit}>
                                <div className="form-group dsmovie-form-group">
                                    <label htmlFor="email">Informe seu email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group dsmovie-form-group">
                                    <label htmlFor="score">Informe sua avaliação</label>
                                    <select className="form-control" id="score">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="dsmovie-form-btn-container">
                                    <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                                </div>
                            </form >
                            <Link to="/" >
                                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                            </Link>
                        </div >
                    </>
                )
            }
        </div >
    );
};

export default Index;