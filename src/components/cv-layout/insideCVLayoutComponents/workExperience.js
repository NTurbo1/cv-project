import { WorkInfoDisplayDiv } from './workInfoDisplay';

import '../../../styles/cv-layout-styles/inside-cv-layout-styles/workExperience-style.css';

const React = require('react');

class WorkExperience extends React.Component {

    render() {
        return (
            <div className='work-experience-div'>
                <div className='work-experience-header-and-line-div'>
                    <span className='work-experience-header'>WORK EXPERIENCE</span>
                    <div className='under-work-experience-header-line'></div>
                </div>
                <div className='work-experience-instances-div'>
                    <WorkInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        jobTitle = 'Job Title'
                        companyName = 'Company Name'
                    />

                    <WorkInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        jobTitle = 'Job Title'
                        companyName = 'Company Name'
                    />

                    <WorkInfoDisplayDiv 
                        startDate = 'XXXX'
                        endDate = 'XXXX'
                        jobTitle = 'Job Title'
                        companyName = 'Company Name'
                    />
                </div>
            </div>
        )
    }
}

export {
    WorkExperience
}