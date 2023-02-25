import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Mtransport.css";
import "swiper/css";
import "swiper/css/pagination";

import mtransport_scheme from "../../../../resources/images/project/mtransport/mtransport_scheme_p.webp";
import mtransport_dashboard from "../../../../resources/images/project/mtransport/mtransport_dashboard_p.webp";
import mtransport_track from "../../../../resources/images/project/mtransport/mtransport_track_p.webp";

// install Swiper modules
SwiperCore.use([Pagination]);

function MTransport() {
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
								<p className="font-project-title">mTransport</p>
								<p className="font-project-desc">
									a mobile application to manage delivery order to hands of
									customer who order from Yogya Electronic (Yo-El) by
									distribution center (DC). The app has integration to tracking
									order that has information about status delivery for customer.
								</p>
								<div className="my-sm-1 my-lg-4">
									<p className="font-project-technical my-0">Technology</p>
									<div className="project-tech-div">
										<span className="project-tech-span font-project-tech">
											React Native
										</span>
										<span className="project-tech-span font-project-tech">
											API
										</span>
										<span className="project-tech-span font-project-tech">
											Laravel
										</span>
										<span className="project-tech-span font-project-tech">
											PHP
										</span>
									</div>
								</div>
							</div>

							<div className="project-nav-div">
								<div className="font-project-nav">
									Mobile Application <br />
									Website Application
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-lg-6 px-0 max-project-div">
							<Swiper
								modules={[Autoplay, EffectCreative]}
								className="mtransport-swiper"
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
									<div className="mtransport-slide">
										<img
											src={mtransport_scheme}
											className="mtransport-image"
											alt="mtransport scheme"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="mtransport-slide">
										<img
											src={mtransport_dashboard}
											className="mtransport-image"
											alt="mtransport dashboard"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="mtransport-slide">
										<img
											src={mtransport_track}
											className="mtransport-image"
											alt="mtransport track"
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

export default MTransport;
