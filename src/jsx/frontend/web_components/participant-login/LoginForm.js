import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { IMAGES, SVGICON } from "../../../constant/theme";


const ParticipantLogin =({classChange}) =>{
	const [showForm1, setShowForm1] = useState(true);

		const toggleForms = () => {
			setShowForm1(!showForm1);
		};
	return(
		<>
			<section className="participant-login">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7">
							<div className="login-desc">
								<img src={IMAGES.LoginGraphics} alt="Graphics" className="img-fluid" />
								<h2>Welcome to LMS</h2>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="col-md-5">
							<div className="login-frm">
								<div class="switches-container">
									<input
										type="radio"
										id="switchMonthly"
										name="switchPlan"
										value="Monthly"
										onChange={toggleForms}
										checked={showForm1}
									/>
									<input
										type="radio"
										id="switchYearly"
										name="switchPlan"
										value="Yearly"
										onChange={toggleForms}
										checked={!showForm1}
									/>
									<label for="switchMonthly">Monthly</label>
									<label for="switchYearly">Yearly</label>
									<div class="switch-wrapper">
										<div class="switch">
											<div>Monthly</div>
											<div>Yearly</div>
										</div>
									</div>
								</div>
								
								{showForm1 ? (
								<form className="form1">
									<h2 className="title">Participant <span>Login</span></h2>
									<div className="form-group">
										<label>User Name</label>
										<input type="text" name="user-name" placeholder="Enter your User Name" className="form-control" />
									</div>
									<div className="form-group">
										<label>Password</label>
										<input type="password" name="password" placeholder="Enter your Password" className="form-control" />
									</div>
									<div className="d-flex align-items-center">
									
									</div>
									<button type="submit" className="">Login</button>
								</form>
								) : (
								<form className="form2">
									<h2 className="title">Participant <span>Register</span></h2>
									<label>
										Username:
										<input type="text" name="username" />
									</label>
									<br />
									<label>
										Password:
										<input type="password" name="password" />
									</label>
									<br />
									<button type="submit">Login</button>
								</form>
								)}
								</div>
							</div>
					</div>
					
				</div>
			</section>
		</>
	)
};
export default ParticipantLogin;
