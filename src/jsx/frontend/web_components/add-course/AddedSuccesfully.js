import React from 'react';
import { IMAGES } from "../../../constant/theme";


const AddedSuccesfully  = () => {
	return (
	<>
		<div className='course-content'>
			<div className='added-succesfully'>
				<img src={IMAGES.ThumbUp.default} alt='' />
				<h3>The Course Added Succesfully</h3>
				<h5>Admin will be Approve soon.</h5>
			</div>
		</div>
	</>
	);
};
export default AddedSuccesfully;
