import React from 'react';

const BasicInformation  = () => {
	return (
	<>
		<div className='course-content'>
			<h3>Language Information</h3>
			<form>
				<div className='form-group'>
					<label>Course Title</label>
					<input type='text' placeholder='Course Title' className='form-control' />
				</div>
				<div className='form-group'>
					<label>Course Category</label>
					<select className='form-control'>
						<option selected>Select Course Category</option>
						<option>Course Category 1</option>
						<option>Course Category 2</option>
					</select>
				</div>
				<div className='form-group'>
					<label>Course Level</label>
					<select className='form-control'>
						<option selected>Select Course Level</option>
						<option>Course Level 1</option>
						<option>Course Level 2</option>
					</select>
				</div>
				<div className='form-group'>
					<label>Course Description</label>
					<textarea className='form-control' placeholder='Type Here' rows={6}></textarea>
				</div>
			</form>
		</div>
	</>
	);
};
export default BasicInformation;
