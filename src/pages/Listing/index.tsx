import React from 'react';
import Pagination from '../../components/Pagination'
import MovieCard from '../../components/MovieCard'

const index = () => {
    return (
        <>
            <Pagination />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;