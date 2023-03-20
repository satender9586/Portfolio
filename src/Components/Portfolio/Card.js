import React, { useState } from 'react'

const Card = (props) => {

    const [modal, setModal] = useState(false);
    

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='box btn-_shadow'>
                <div className='img'>
                    <img src={props.image} alt="img"  onClick={() => toggleModal} ></img>
                </div>
                <div className='category d_flex'>
                    <span onClick={() => toggleModal}>{props.category}</span>
                    <label>
                        <i className='far fa-heart'></i>
                        {props.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2  onClick={() => toggleModal}>{props.title}</h2>
                    <a href='#popup' className='arrow'><i className='fas fa-arrow-right' onClick={() => toggleModal}></i></a>
                </div>
            </div>

            {/* {------------------------popup Modal------------------} */}

            {/* {
                modal && (
                <div className='modal'>
                    
                    <div onClick={toggleModal} className='overlay'>
                        <div className='Modal-content d_flex'>
                            <div className='modal-img left'>
                                <img src={props.image} alt=""></img>
                            </div>
                            <div className='modal-text right'>
                                <span>Featured - Design</span>
                                <h1>{props.title}</h1>
                                <p>
                                    This HTML file is a template. If you open it directly in the browser, you will see an empty page.                      You can add webfonts, meta tags, or analytics to this file.
                                    The build step will place the bundled scripts into thetag.
                                </p>
                                <p>
                                    This HTML file is a template. If you open it directly in the browser, you will see an empty page.                      You can add webfonts, meta tags, or analytics to this file.
                                    The build step will place the bundled scripts into thetag.
                                </p>
                                    <div className='button f_flex mtop'>
                                        <button className='btn-_shadow'>
                                            LIKE THIS <i className='far fa-thumbs-up'></i>
                                        </button>
                                        <button className='btn-_shadow'>
                                            VIEW PROJECT <i class="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                    <button className='close-modal btn-_shadow' onClick={toggleModal}>
                                        <i className='fas fa-times'></i>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } */}
        </>
    )
}

export default Card
