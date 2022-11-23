import React from "react";

import "./style.css";

function Work() {
	return (<div className="row row-no-margin swiper-slide">
		<div className="col-12 work-content-wrap">
			{/* LARGE DEVICE */}
			<div className="container d-none d-md-block">
				<div className="row">
					<div className="col-12">
						<p className="font-title-work mb-font-title-work text-center"> Where I've Worked </p>
					</div>
				</div>
				<div className="row">
					<div className="d-flex align-items-start">
						<div className="nav flex-column nav-pills company-list-div" id="v-pills-tab" role="tablist"
							aria-orientation="vertical">
							<button className="btn btn-default font-company-list" id="v-pills-home-tab" data-bs-toggle="pill"
								data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
								aria-selected="true">PT. Akur Pratama</button>
						</div>
						<div className="tab-content" id="v-pills-tabContent">
							<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
								aria-labelledby="v-pills-home-tab">
								<p className="font-job-title mb-sm-1 mb-lg-3">Software Developer <br />
									<font className="font-job-range">October 2018 - December 2020 (Yogya Online Department)
									</font>
								</p>

								<div>
									<ul className="ps-2 ps-lg-4">
										<li className="font-job-desc">
											Developed and maintained code for internal and external company apps,
											primarly using HTML, CSS, JavaScript, jQuery, Laravel, PostgreSQL, Bootstrap,
											and Patternfly.
										</li>
										<li className="font-job-desc">
											Manually tested internal and external apps in various browsers and mobile
											devices
											to ensure compatibility and responsiveness.
										</li>
										<li className="font-job-desc">
											Add features to product information management, that changing the conventional
											way
											to the modern way.
										</li>
										<li className="font-job-desc">
											Created order management system, that used by department to manage consumer
											orders
											from entering to the hands of consumers.
										</li>
									</ul>
								</div>

								<p className="font-job-title mb-sm-1 mb-lg-3">
									&nbsp;
									<font className="font-job-range mb-0-point-5">January 2021 - October 2021 (IT Solution &
										Innovation)
									</font>
								</p>

								<div>
									<ul className="ps-2 ps-lg-4">
										<li className="font-job-desc">
											Collaborated with multivendor to develop mobile app called Yogya Online Mobile.
											I'm on the backend, using sails.js, redis and creating a content management
											system.
										</li>
										<li className="font-job-desc">
											Be a leader for student interns.
										</li>
									</ul>
								</div>

								<p className="font-job-title mb-sm-1 mb-lg-3">
									&nbsp;
									<font className="font-job-range">October 2021 - Present (App Research & Development)
									</font>
								</p>

								<div>
									<ul className="ps-2 ps-lg-4">
										<li className="font-job-desc">
											Collaborated with teams to develop mobile app called mTransport - decentralized
											delivery from dc to customer. I'm on the frontend, using react native.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* SMALL DEVICE */}
			<div className="container d-sm-block d-md-none">
				<div className="row">
					<div className="col-12">
						<p className="font-title-work mb-font-title-work"> Where I've Worked </p>
					</div>
				</div>
				<div className="row">
					<div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="btn btn-default font-company-list" id="pills-home-tab" data-bs-toggle="pill"
								data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
								aria-selected="true">PT. Akur Pratama</button>
						</li>
					</div>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-home" role="tabpanel"
							aria-labelledby="pills-home-tab">
							<p className="font-job-title mb-sm-1 mb-lg-3">Software Developer <br />
								<font className="font-job-range">October 2018 - December 2020 (Yogya Online Department)
								</font>
							</p>

							<div>
								<ul className="ps-2 ps-lg-4">
									<li className="font-job-desc">
										Developed and maintained code for internal and external company apps,
										primarly using HTML, CSS, JavaScript, jQuery, Laravel, PostgreSQL, Bootstrap,
										and Patternfly.
									</li>
									<li className="font-job-desc">
										Manually tested internal and external apps in various browsers and mobile
										devices
										to ensure compatibility and responsiveness.
									</li>
									<li className="font-job-desc">
										Add features to product information management, that changing the conventional
										way
										to the modern way.
									</li>
									<li className="font-job-desc">
										Created order management system, that used by department to manage consumer
										orders
										from entering to the hands of consumers.
									</li>
								</ul>
							</div>

							<p className="font-job-title mb-sm-1 mb-lg-3">
								<font className="font-job-range mb-0-point-5">January 2021 - October 2021 (IT Solution &
									Innovation)
								</font>
							</p>

							<div>
								<ul className="ps-2 ps-lg-4">
									<li className="font-job-desc">
										Collaborated with multivendor to develop mobile app called Yogya Online Mobile.
										I'm on the backend, using sails.js, redis and creating a content management
										system.
									</li>
									<li className="font-job-desc">
										Be a leader for student interns.
									</li>
								</ul>
							</div>

							<p className="font-job-title mb-sm-1 mb-lg-3">
								<font className="font-job-range">October 2021 - Present (App Research & Development)
								</font>
							</p>

							<div>
								<ul className="ps-2 ps-lg-4">
									<li className="font-job-desc">
										Collaborated with teams to develop mobile app called mTransport - decentralized
										delivery from dc to customer. I'm on the frontend, using react native.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>);
}

export default Work;
