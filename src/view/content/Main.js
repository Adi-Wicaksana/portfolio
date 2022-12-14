import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// stylesheet
import "swiper/css";

// component
import Home from "./Home/Home";
import Work from "./Work/Work";
import Project from "./Project/Project";
import About from "./About/About";

function Main() {
	const swiperRef = useRef(null);
	const activeIndex = useSelector((state) => state.swiper_slide.index);

	useEffect(() => {
		swiperRef.current.swiper.slideTo(activeIndex);
	}, [activeIndex])

	return (
		<Swiper
			ref={swiperRef}
			allowTouchMove={false}
			scrollbar={{ draggable: true }}
			slidesPerView={1}
			speed={1000}
		>
			<SwiperSlide key={0}>
				<Home />
			</SwiperSlide>
			<SwiperSlide key={1}>
				<Work />
			</SwiperSlide>
			<SwiperSlide key={2}>
				<Project />
			</SwiperSlide>
			<SwiperSlide key={3}>
				<About />
			</SwiperSlide>
		</Swiper>
	);
}

export default Main;
