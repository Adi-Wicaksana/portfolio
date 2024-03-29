import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Oms.css";
import "swiper/css";
import "swiper/css/pagination";

import oms_dashboard from "../../../../resources/images/project/oms/oms_dashboard_p.webp";
import oms_detail from "../../../../resources/images/project/oms/oms_detail_p.webp";
import oms_graphic from "../../../../resources/images/project/oms/oms_graphic_p.webp";
import oms_scheme from "../../../../resources/images/project/oms/oms_scheme_p.webp";

// install Swiper modules
SwiperCore.use([Pagination]);

function Oms() {
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
								<p className="font-project-title">
									Order Management System (OMS)
								</p>
								<p className="font-project-desc">
									Is a digital way to manage the lifecycle of an order. It
									tracks all the information and processes, including order
									entry, inventory management, fulfillment and after-sales
									service.
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
								<div className="font-project-nav">Website Application</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-lg-6 px-0 max-project-div">
							<Swiper
								modules={[Autoplay, EffectCreative]}
								className="oms-swiper"
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
									<div className="oms-slide">
										<img
											src={oms_scheme}
											className="oms-image"
											alt="oms scheme"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="oms-slide">
										<img
											src={oms_dashboard}
											className="oms-image"
											alt="oms dashboard"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="oms-slide">
										<img
											src={oms_detail}
											className="oms-image"
											alt="oms detail"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="oms-slide">
										<img
											src={oms_graphic}
											className="oms-image"
											alt="oms graphic"
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

export default Oms;
