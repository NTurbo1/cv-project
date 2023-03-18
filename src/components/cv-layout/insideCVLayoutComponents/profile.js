import '../../../styles/cv-layout-styles/inside-cv-layout-styles/profile-style.css';

const React = require('react');

class Profile extends React.Component {

    render() {
        return (
            <div className='profile-div'>
                <div className='profile-header-and-line-div'>
                    <span className='profile-header'>PROFILE</span>
                    <div className='under-profile-header-line'></div>
                </div>
                <div className='profile-text-div'>
                    <p className='profile-text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, eos!
                        Dignissimos, doloremque corporis ratione ab vero eligendi consequuntur ducimus magnam.
                        Impedit dolorum velit error aspernatur magni. Ullam rem exercitationem dolor?
                    </p>
                </div>
            </div>
        )
    }
}

export {
    Profile
}