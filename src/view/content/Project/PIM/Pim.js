import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { move } from "../../../../features/swiper/projectSlice";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Pim.css";
import "swiper/css";
import "swiper/css/pagination";

import pim_flashsale from "../../../../resources/images/project/pim/pim_flashsale_p.png";
import pim_category from "../../../../resources/images/project/pim/pim_category_p.png";
import pim_product from "../../../../resources/images/project/pim/pim_product_p.png";

// install Swiper modules
SwiperCore.use([Pagination]);

function Pim() {
    const dispatch = useDispatch();

    const moveSlide = () => {
        dispatch(move(0));
    };

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
                        <div className="col-lg-6">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                className="pim-swiper"
                                autoplay={true}
                                speed={1000}
                                pagination={pagination}
                                slidesPerView={1}
                                effect={"creative"}
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
                                            src={pim_flashsale}
                                            className="pim-image"
                                            alt="pim scheme"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pim-slide">
                                        <img
                                            src={pim_category}
                                            className="pim-image"
                                            alt="pim dashboard"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pim-slide">
                                        <img
                                            src={pim_product}
                                            className="pim-image"
                                            alt="pim detail"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="h-100 col-lg-6 pt-5">
                            <div className="project-desc-div">
                                <p className="font-project-name my-0">Project Name</p>
                                <p className="font-project-title">
                                    Product Information Management (PIM)
                                </p>
                                <p className="font-project-desc">
                                    Is the process of managing all the information required to 
                                    market and sell products through distribution channels.
                                </p>
                                <div className="my-5">
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
                                <div className="col-6 font-project-nav">
                                    Website Application
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-end font-next-project">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className={"btn next-project-btn btn-link font-nav-link"}
                                            onClick={() => moveSlide()}>
                                            Next Project <BsArrowRight className="mx-2" size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pim;