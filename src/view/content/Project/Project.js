import React from "react";

import "./style.css";

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
						<div className="project-container">
							<div className="swiper-project">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="container-project">
											<div className="project-image">
												<div className="project-image-desc">
													<h5 className="my-4">
														Order Management System</h5>
													<p className="px-3">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit.
													</p>
													<img alt="project" className="img-fluid p-4"
														src="https://res.cloudinary.com/practicaldev/image/fetch/s--v3FSHDWI--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7rp44fig74u7dlgezrd4.png" />
												</div>
											</div>
											<div className="project-content">
												<div className="project-content-desc">
													<p className="font-featured-project">Featured project</p>
													<h3 className="font-featured-project-name">Order Management System</h3>
													<div className="project-information p-3">
														<p className="font-information mb-0">An order management system (OMS) 
														is a digital way to manage the lifecycle of an order. 
														It tracks all the information and processes, 
														including order entry, inventory management, 
														fulfillment and after-sales service.</p>
													</div>
												</div>
												<div className="pt-4 project-tech">
													<span className="px-2">PHP</span>
													<span className="px-2">PostgreSQL</span>
													<span className="px-2">Laravel</span>
													<span className="px-2">API</span>
													<span className="px-2">Magento</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Project;
