import React from "react";
import { useSelector } from "react-redux";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper";
import ReactTooltip from 'react-tooltip';

import pp from "../../../resources/images";

import "swiper/css/mousewheel";
import "swiper/css/free-mode";
import "./style.css";

function Home() {
	const familiars = useSelector((state) => state.swiper_generate.data);

	return (
		<div className="row row-no-margin swiper-slide">
			<div className="col-12 home-content-wrap">
				<div className="container">
					<div className="row xs-hidden">
						<div className="col-12 col-md-4 ps-0 ps-sm-3 ps-lg-5">
							<div className="px-3 px-sm-0 home-greeting-div">
								<div>
									<p className="font-greeting">Hello I'm</p>
									<p className="font-name">I KETUT ADI</p>
									<p className="font-description">
										a Full Stack Developer located in Indonesia. I build anything from mobile to web app.
										<br /><br />
										4 years of experience in web development. Feel free to talk to me okay.
									</p>
								</div>
							</div>
							<div className="mb-4">
								<div className="home-medsos-div">
									<button data-tip data-for='email' className="btn btn-default icon-medsos">
										<i className="icon-medsos-pos"> <FaRegEnvelope /> </i>
									</button>
									<button data-tip data-for='wa' className="btn btn-default icon-medsos mx-3">
										<i className="icon-medsos-pos"> <BsWhatsapp /> </i>
									</button>
									<button  data-tip data-for='ig' className="btn btn-default icon-medsos">
										<i className="icon-medsos-pos"> <BsInstagram /> </i>
									</button>
								</div>

								<ReactTooltip className="tooltip-inner" id="email" place="top" type="light" effect="solid">
									<span>anodimous.dev@gmail.com</span>
								</ReactTooltip>
								<ReactTooltip className="tooltip-inner" id="wa" place="top" type="light" effect="solid">
									<span>+6281224164852</span>
								</ReactTooltip>
								<ReactTooltip className="tooltip-inner" id="ig" place="top" type="light" effect="solid">
									<span>wicaksana_adi</span>
								</ReactTooltip>
							</div>
						</div>
						<div className="col-md-4">
							<div className="home-pp-div">
								<img alt="profile" className="img-fluid pp" src={pp} />
							</div>
						</div>
						<div className="mt-3 mt-sm-3 mt-md-0 col-md-4">
							<div className="ps-lg-5 home-skill-div">
								<div className="home-familiar-container">
									<div className="home-familiar-div">
										<div className="ribbon ribbon-top-right"><span>Familiar</span></div>
										<div className="swiper-familiar">
											<div className="swiper-wrapper">
												<Swiper
													modules={[Mousewheel, FreeMode]}
													mousewheel={{
														enabled: true,
														invert: false,
														releaseOnEdges: true,
														sensitivity: 0.1,
														thresholdDelta: 1,
														thresholdTime: 1
													}}
													direction="vertical"
													freeMode={true}
													grabCursor={true}
													autoHeight={false}
													slidesPerView="4"
													speed={1000}
												>
													{familiars.map((familiar, index) => {
														return (
															<SwiperSlide key={index}>
																<div className="home-skill-wrap">
																	<div className="mx-1 my-1 p-2 home-skill-logo">
																		<img alt={familiar.title} className="img-fluid"
																			src={familiar.image} />
																	</div>
																	<div className="me-1 my-1 ps-2 py-1 home-skill-desc">
																		<p className="font-skill-title"> {familiar.title} </p>
																		<p className="font-skill-desc"> {familiar.desc} </p>
																	</div>
																</div>
															</SwiperSlide>
														)
													})}
												</Swiper>
											</div>

										</div>
									</div>
								</div>
								<div className="home-inspired-div">
									<p className="py-1 font-inspired">Design Inspired by : Irvan Moses</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Home;
