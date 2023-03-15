import { EducationInfoDiv } from './eductionInfoDiv';
import { PersonalInfoDiv } from './personalInfoDiv';
import { WorkExperienceDiv } from './workExperienceDiv';

const React = require('react');

class InformationGatheringDiv extends React.Component {

    render() {
        return (
            <div className='info-gathering-div'>
                <PersonalInfoDiv />
                <EducationInfoDiv />
                <WorkExperienceDiv />
            </div>
        )
    }
}

export {
    InformationGatheringDiv
}