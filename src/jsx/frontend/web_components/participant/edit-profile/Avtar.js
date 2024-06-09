import React,{useState} from "react";
import { IMAGES, SVGICON } from "../../../../constant/theme";
import { Link } from "react-router-dom";


const AvtarImg =({classChange}) =>{
	return(
		<>
			<div className="avtar-section">
				<div className="profile-details d-inline-flex align-items-center">
					<span className="profile-icon">
						<img src={IMAGES.ProfileImg} alt="Profile Img" className="img-fluid" />
					</span>
					<div className="profile-desc">
						<h4>Select Your Avtar</h4>
						<p>Supported formats: JPEG, JPG, PNG <br/>
						No bigger than 800px wide and tall.</p>
					</div>
				</div>
				<ul className="action-btn d-flex align-items-center">
					<li><Link to={'#'}><i className="najahna-download-icon"></i></Link></li>
					<li><Link to={'#'}><i className="najahna-delete-icon"></i></Link></li>
				</ul>
			</div>
		</>
	)
};
export default AvtarImg;
