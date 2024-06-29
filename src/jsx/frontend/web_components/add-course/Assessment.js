import React from 'react';

const Assessment  = () => {
	return (
	<>
		<div className='course-content'>
			<h3 className='mb-4'>Assessment</h3>
			<ul className='d-flex align-items-center'>
				<li>
					<label class="custom-radio">None
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
				<li>
					<label class="custom-radio">With Google
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
				<li>
					<label class="custom-radio">With From
						<input type="radio"  name="radio" />
						<span class="rdochkmark"></span>
					</label>
				</li>
			</ul>

			{/*  Question Section */}
			<div className='filled-question'>
				<div className='question-card'>
					<div className='question-header'><h4>How to print a variable?</h4></div>
					<div className='question-body'>
						<ul>
							<li>
								<label class="common-chkbox">Echo
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
							</li>
							<li>
								<label class="common-chkbox">Die
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
							</li>
							<li>
								<label class="common-chkbox">Scanf
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
							</li>
							<li>
								<label class="common-chkbox">For
									<input type="checkbox" />
									<span class="chkmark"></span>
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* End Question Section */}

			{/* Add Question */}
			<div className='filled-question add-new-question'>
				<form>
					<div className='row'>
						<div className='col-md-8'>
							<div className='question-type'>
								<div className='form-group'>
									<label>Type Questions</label>
									<input type='text' placeholder='Questions' className='form-control' />
								</div>
							</div>

							<div className='form-group'>
								<label>Type Answers</label>
								<input type='text' placeholder='Answers 1' className='form-control mb-3' />
								<input type='text' placeholder='Answers 2' className='form-control mb-3' />
								<input type='text' placeholder='Answers 3' className='form-control mb-3' />
								<input type='text' placeholder='Answers 4' className='form-control mb-3' />
							</div>
						</div>
						<div className='col-md-4 pt-2'>
							<select className='form-control mt-4'>
								<option selected>-- Select Option --</option>
								<option>Option 1</option>
								<option>Option 2</option>
							</select>
						</div>
					</div>

					<button type='submit' className='theme-btn red-theme-btn btn10'><span>Submit</span></button>
				</form>
			</div>
			{/* End Add Question */}
			<div className='text-end'>
				<button className='theme-btn btn10'><span>Add Section</span></button>
			</div>
		</div>
	</>
	);
};
export default Assessment;
