import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import tracking_active from "../../../../resources/images/project/tracking/tracking_active.png";

function Tracking() {
    return (
        <div className="project-container">
            <div className="project-image-left-div">
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    loop={true}
                    allowTouchMove={false}
                    speed={1000}
                >
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="tracking_active" className="img-fluid p-1"
                                src={tracking_active} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="project-content-left-div">
                <div className="project-title-left-div">
                    <p className="font-featured-project">Featured project</p>
                    <h4 className="font-featured-project-name">Tracking Order</h4>
                    <div className="project-desc-left-div p-3">
                        <p className="font-information mb-0">Tracking order is a website that has information
                        about status delivery for customer who order from Yogya Electronic (Yo-El).</p>
                    </div>
                </div>
                <div className="pt-4 project-tech-left-div">
                    <span className="px-2">PHP</span>
                    <span className="px-2">HTML</span>
                    <span className="px-2">CSS</span>
                    <span className="px-2">PostgreSQL</span>
                </div>
            </div>
        </div>
    );
}

export default Tracking;