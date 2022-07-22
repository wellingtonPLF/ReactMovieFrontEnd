import { Star, StarHalf } from 'phosphor-react';
import React from 'react';
import './style.css'

interface Props {
    stars: Array<number> | undefined;
}

type StarProps = {
    fill: number;
}

const index = ({ stars }: Props) => {

    const Estrela = ({ fill } : StarProps) => {
        if (fill == 0) {
            return <Star size={32} color={'#FFBB3A'} />
        }
        else if (fill = 1){
            return <Star size={32} color={'#FFBB3A'} weight={'fill'}/>
        }
        else {
            return <StarHalf size={32} weight="fill" color={'#FFBB3A'} />
        }
    }

    return (
        <div className="dsmovie-stars-container">
            {
                stars ? (
                    <>
                        <Estrela fill={stars[0]} />
                        <Estrela fill={stars[1]} />
                        <Estrela fill={stars[2]} />
                        <Estrela fill={stars[3]} />
                        <Estrela fill={stars[4]} />
                    </>
                ) :
                (
                    <>
                        <Star size={32} color={'#FFBB3A'} />
                        <Star size={32} color={'#FFBB3A'} />
                        <Star size={32} color={'#FFBB3A'} />
                        <Star size={32} color={'#FFBB3A'} />
                        <Star size={32} color={'#FFBB3A'} />
                    </>
                )
            }
        </div>
    );
};

export default index;