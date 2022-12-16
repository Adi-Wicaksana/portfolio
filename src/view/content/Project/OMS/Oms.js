import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import { BsArrowRight } from "react-icons/bs";

// import Swiper core and required modules
import SwiperCore, {
	Pagination
} from 'swiper/core';

import "swiper/css";
import "swiper/css/pagination";

import oms_dashboard from "../../../../resources/images/project/oms/oms_dashboard_f.png";
import oms_detail from "../../../../resources/images/project/oms/oms_detail_f.png";
import oms_graphic from "../../../../resources/images/project/oms/oms_graphic_f.png";

// install Swiper modules
SwiperCore.use([Pagination]);

function Oms() {
	const pagination = {
		"clickable": true,
		"renderBullet": function (index, className) {
			return '<span class="'+className+' custom-pagination-project"></span>';
		}
	}

	return (
		<div className="row">
			<div className="col-12">
				<div className="project-project-container">
					<div className="w-100 h-100 row project-container">
						<div className="h-100 col-lg-6 pt-5">
							<div className="project-desc-div">
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
									Website Application <br />
									March 2019
								</div>
								<div className="col-6 d-flex justify-content-end align-items-end font-next-project">
									<div className="d-flex justify-content-center align-items-center">
										Next Project <BsArrowRight className="mx-2" size={18} />
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<Swiper pagination={pagination} style={{ height: '100%', backgroundColor: 'red' }}>
								<SwiperSlide>1</SwiperSlide>
								<SwiperSlide>2</SwiperSlide>
								<SwiperSlide>3</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Oms;
