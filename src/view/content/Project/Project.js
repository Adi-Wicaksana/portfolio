import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "./Project.css";
import Oms from "./OMS/Oms";
import Pim from "./PIM/Pim";

function Project() {
	const swiperRef = useRef(null);
	const activeIndex = useSelector((state) => state.project.index);

	useEffect(() => {
		swiperRef.current.swiper.slideTo(activeIndex);
	}, [activeIndex])

	return (
		<div className="row mx-0 swiper-slide">
			<div className="col-12 d-flex align-items-center justify-content-center project-content-wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<p className="font-project text-center">
								{" "}
								Some Things I've Built{" "}
							</p>
						</div>
					</div>

					<Swiper
						ref={swiperRef}
						allowTouchMove={false}
						scrollbar={{ draggable: true }}
						slidesPerView={1}
						speed={1000}
					>
						<SwiperSlide key={0}>
							<Oms />
						</SwiperSlide>
						<SwiperSlide key={1}>
							<Pim />
						</SwiperSlide>
					</Swiper>

				</div>
			</div>
		</div>
	);
}

export default Project;
