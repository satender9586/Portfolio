import React, { useState } from 'react';
import img from "../pic/hand.jpg";
import "./Contact.css";


const Contact = () => {
    const [data, setData]=useState({
        fullname: "",
        phone: "",
        email: "",
        Subject: "",
        message:"",
    
    })
    const inputEvtnt=(event)=>{
        const{name, value}= event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit =(event)=>{
        event.preventDefault();
        alert(
            `
                MY Name is ${data.fullname} 
                MY Phone is ${data.phone}
                MY email is ${data.email}
                MY Subject is ${data.Subject}
                MY message is ${data.message}

            `
        )

    }
    
    return (
        <>
            <div>
                <section className='Contact' id='contact'>
                    <div className='container top'>
                        <div className='heading text-center'>
                            <h4>CONTACT</h4>
                            <h1>Contact With Me</h1>
                        </div>

                        <div className='content d_flex'>
                            <div className='left'>
                                <div className='box box_shadow'>
                                    <div className='img images'>
                                         <img src={img} alt=""></img>
                                    </div>
                                    
                               
                                <div className='details'>
                                    <h1>Satender Ahirwar</h1>
                                    <p>I am Student of Bca and wroking as a intern in softication technologies pvt lt. Connect with me via call in to my account</p>
                                    <br />
                                    <p>Phone : + 9810411724</p>
                                    <p>Email : Sksatenderkumar59@gamil.com</p><br></br>
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn-_shadow'>
                                            <i class="fa-brands fa-facebook"></i>
                                        </button>
                                        <button className='btn-_shadow'>
                                            <i class="fa-brands fa-instagram"></i>
                                        </button>
                                        <button className='btn-_shadow'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right box_shadow' >
                                <form onSubmit={formSubmit}>
                                    <div className='f_flex'>
                                        <div className='input row'>
                                            <span>YOUR NAME</span>
                                            <input type="text" name="fullname" value={data.fullname} onChange={inputEvtnt}></input>
                                        </div>
                                        <div className='input row' style={{marginLeft:"5px"}}>
                                            <span>YOUR NUMBER</span>
                                            <input type="phone" name="phone" value={data.phone} onChange={inputEvtnt}></input>
                                        </div>
                                    </div>
                                    <div className='input '>
                                        <span>E-MAIL</span>
                                        <input type="Email" name="email" value={data.email} onChange={inputEvtnt}></input>
                                    </div>
                                    <div className='input '>
                                        <span>SUBJECT</span>
                                        <input type="text" name="Subject" value={data.Subject} onChange={inputEvtnt}></input>
                                    </div>
                                    <div className='input '>
                                        <span>YOUR MESSAGE</span>
                                        <textarea cols='30' rows='10' name="message"></textarea>
                                    </div>
                                    <button className='btn-_shadow'>
                                        SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Contact
