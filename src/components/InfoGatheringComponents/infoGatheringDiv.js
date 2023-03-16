import { EducationInfoDiv } from './educationInfoDiv';
import { PersonalInfoDiv } from './personalInfoDiv';
import { WorkExperienceInfoDiv } from './workExperienceInfoDiv';

const React = require('react');

class InformationGatheringDiv extends React.Component {

    render() {
        return (
            <div className='info-gathering-div'>
                <PersonalInfoDiv />
                <EducationInfoDiv />
                <WorkExperienceInfoDiv />
            </div>
        )
    }
}

export {
    InformationGatheringDiv
}