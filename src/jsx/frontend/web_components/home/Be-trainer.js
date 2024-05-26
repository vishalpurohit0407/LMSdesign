import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { IMAGES, SVGICON } from "../../../constant/theme";


const HowItWorks =({classChange}) =>{
	return(
		<>
			<section className="trainer">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="trainer-image">
								<img src={IMAGES.TrainerImg} alt="Girl Image" className="img-fluid" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="trainer-content">
								<h2 className="title">How to be <span>trainer</span></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
								<div className="trainer-steps">
									<div className="trainer-step">
										<span>1</span>
										<div className="trainer-desc">
											<h6>Register As Trainer</h6>
											<ul>
												<li><p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing amet</p></li>
											</ul>
										</div>
									</div>
									<div className="trainer-step">
										<span>2</span>
										<div className="trainer-desc">
											<h6>Admin verify your details</h6>
											<ul>
												<li><p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing amet</p></li>
											</ul>
										</div>
									</div>
									<div className="trainer-step">
										<span>3</span>
										<div className="trainer-desc">
											<h6>After Verification  You can login</h6>
											<ul>
												<li><p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing amet</p></li>
											</ul>
										</div>
									</div>
									<div className="trainer-step">
										<span>4</span>
										<div className="trainer-desc">
											<h6>Start adding Training</h6>
											<ul>
												<li><p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing amet</p></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default HowItWorks;
