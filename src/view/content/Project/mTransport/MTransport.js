import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import mtransport_all from "../../../../resources/images/project/mtransport/mtransport_all.png";

function MTransport() {
    return (
        <div className="project-container">
            <div className="project-image-right-div">
                <Swiper
                 slidesPerView={1}
                 autoplay={true}
                 loop={true}
                 allowTouchMove={false}
                 speed={1000}
                 >
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="mtransport_all" className="img-fluid p-1"
                                src={mtransport_all} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="project-content-right-div">
                <div className="project-title-right-div">
                    <p className="font-featured-project">Featured project</p>
                    <h4 className="font-featured-project-name">mTransport</h4>
                    <div className="project-desc-right-div p-3">
                        <p className="font-information mb-0">mTransport is
                            a mobile application that functions to 
                            manage delivery order to hands of customer 
                            who order from Yogya Electronic (Yo-El) by distribution center (DC).
                            </p>
                    </div>
                </div>
                <div className="pt-4 project-tech-right-div">
                    <span className="px-2">React Native</span>
                    <span className="px-2">API</span>
                </div>
            </div>
        </div>
    );
}

export default MTransport;