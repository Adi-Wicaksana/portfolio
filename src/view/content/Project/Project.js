import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { move } from "../../../features/swiper/projectSlice";

import "./Project.css";
import Oms from "./OMS/Oms";
import Pim from "./PIM/Pim";
import Yom from "./YOM/Yom";
import Mtransport from "./mTransport/MTransport";
import Pettycash from "./pettyCash/Pettycash";
import Puskim from "./Puskim/Puskim";
import Iot from "./IOT/Iot";

import Motion from "../../../components/Motion";

function Project() {
	const dispatch = useDispatch();
	const swiperRef = useRef(null);
	const activeIndex = useSelector((state) => state.project.index);

	useEffect(() => {
		swiperRef.current.swiper.slideTo(activeIndex);
	}, [activeIndex]);

	const moveSlide = (x) => {
		dispatch(move(x));
	};

	return (
		<Motion>
			<div className="row mx-0">
				<div className="col-12 d-flex align-items-center justify-content-center project-content-wrap">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<p className="font-project mb-sm-1 mb-md-1 mb-lg-4 d-none d-md-block text-center">
									{" "}
									Some Things I've Built{" "}
								</p>
								<p className="font-project mb-sm-1 mb-md-1 mb-lg-4 d-block d-md-none">
									Some Things I've Built
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
								<Pim />
							</SwiperSlide>
							<SwiperSlide key={1}>
								<Oms />
							</SwiperSlide>
							<SwiperSlide key={2}>
								<Yom />
							</SwiperSlide>
							<SwiperSlide key={3}>
								<Mtransport />
							</SwiperSlide>
							<SwiperSlide key={4}>
								<Pettycash />
							</SwiperSlide>
							<SwiperSlide key={5}>
								<Puskim />
							</SwiperSlide>
							<SwiperSlide key={6}>
								<Iot />
							</SwiperSlide>
						</Swiper>

						<div className="row">
							<div className="col-12 d-flex align-items-center justify-content-center">
								<div id="pagination-project">
									<button
										onClick={() => moveSlide(0)}
										className={
											activeIndex === 0 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(1)}
										className={
											activeIndex === 1 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(2)}
										className={
											activeIndex === 2 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(3)}
										className={
											activeIndex === 3 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(4)}
										className={
											activeIndex === 4 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(5)}
										className={
											activeIndex === 5 ? "button-page active" : "button-page"
										}
									></button>
									<button
										onClick={() => moveSlide(6)}
										className={
											activeIndex === 6 ? "button-page active" : "button-page"
										}
									></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Motion>
	);
}

export default Project;
