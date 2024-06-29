import React, { Fragment, useState } from "react";
//import Multistep from "react-multistep";
import { Stepper, Step } from 'react-form-stepper';

import LangInfo from '../../web_components/add-course/LanguageInformation';
import BasicInfo from '../../web_components/add-course/BasicInformation';
import CourseMedia from '../../web_components/add-course/CourseMedia';
import CourseMediaStep from '../../web_components/add-course/CourseMediaSteps';
import Assessment from '../../web_components/add-course/Assessment';
import Settings from '../../web_components/add-course/Settings';
import AddSuccess from '../../web_components/add-course/AddedSuccesfully';

const Wizard = () => {
	const [goSteps, setGoSteps] = useState(0);
	const handleNext = () => {
		if (goSteps < 5) {
		  setGoSteps(prev => prev + 1);
		} else {
		  setGoSteps(6); // Manually set the state to 6 for the AddSuccess component
		}
	  };

	const handlePrev = () => {
		if (goSteps > 0) {
			setGoSteps(prev => prev - 1);
		}
	};
	return (
		<Fragment>
			<div className='add-course'>
				<div className="container">
					<h2 className='title'>Add New <span>Course</span></h2>
					<div className="steps-card">
						<div className="form-wizard p-0 m-0">
							<Stepper className="nav-wizard" activeStep={goSteps}>
								<Step className="nav-link" onClick={() => setGoSteps(0)} data-title="Language Information" />
								<Step className="nav-link" onClick={() => setGoSteps(1)} data-title="Basic Information" />
								<Step className="nav-link" onClick={() => setGoSteps(2)} data-title="Courses Media" />
								<Step className="nav-link" onClick={() => setGoSteps(3)} data-title="Curriculum" />
								<Step className="nav-link" onClick={() => setGoSteps(4)} data-title="Assessment" />
								<Step className="nav-link" onClick={() => setGoSteps(5)} data-title="Settings" />
							</Stepper>
						</div>
						<div>
							{goSteps === 0 && <LangInfo />}
							{goSteps === 1 && <BasicInfo />}
							{goSteps === 2 && <CourseMedia />}
							{goSteps === 3 && <CourseMediaStep />}
							{goSteps === 4 && <Assessment />}
							{goSteps === 5 && <Settings />}
							{goSteps === 6 && <AddSuccess />}
						</div>
					</div>
					<div style={{ marginTop: 50 }} className="d-flex align-items-center justify-content-between">
						<button 
							className="theme-btn red-theme-btn btn10" 
							onClick={handlePrev} 
							disabled={goSteps === 0}
						>
							<span>Previous</span>
						</button>
						<button 
							className="theme-btn btn10" 
							onClick={handleNext} 
							disabled={goSteps === 6}
						>
							<span>Next</span>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Wizard;
