import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../../constant/theme";


const MyDashboard =({classChange}) =>{
	return(
		<>
			<div className="dashboard-count">
				<div className="row">
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-profile-user-icon"></i>
							</span>
							<div>
								<label>Total Students</label>
								<h5 className="mb-0">15</h5>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-pie-chart-icon"></i>
							</span>
							<div>
								<label>Total Courses</label>
								<h5 className="mb-0">01</h5>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-saving-icon"></i>
							</span>
							<div>
								<label>Total Earnings</label>
								<h5 className="mb-0">$460</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};
export default MyDashboard;
