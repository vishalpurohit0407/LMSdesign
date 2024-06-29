import React from 'react';

const Settings  = () => {
	return (
	<>
		<div className='course-content'>
			<h3 className='mb-4'>Settings</h3>
			<div className='filled-question settings'>
				<form>
					<div className='form-group'>
						<label>Tag</label>
						<input type='text' placeholder='Questions' className='form-control' />
					</div>
					<div className='form-group'>
						<label>Price</label>
						<input type='number' placeholder='Price' className='form-control' />
					</div>
				</form>
			</div>
		</div>
	</>
	);
};
export default Settings;
