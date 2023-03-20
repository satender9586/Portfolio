import React from 'react'
import "./Feature.css";
import Card from './Card';
import data from './FeatureApi';

const Feature = () => {
  return (
    <>
            <section className='features top' id='features'>
                <div className='container'>
                    <div className='heading'>
                        <h4>Heading<h1>What I Do</h1></h4>
                    </div>
                    <div className='content grid'>
                        {
                            data.map((val, index)=>{
                                return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
                            })
                        }
                        

                    </div>
                </div>
            </section>
    
    
    </>
  )
}

export default Feature
