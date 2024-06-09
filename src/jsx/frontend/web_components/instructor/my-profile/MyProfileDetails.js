import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../../constant/theme";


const ProfileDetails =({classChange}) =>{
	return(
		<>
			<div className="my-profile">
				<h4>Personal Information</h4>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>User Name</label>
							<p>Ronald</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Email</label>
							<p>ronald@yurmail.com</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Father’s Name</label>
							<p>Father’s Name</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Mother’s Name</label>
							<p>Mother’s Name</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Mobile Number</label>
							<p>98765 43210</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Date of Birth</label>
							<p>DD/MM/YYYY</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Gender</label>
							<p>Male</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Uploaded ID</label>
							<p>ID Number</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Current Address</label>
							<p>70 Washington Square South, New York, NY 10012, United States</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Permanent Address</label>
							<p>70 Washington Square South, New York, NY 10012, United States</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};
export default ProfileDetails;
