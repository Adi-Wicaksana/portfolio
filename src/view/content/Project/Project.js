import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import "./style.css";
import Oms from "./OMS/Oms";

function Project() {
	return (<div className="row mx-0 swiper-slide">
		<div className="col-12 d-flex align-items-center justify-content-center project-content-wrap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<p className="font-project text-center"> Some Things I've Built </p>
					</div>
				</div>
				<Oms />
			</div>
		</div>
	</div >
	);
}

export default Project;
