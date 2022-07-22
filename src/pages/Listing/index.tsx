import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination'
import MovieCard from '../../components/MovieCard'
import movieService from 'shared/service/movieService';
import Movie from 'shared/model/movie';
import { MoviePage } from 'shared/types/MoviePage';

const Index = () => {
    const [movies, setMovies] = useState<Array<Movie>>()
    const [pageNumber, setPageNumber] = useState(0)
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })

    const handlePageNumber = (num: number) => {
        setPageNumber(num)
    }

    useEffect(() => {
        movieService.getByPageNumber(pageNumber).then(
            it => {
                setMovies(it.content)
                setPage(it)
            }
        )
    }, [pageNumber])

    return (
        <>
            <Pagination pageNumber={pageNumber} setPN={handlePageNumber} page={page}/>
            <div className='container'>
                {
                    movies?.length && (
                        <div className='row'>
                            {
                                movies.map( e => (
                                    <div key={e.id} className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                                        <MovieCard movie={e}/>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Index;