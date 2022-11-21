import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// stylesheet
import "swiper/css";

// component
import Home from "./Home/Home";
import Work from "./Work/Work";
import Project from "./Project/Project";
import About from "./About/About";

function Main() {
	const swiperMainRef = useRef(null);

	return (
		<Swiper
			ref={swiperMainRef}
			allowTouchMove={false}
			scrollbar={{ draggable: true }}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<Home />
			</SwiperSlide>
			<SwiperSlide>
				<Work />
			</SwiperSlide>
			<SwiperSlide>
				<Project />
			</SwiperSlide>
			<SwiperSlide>
				<About />
			</SwiperSlide>
		</Swiper>
	);
}

export default Main;
