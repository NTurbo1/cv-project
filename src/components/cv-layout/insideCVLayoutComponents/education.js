import { EducationInfoDisplayDiv } from './educationInfoDisplay';

import '../../../styles/cv-layout-styles/inside-cv-layout-styles/education-style.css';

const React = require('react');

class Education extends React.Component {

    render() {
        return (
            <div className='education-div'>
                <div className='education-header-and-line-div'>
                    <span className='education-header'>EDUCATION</span>
                    <div className='under-education-header-line'></div>
                </div>
                <div className='education-instances-div'>
                    <EducationInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        degreeTitle = 'Degree Title'
                        universityName = 'University Name'
                    />

                    <EducationInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        degreeTitle = 'Degree Title'
                        universityName = 'University Name'
                    />

                    <EducationInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        degreeTitle = 'Degree Title'
                        universityName = 'University Name'
                    />
                </div>
            </div>
        )
    }
}

export {
    Education
}