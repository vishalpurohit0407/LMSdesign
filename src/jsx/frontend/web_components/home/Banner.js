import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { IMAGES, SVGICON } from "../../../constant/theme";


const HomeBanner =({classChange}) =>{
	return(
		<>
			<section className="hero">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="main-hero-image">
								
								{/* Graphics Image */}
								<div className="hero-img">
									<label className="circl-img-one circl-img">
										<img src={IMAGES.JapanFlag} alt="JapanFlag" className="img-fluid" />
									</label>
									<label className="circl-img-two circl-img">
										<img src={IMAGES.ChinaFlag} alt="ChinaFlag" className="img-fluid" />
									</label>
									<div className="main-img-animation">
										<div className="img-animation">
											<img src={IMAGES.Banner} alt="banner" className="img-fluid" />
										</div>
									</div>
									<div className="tutors-online text-center">
										<i className="najahna-tutors-icon"></i>
										<label className="mb-2">200+ Tutors Online</label>
										<ul className="d-inline-flex align-items-center">
											<li><img src={IMAGES.TutorsImg1} alt="TutorsImg1" className="img-fluid" /></li>
											<li><img src={IMAGES.TutorsImg2} alt="TutorsImg2" className="img-fluid" /></li>
											<li><img src={IMAGES.TutorsImg3} alt="TutorsImg3" className="img-fluid" /></li>
											<li><img src={IMAGES.TutorsImg3} alt="TutorsImg4" className="img-fluid" /></li>
											<li><span>3+</span></li>
										</ul>
									</div>
									<label className="circl-img-three circl-img">
										<img src={IMAGES.ItalyFlag} alt="ItalyFlag" className="img-fluid" />
									</label>
								</div>
								{/* Graphics Image */}
								
							</div>
						</div>
						<div className="col-md-6">
							<h1>Empowering Minds, <br className="d-md-block d-none"/>Inspiring Futures</h1>
							<p>Welcome to a world of learning without limits. Our platform offers you the flexibility to learn at your own pace, 
								on your schedule, and from anywhere in the world.
							</p>
							<button className="theme-btn btn10">
								<span>Try Free Lessons</span>
								<div class="transition"></div>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default HomeBanner;
