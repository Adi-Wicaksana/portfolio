import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Puskim.css";
import "swiper/css";
import "swiper/css/pagination";

import puskim_1 from "../../../../resources/images/project/puskim/puskim_1_p.webp";
import puskim_2 from "../../../../resources/images/project/puskim/puskim_2_p.webp";
import puskim_3 from "../../../../resources/images/project/puskim/puskim_3_p.webp";

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
									<a
										href="http://rsa.ciptakarya.pu.go.id/2021/index.php"
										target={"_blank"}
										rel="noreferrer"
									>
										Desain Spektra Indonesia 2021
									</a>
								</p>
								<p className="font-project-desc">
									This application refers to the 2017 Indonesia Earthquake
									Source and Hazard Map compiled by the National Earthquake
									Study Center (PuSGeN) Team, Housing and Settlements Research
									and Development Center, Balitbang, Ministry of Public Works
									and Public Housing
								</p>
								<div className="my-3 my-sm-1 my-lg-5">
									<p className="font-project-technical my-0">Technology</p>
									<div className="project-tech-div">
										<span className="project-tech-span font-project-tech">
											PHP
										</span>
										<span className="project-tech-span font-project-tech">
											HTML
										</span>
										<span className="project-tech-span font-project-tech">
											CSS
										</span>
										<span className="project-tech-span font-project-tech">
											Javascript
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

						<div className="col-12 col-sm-6 col-lg-6 px-0 max-project-div">
							<Swiper
								modules={[Autoplay, EffectCreative]}
								className="puskim-swiper"
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
									<div className="puskim-slide">
										<img
											src={puskim_1}
											className="puskim-image"
											alt="puskim 1"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="puskim-slide">
										<img
											src={puskim_2}
											className="puskim-image"
											alt="puskim 2"
										/>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="puskim-slide">
										<img
											src={puskim_3}
											className="puskim-image"
											alt="puskim 3"
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
