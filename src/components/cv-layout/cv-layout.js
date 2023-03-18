import { NamePositionPhoto } from './insideCVLayoutComponents/namePositionPhoto';
import { Profile } from './insideCVLayoutComponents/profile';
import { Contacts } from './insideCVLayoutComponents/contacts';
import { Skills } from './insideCVLayoutComponents/skills';
import { WorkExperience } from './insideCVLayoutComponents/workExperience';
import { Education } from './insideCVLayoutComponents/education';

const React = require('react');

class CVLayout extends React.Component {

    render() {
        return (
            <div className='cv-layout'>
                <div className='left-side-of-cv-layout'>
                    <NamePositionPhoto 
                        firstName = 'FIRSTNAME'
                        lastName = 'LASTNAME'
                        position = 'POSITION'
                    />
                    <Contacts />
                    <Skills />
                </div>
                <div className='right-side-of-cv-layout'>
                    <Profile />
                    <WorkExperience />
                    <Education />
                </div>
            </div>
        )
    }
}

export {
    CVLayout
}