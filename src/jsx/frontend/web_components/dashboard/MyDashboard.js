import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../constant/theme";


const MyDashboard =({classChange}) =>{
	return(
		<>
			<div className="dashboard-count">
				<div className="row">
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-saving-icon"></i>
							</span>
							<div>
								<label>Enrolled Courses</label>
								<h5 className="mb-0">06</h5>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-pie-chart-icon"></i>
							</span>
							<div>
								<label>Passed Assessment</label>
								<h5 className="mb-0">01</h5>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card align-items-center">
							<span className="d-inline-flex align-items-center justify-content-center">
								<i class="najahna-repeat-icon"></i>
							</span>
							<div>
								<label>Failed Assessment</label>
								<h5 className="mb-0">03</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};
export default MyDashboard;
