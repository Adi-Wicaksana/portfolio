import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Iot.css";
import "swiper/css";
import "swiper/css/pagination";

import iot_scheme from "../../../../resources/images/project/iot/iot_scheme_p.webp";
import iot_dashboard from "../../../../resources/images/project/iot/iot_dashboard_p.webp";

// install Swiper modules
SwiperCore.use([Pagination]);

function iot() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<span class="' + className + ' custom-pagination-project"></span>'
            );
        },
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="project-project-container">
                    <div className="w-100 h-100 row project-container">
                        <div className="col-12 col-sm-6 col-lg-6 px-0 max-project-div">
                            <div className="project-desc-div pt-5">
                                <p className="font-project-name my-0">Project Name</p>
                                <p className="font-project-title">Internet of Vehicles (IOV)</p>
                                <p className="font-project-desc">
                                    is a term that originated from the IoT as a dynamic network infrastructure connecting vehicles, users, and other smart devices to the Internet.
                                </p>
                                <div className="my-5 my-sm-1 my-lg-5">
                                    <p className="font-project-technical my-0">Technology</p>
                                    <div className="project-tech-div">
                                        <span className="project-tech-span font-project-tech">
                                            React Native
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Arduino Uno
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="project-nav-div">
                                <div className="font-project-nav">Mobile Application</div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-6 px-0 max-project-div">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                className="iot-swiper"
                                autoplay={false}
                                speed={1000}
                                pagination={pagination}
                                slidesPerView={1}
                                effect={"creative"}
                                grabCursor={true}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="iot-slide">
                                        <img
                                            src={iot_scheme}
                                            className="iot-image"
                                            alt="iot scheme"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="iot-slide">
                                        <img
                                            src={iot_dashboard}
                                            className="iot-image"
                                            alt="iot dashboard"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default iot;
