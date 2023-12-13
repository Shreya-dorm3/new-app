import React, { useRef, useState } from 'react';

import "./loginComponent.css";
import AutoplayCarousel from '../carousel/carousel-container';
import Testimonials from '../testimonials/testimonial';
import NoticeBoard from '../notice-board/notice-board';
import Divider from '@mui/material-next/Divider';

function LoginComponent(props) {

    const inputDiv = useRef();
    const [key, setKey] = useState();

    const keyDown = (e) => {
        setKey(e.key);
    }

    const mouseEnter = (e) => {
        inputDiv.current.focus();
    }

    const mouseLeave = (e) => {
        setKey(null);
        inputDiv.current.blur();
    }

    const redirect = (e) => {
        e.preventDefault();
        window.open('https://app.loch.one/welcome', "_blank");
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row no-gutter w-100 h-100">
                    <div className="col-lg-7 col-md-8 d-none d-sm-flex first-pane-background d-flex">
                        <div className="row w-100 h-100">
                            <div className='carousel-notification'>
                                <AutoplayCarousel></AutoplayCarousel>
                            </div>
                            <div className='row w-100' style={{ height: '50%' }}>
                                <NoticeBoard></NoticeBoard>
                            </div>
                            <div>
                                <div style={{ color: '#F2F2F2' }} className='d-flex justify-content-end'>TESTIMONIALS</div>
                                <Divider orientation="horizontal" variant="inset" textAlign="right" className='divider'></Divider>
                                <Testimonials></Testimonials>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Sign Up!</h3>
                                        <p className="text-muted mb-4">For exclusive access to the website</p>
                                        <form>
                                            <div className='mb-3'>
                                                <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus={true} className='loginInput'
                                                    ref={inputDiv}
                                                    onMouseEnter={mouseEnter}
                                                    onMouseLeave={mouseLeave}
                                                    onKeyDown={keyDown} />
                                            </div>
                                            <button className='w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                                                onClick={redirect}>
                                                Get Started</button>
                                            <p className="my-5 text-uppercase mb-2">You'll receive an email with an invite link to join</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginComponent