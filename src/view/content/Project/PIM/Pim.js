import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from "swiper";

import pim_flashsale from "../../../../resources/images/project/pim/pim_flashsale.png";
import pim_category from "../../../../resources/images/project/pim/pim_category.png";
import pim_product from "../../../../resources/images/project/pim/pim_product.png";

function Pim() {
    return (
        <div className="project-container">
            <div className="project-image-left-div">
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
                            <img alt="pim_category" className="img-fluid p-1"
                                src={pim_category} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="pim_product" className="img-fluid p-1"
                                src={pim_product} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-slide">
                            <img alt="pim_flashsale" className="img-thumbnail p-1"
                                src={pim_flashsale} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="project-content-left-div">
                <div className="project-title-left-div">
                    <p className="font-featured-project">Featured project</p>
                    <h4 className="font-featured-project-name">Product Information Management</h4>
                    <div className="project-desc-left-div p-3">
                        <p className="font-information mb-0">Product Information Management (PIM) is the process of managing all 
                        the information required to market and sell products through 
                        distribution channels.</p>
                    </div>
                </div>
                <div className="pt-4 project-tech-left-div">
                    <span className="px-2">PHP</span>
                    <span className="px-2">Laravel</span>
                    <span className="px-2">PostgreSQL</span>
                    <span className="px-2">Magento</span>
                </div>
            </div>
        </div>
    );
}

export default Pim;