import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import LangInfo from '../../web_components/add-course/LanguageInformation';
import BasicInfo from '../../web_components/add-course/BasicInformation';
import CourseMedia from '../../web_components/add-course/CourseMedia';
import CourseMediaStep from '../../web_components/add-course/CourseMediaSteps';
import Assessment from '../../web_components/add-course/Assessment';
import Settings from '../../web_components/add-course/Settings';
import AddSuccess from '../../web_components/add-course/AddedSuccesfully';
import Wizar from '../../web_components/add-course/Wizard';
import Stepper from 'react-stepper-horizontal';

const MyStepper  = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const steps = [
		{ title: 'Language Information' },
		{ title: 'Basic Information' },
		{ title: 'Courses Media' },
		{ title: 'Curriculum' },
		{ title: 'Assessment' },
		{ title: 'Settings' },
	  ];
	
	  const renderStepContent = (step) => {
		switch (step) {
		  	case 0:
				return <LangInfo/>;
		  	case 1:
				return <BasicInfo/>;
		  	case 2:
				return <CourseMedia />;
		  	case 3:
				return <CourseMediaStep />;
			case 4:
				return <Assessment />;
			case 5:
				return <Settings />;
		  default:
			return <AddSuccess />;
		}
	  };
	  const renderStepIcon = (index) => {
		if (index < currentStep) {
		  return <FontAwesomeIcon icon={faCheck} />;
		}
		return index + 1;
	  };
	  return (
		<div className='add-course'>
			<div className='container'>
				<h2 className='title'>Add New <span>Course</span></h2>
				<div className='steps-card'>
					<Stepper
						steps={steps.map((step, index) => ({
							title: step.title,
							onClick: () => setCurrentStep(index),
							
						}))}
						activeStep={currentStep}
						activeColor="#008FCC"
						completeColor="#008FCC"
						completeTitleColor="#008FCC"
						activeTitleColor="#008FCC"
						circleFontSize={16}
						size={40}
						circleTop={0}
						renderStep={(step, index) => (
							<div
							key={index}
							className={`stepper-icon ${index < currentStep ? 'finish' : ''}`}
							>
							{renderStepIcon(index)}
							</div>
						)}
					/>
					<div className="`stepper-icon">
						{steps.map((step, index) => (
						<div
							key={index}
							className={`stepper-icon ${index <= currentStep ? 'finish' : ''}`}
						>
							
							{index < currentStep ? (
							<FontAwesomeIcon icon={faCheck} />
							) : (
							index + 1
							)}
						</div>
						))}
					</div>
					<div style={{ marginTop: 20 }}>
						{renderStepContent(currentStep)}
					</div>
				</div>
				<div style={{ marginTop: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<button className='theme-btn btn10 prev'
					onClick={() => setCurrentStep(currentStep - 1)}
					disabled={currentStep === 0}
					>
					<span>Previous</span>
					</button>
					<button className='theme-btn btn10 next'
					onClick={() => setCurrentStep(currentStep + 1)}
					disabled={currentStep === steps.length - 1}
					>
					<span>Continue</span>
					</button>
				</div>
			</div>
		</div>
	  );
	};
export default MyStepper;
