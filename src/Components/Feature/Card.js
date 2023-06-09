import React from 'react'


const Card = ({image, title, desc}) => {
    return (
        <>
            <div className='box btn-_shadow'>
                <img src={image} alt=""></img>
                <h2>{title}</h2>
                <p> 
                    {desc}
                </p>
                <a href=''>
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>

        </>

    )
}



export default Card;

