import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { IMAGES, SVGICON } from "../../../constant/theme";


const HowItWorks =({classChange}) =>{
	return(
		<>
			<section className="how-it-work">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<h2 className="title">Here’s how it <span>works</span></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras 
								accumsan integer suscipit. Libero accumsan eget aliquet.
							</p>

							<div className="workflow">
								<div className="workflow-steps">
									<span><i className="najahna-user-icon"></i></span>
									<div className="workflow-content">
										<h5>Find a tutor</h5>
										<p className="mb-0">Choose your teacher from over 10,000 qualified language tutors.</p>
									</div>
								</div>
								<div className="workflow-steps">
									<span><i className="najahna-calendar-icon"></i></span>
									<div className="workflow-content">
										<h5>Book a lesson</h5>
										<p className="mb-0">Select a lesson time and add it to their calendar.</p>
									</div>
								</div>
								<div className="workflow-steps">
									<span><i className="najahna-learning-icon"></i></span>
									<div className="workflow-content">
										<h5>Start learning</h5>
										<p className="mb-0">Simple as that, you’re learning a language.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="workflow-process">
								<label className="mb-0 circl-img-one circl-img"><i className="najahna-document-icon"></i></label>
								<label className="mb-0 circl-img-two circl-img"><img src={IMAGES.ItalyFlag} alt="ItalyFlag" className="img-fluid" /></label>
								<div className="tutors-online text-center text-center">
									<i className="najahna-heart-icon"></i>
									<label className="mb-0">1850+</label>
									<span>Lessons</span>
								</div>
								<div className="workflow-img">
									<img src={IMAGES.WorksGraphics} alt="banner" className="img-fluid" />
								</div>
								<label className="mb-0 circl-img-four circl-img"><i className="najahna-shield-done-icon"></i></label>
								<label className="mb-0 circl-img-five circl-img"><img src={IMAGES.ItalyFlag} alt="ItalyFlag" className="img-fluid" /></label>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default HowItWorks;
