// import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import './style.css'

const index = () => {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    {/*<Arrow />*/}
                    <span>left</span>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    {/*<Arrow className="dsmovie-flip-horizontal" />*/}
                    <span>right</span>
                </button>
            </div>
        </div>
    );
};

export default index;