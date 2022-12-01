import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import Oms from "./OMS/Oms";
// import Pim from "./PIM/Pim";
import Yom from "./YOM/Yom";

import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css";
import Pim from "./PIM/Pim";
import MTransport from "./mTransport/MTransport";
import Tracking from "./Tracking/Tracking";

function Project() {
	return (<div className="row row-no-margin swiper-slide">
		<div className="col-12 project-content-wrap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<p className="font-title-project mb-font-title-project text-center"> Some Things I've Built </p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-project-container">
							<Swiper
								modules={[Pagination]}
								slidesPerView={1}
								speed={1000}
								autoHeight={false}
								pagination={{
									enabled: true,
									clickable: true,
								}}
								allowTouchMove={false}
							>
								<SwiperSlide>
									<Oms />
								</SwiperSlide>
								<SwiperSlide>
									<Yom />
								</SwiperSlide>
								<SwiperSlide>
									<Pim />
								</SwiperSlide>
								<SwiperSlide>
									<MTransport />
								</SwiperSlide>
								<SwiperSlide>
									<Tracking />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div >
	);
}

export default Project;
