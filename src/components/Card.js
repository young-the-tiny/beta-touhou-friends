import React from 'react';

const Card = (props) => {
    const {name,email,id} = props;
    return (
        <div className='f4 tc bg-light-blue dib br3 pa3 ma2 grow shadow-4'>
            <img alt='TouhouImage'src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;