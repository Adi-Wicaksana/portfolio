import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Yom.css";
import "swiper/css";
import "swiper/css/pagination";

import yom_scheme from "../../../../resources/images/project/yom/yom_scheme_p.png";
import yom_magento from "../../../../resources/images/project/yom/yom_magento_p.png";

// install Swiper modules
SwiperCore.use([Pagination]);

function Yom() {

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
                        <div className="col-12 col-sm-6 col-lg-6 px-0">
                            <div className="project-desc-div pt-5">
                                <p className="font-project-name my-0">Project Name</p>
                                <p className="font-project-title">
                                    Yogya Online Mobile (YOM) - Middleware
                                </p>
                                <p className="font-project-desc">
                                    is a layer of software that enables interaction and transmission of information between
                                    assorted applications and services.
                                </p>
                                <div className="my-sm-1 my-lg-5">
                                    <p className="font-project-technical my-0">Technology</p>
                                    <div className="project-tech-div">
                                        <span className="project-tech-span font-project-tech">
                                            Javascript
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Sails.js
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            HTML
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            CSS
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Redis
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            PostgreSQL
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Magento API
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="project-nav-div">
                                <div className="font-project-nav">
                                    Website Application <br />
                                    Middleware
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                className="yom-swiper"
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
                                    <div className="yom-slide">
                                        <img
                                            src={yom_scheme}
                                            className="yom-image"
                                            alt="yom scheme"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="yom-slide">
                                        <img
                                            src={yom_magento}
                                            className="yom-image"
                                            alt="yom magento"
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

export default Yom;