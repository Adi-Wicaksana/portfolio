import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";

import yom_online from "../../../../resources/images/project/yom/yom_online.jpg";
import yom_middleware from "../../../../resources/images/project/yom/yom_middleware.jpg";
import yom_homepage from "../../../../resources/images/project/yom/yom_homepage.jpg";

function Yom() {
    return (
        <div className="project-container">
            <div className="project-image-right-div">
                <Swiper
                    modules={[Autoplay, EffectCreative]}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["-100%", 0, 0],
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
                            <img alt="yom_online" className="img-fluid p-1"
                                src={yom_online} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="yom_middleware" className="img-fluid p-1"
                                src={yom_middleware} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="yom_homepage" className="img-fluid p-1"
                                src={yom_homepage} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="project-content-right-div">
                <div className="project-title-right-div">
                    <p className="font-featured-project">Featured project</p>
                    <h4 className="font-featured-project-name">Middleware & Homepage YOM</h4>
                    <div className="project-desc-right-div p-3">
                        <p className="font-information mb-0">Middleware Yogya Online Mobile (YOM) is Application Programming Interface (API) that enables 
                        kinds of communication between mobile app and magento. <br/> <br/> 
                        Homepage YOM is dynamic page that list of content controlled by user who has role to control in content management system web app.
                        </p>
                    </div>
                </div>
                <div className="pt-4 project-tech-right-div">
                    <span className="px-2">Javascript</span>
                    <span className="px-2">CSS</span>
                    <span className="px-2">HTML</span>
                    <span className="px-2">Magento</span>
                    <span className="px-2">Sails.JS</span>
                </div>
            </div>
        </div>
    );
}

export default Yom;