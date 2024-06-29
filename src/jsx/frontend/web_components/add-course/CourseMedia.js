import React from 'react';
import { IMAGES } from "../../../constant/theme";
import {Link} from 'react-router-dom';

const CourseMedia  = () => {
	return (
	<>
		<div className='course-content'>
			<h3 className='mb-4'>Course Media</h3>
			<div className='row'>
				<div className='col-md-6 pe-md-4'>
					<div class="drag-image upload-card">
						<div class="icon"><img src={IMAGES.UploadIcon.default} alt=''/></div>
						<h4>Drag & drop files or <Link to={'/'}>Browse</Link><br/> Course Cover image</h4>
						<p>Supported formats: JPEG, JPG, PNG, GIF, PDF</p>
						<input type="file" />
					</div>
					<button className='theme-btn red-theme-btn btn10 w-100'><span>Upload Files</span></button>
				</div>
				<div className='col-md-6 ps-md-4'>
					<div class="drag-image upload-card">
						<div class="icon"><img src={IMAGES.UploadIcon.default} alt=''/></div>
						<h4>Drag & drop files or <Link to={'/'}>Browse</Link><br/> Course Cover Video</h4>
						<p>Supported formats: AVI, WMV, AVCHD, MP4, MOV</p>
						<input type="file" />
					</div>
					<button className='theme-btn red-theme-btn btn10 w-100'><span>Upload Files</span></button>
				</div>
			</div>
		</div>
	</>
	);
};
export default CourseMedia;
