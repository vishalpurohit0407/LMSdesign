import React from 'react';
import { IMAGES } from "../../../constant/theme";
import PageTitle from "../../../layouts/PageTitle";

const SearchCategoryBanner  = () => {
	return (
	<>
		<div className='search-banner'>
			<div className='container'>
                <div className='row'>
					<div className='col-md-12'>
						<h2>Global search</h2>
						<PageTitle activeMenu="Search" motherMenu="Home" />
					</div>
				</div>
			</div>
		</div>
	</>
	);
};
export default SearchCategoryBanner;
