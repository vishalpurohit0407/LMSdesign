import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../../constant/theme";


const ProfileForm =({classChange}) =>{
	return(
		<>
			<div className="my-profile edit-profile">
				<h4>Personal Information</h4>
				<p className="mb-4 pb-2">Edit Your Personal Information and Address.</p>
				<form>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>User Name</label>
								<input type="text" placeholder="Enter Your User Name" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Email</label>
								<input type="email" placeholder="Enter Your Email" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Father’s Name</label>
								<input type="text" placeholder="Enter Your Father’s Name" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Mother’s Name</label>
								<input type="text" placeholder="Enter Your Mother’s Name" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Mobile Number</label>
								<input type="number" placeholder="Enter Your Mobile Number" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Date of Birth</label>
								<input type="date" placeholder="DD/MM/YYYY" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Gender</label>
								<ul className="d-flex align-items-center gap-3">
									<li>
										<label class="custom-radio mb-0">Male
											<input type="radio" checked="checked" name="radio" />
											<span class="rdochkmark"></span>
										</label>
									</li>
									<li>
										<label class="custom-radio mb-0">Female
											<input type="radio" name="radio" />
											<span class="rdochkmark"></span>
										</label>
									</li>
									<li>
										<label class="custom-radio mb-0">Other
											<input type="radio" name="radio" />
											<span class="rdochkmark"></span>
										</label>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Uploaded ID</label>
								<div className="f-input">
									<input id="uploadFile" class="form-control" />
									<div class="fileUpload btn btn--browse">
										<span>Upload File</span>
										<input id="uploadBtn" type="file" class="upload" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Current Address</label>
								<textarea  placeholder="Enter Current Address" className="form-control" rows={4}></textarea>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Permanent Address</label>
								<textarea  placeholder="Enter Permanent Address" className="form-control" rows={4}></textarea>
							</div>
						</div>
					</div>
					<div className="text-end">
						<button type="submit" className="theme-btn red-theme-btn btn10">
							<span>Update Profile</span>
							<div class="transition"></div>
						</button>
					</div>
				</form>
			</div>
		</>
	)
};
export default ProfileForm;
