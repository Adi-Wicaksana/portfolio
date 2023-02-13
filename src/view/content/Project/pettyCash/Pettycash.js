import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Pettycash.css";
import "swiper/css";
import "swiper/css/pagination";

import pettycash_scheme from "../../../../resources/images/project/pettycash/pettycash_scheme_p.png";
import pettycash_create from "../../../../resources/images/project/pettycash/pettycash_create_p.png";
import pettycash_list from "../../../../resources/images/project/pettycash/pettycash_list_p.png";
import pettycash_report from "../../../../resources/images/project/pettycash/pettycash_report_p.png";

// install Swiper modules
SwiperCore.use([Pagination]);

function Pettycash() {

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
                        <div className="h-100 col-lg-6 pt-5">
                            <div className="project-desc-div">
                                <p className="font-project-name my-0">Project Name</p>
                                <p className="font-project-title">
                                    pettyCash
                                </p>
                                <p className="font-project-desc">
                                    is a process of company cash,
                                    often kept on hand (e.g., in a locked drawer or box),
                                    to pay for minor or incidental expenses, such as office
                                    supplies or employee reimbursements.
                                </p>
                                <div className="my-5">
                                    <p className="font-project-technical my-0">Technology</p>
                                    <div className="project-tech-div">
                                        <span className="project-tech-span font-project-tech">
                                            Laravel
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            PHP
                                        </span>
                                        <span className="project-tech-span font-project-tech">
                                            PostgreSQL
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="project-nav-div">
                                <div className="col-6 font-project-nav">
                                    Website Application
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <Swiper
                                modules={[Autoplay, EffectCreative]}
                                className="pettycash-swiper"
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
                                    <div className="pettycash-slide">
                                        <img
                                            src={pettycash_scheme}
                                            className="pettycash-image"
                                            alt="pettycash scheme"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pettycash-slide">
                                        <img
                                            src={pettycash_create}
                                            className="pettycash-image"
                                            alt="pettycash create"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pettycash-slide">
                                        <img
                                            src={pettycash_list}
                                            className="pettycash-image"
                                            alt="pettycash list"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pettycash-slide">
                                        <img
                                            src={pettycash_report}
                                            className="pettycash-image"
                                            alt="pettycash report"
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

export default Pettycash;
