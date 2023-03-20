import React from 'react';
import "./Testmonial.css";
import Slider from './Slider';
import TestimonialAp from './Testimonial_api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testmonial = () => {
  
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 1024 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const productdata = TestimonialAp.map((value, valueindex)=>{
        return <Slider key={value.key} {...value} />
      })

  return (
    <>
        <section className='testmonial' id='clients'>
            <div className='container another'>
                <div className='heading text-center'>
                    <h4>What Clients Say</h4>
                    <h1>Testimonial</h1>
                </div>
                <div className='slider'>
                        <Carousel responsive={responsive}>
                            {productdata}
                        </Carousel>;
                            
                            
                    
                </div>
            </div>
        </section>
    
    </>
    
    )
}

export default Testmonial
{/* <div className='slide_button'>
<button className='btn-_shadow prev_btn' onClick={()=> setindex(index - 1)}>
    <i className='fas fa-arrow-left'></i>
</button>
<button className='btn-_shadow next_btn'onClick={()=> setindex(index + 1)} > 
    <i className='fas fa-arrow-right'></i>
</button>
</div> */}