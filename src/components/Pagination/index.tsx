import { CaretLeft, CaretRight } from 'phosphor-react';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoviePage } from 'shared/types/MoviePage';

interface Props {
    pageNumber: number,
    setPN: (num: number) => void,
    page: MoviePage;
}

const index = ({setPN, page, pageNumber}: Props) => {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button onClick={() => setPN(pageNumber-1)} className="dsmovie-pagination-button" disabled={page.first} >
                    <FontAwesomeIcon icon={faAngleLeft} fontSize={22} />
                </button>
                <p>{`${pageNumber + 1} de ${page.totalPages}`}</p>
                <button onClick={() => setPN(pageNumber+1)} className="dsmovie-pagination-button" disabled={page.last} >
                    <FontAwesomeIcon icon={faAngleRight} fontSize={22} />
                </button>
            </div>
        </div>
    );
};

export default index;