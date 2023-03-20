import React from 'react'


const Slider = ({id, image, design, name, offcer, post, date, desc}) => {
 
    return (
        <>  
             
            <article className='box d_flex'>
                <div className='left box_shadow'>
                    <div className='img'>
                        <img src={image} alt="main image"></img>
                    </div>
                    <div className='details mtop'>
                        <span>{design}</span>
                        <h2>{name}</h2>
                        <labe>{offcer}</labe>
                    </div>
                </div>
                <div className='right'>
                    <div className='icon'>
                        <div className='quote'>
                        <i class="fa-solid fa-quote-right"></i>
                        </div>
                    </div>
                    <div className='content box_Shadow mtop'>
                        <h1>{post}</h1>
                        <h3>{date}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
        </>
  )
}

export default Slider
