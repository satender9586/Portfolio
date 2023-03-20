import React from 'react';
import "./Portfolio.css";

import Card from './Card';
import { Portfolio__data } from './Portfolio_data';

const Portfolio = () => {
  
    
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                    <h1>My Portfolio</h1>
                </div>
                <div className='content grid'>
                   {
                        Portfolio__data.map((val, ind)=>{
                            return <Card key={ind} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title}/>
                        })
                   }
                   
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio
