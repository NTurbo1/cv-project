import '../../../styles/cv-layout-styles/inside-cv-layout-styles/contacts-style.css';
import phoneIcon from '../../../phone-icon.png';
import emailIcon from '../../../email-icon.png';

const React = require('react');

class Contacts extends React.Component {

    render() {
        return (
            <div className='contacts-div'>
                <div className='contacts-header-div'>
                    <h3 className='contacts-header'>CONTACTS</h3>         
                    <div className='under-contacts-header-line'></div>
                </div>
                <div className='contacts-display-div'>
                    <div className='phone-display'>
                        <img className='phone-icon' src={phoneIcon} alt = '#'/>
                        <span className='phone-text'>+7 XXX XXX XX XX</span>
                    </div>
                    <div className='email-display'>
                        <img className='email-icon' src={emailIcon} alt = '#'/>
                        <span className='email-text'>person@domain.com</span>
                    </div>
                </div>       
            </div>
        )
    }
}

export {
    Contacts
}