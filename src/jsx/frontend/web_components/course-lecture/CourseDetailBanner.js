import React from 'react';
import { IMAGES } from "../../../constant/theme";
import PageTitle from "../../../layouts/PageTitle";

const CourseBanner  = () => {
	return (
	<>
		<div className='search-banner'>
			<div className='container'>
                <div className='row'>
					<div className='col-md-12'>
						<h2>Courses Name</h2>
						<PageTitle activeMenu="Category" motherMenu="Home" />
					</div>
				</div>
			</div>
		</div>
	</>
	);
};
export default CourseBanner;
