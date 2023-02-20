import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Pim.css";
import "swiper/css";
import "swiper/css/pagination";

import pim_flashsale from "../../../../resources/images/project/pim/pim_flashsale_p.png";
import pim_category from "../../../../resources/images/project/pim/pim_category_p.png";
import pim_product from "../../../../resources/images/project/pim/pim_product_p.png";
import pim_scheme from "../../../../resources/images/project/pim/pim_scheme_p.png";

// install Swiper modules
SwiperCore.use([Pagination]);

function Pim() {

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
                                    Product Information Management (PIM)
                                </p>
                                <p className="font-project-desc">
                                    Is the process of managing all the information required to
                                    market and sell products through distribution channels.
                                </p>
                                <div className="my-5 my-sm-1 my-lg-5">
                                    <p className="font-project-technical my-0">Technology</p>
                                    <div className="project-tech-div">
                                        <span className="project-tech-span font-project-tech">
                                            PHP
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Laravel
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            PostgreSQL
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            API
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            Magento
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="project-nav-div">
                                <div className="font-project-nav">
                                    Website Application
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                className="pim-swiper"
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
                                    <div className="pim-slide">
                                        <img
                                            src={pim_scheme}
                                            className="pim-image"
                                            alt="pim scheme"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pim-slide">
                                        <img
                                            src={pim_flashsale}
                                            className="pim-image"
                                            alt="pim flashsale"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pim-slide">
                                        <img
                                            src={pim_category}
                                            className="pim-image"
                                            alt="pim category"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pim-slide">
                                        <img
                                            src={pim_product}
                                            className="pim-image"
                                            alt="pim product"
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

export default Pim;