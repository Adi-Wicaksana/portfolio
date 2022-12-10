import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";

import oms_dashboard from "../../../../resources/images/project/oms/oms_dashboard.png";
import oms_detail from "../../../../resources/images/project/oms/oms_detail.png";
import oms_graphic from "../../../../resources/images/project/oms/oms_graphic.png";

function Oms() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="project-project-container">
                    <div className="w-100 h-100 project-container">
                        <div className="col-lg-6 pt-5">
                            <p className='font-project-name my-0'>Project Name</p>
                            <p className='font-project-title'>Order Management System (OMS)</p>
                            <p className='font-project-desc'>
                                Is a digital way to manage the lifecycle of an order.
                                It tracks all the information and processes,
                                including order entry, inventory management,
                                fulfillment and after-sales service.
                            </p>
                        </div>
                        <div className="col-lg-6"></div>
                        {/* <div className="project-image-left-div">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                slidesPerView={1}
                                autoplay={true}
                                loop={true}
                                allowTouchMove={false}
                                speed={1000}
                            >
                                <SwiperSlide>
                                    <div className="project-slide">
                                        <img alt="oms_dashboard" className="img-fluid p-1"
                                            src={oms_dashboard} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-slide">
                                        <img alt="oms_detail" className="img-thumbnail p-1"
                                            src={oms_detail} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-slide">
                                        <img alt="oms_graphic" className="img-thumbnail p-1"
                                            src={oms_graphic} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="project-content-left-div">
                            <div className="project-title-left-div">
                                <p className="font-featured-project">Featured project</p>
                                <h4 className="font-featured-project-name">Order Management System</h4>
                                <div className="project-desc-left-div p-3">
                                    <p className="font-information mb-0">Order Management System (OMS)
                                        is a digital way to manage the lifecycle of an order.
                                        It tracks all the information and processes,
                                        including order entry, inventory management,
                                        fulfillment and after-sales service.</p>
                                </div>
                            </div>
                            <div className="pt-4 project-tech-left-div">
                                <span className="px-2">PHP</span>
                                <span className="px-2">Laravel</span>
                                <span className="px-2">PostgreSQL</span>
                                <span className="px-2">API</span>
                                <span className="px-2">Magento</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Oms;