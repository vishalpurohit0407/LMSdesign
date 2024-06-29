import React from 'react';

const LanguageInformation  = () => {
	return (
	<>
		<div className='course-content'>
			<h3>Language Information</h3>
			<p>Please select your preferred language for course.</p>
			<ul className='d-flex align-items-center'>
				<li>
					<label class="custom-radio">عربي
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
				<li>
					<label class="custom-radio">English
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
				<li>
					<label class="custom-radio">Both
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
			</ul>
		</div>
	</>
	);
};
export default LanguageInformation;
