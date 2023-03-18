import '../../../styles/cv-layout-styles/inside-cv-layout-styles/namePositionPhoto-style.css';
import cvPicturePlaceholder from '../../../cv-picture-placeholder.jpg';

const React = require('react');

class NamePositionPhoto extends React.Component {

    render() {
        return (
            <div className='name-position-photo-div'>
                <img id='cv-picture' alt="Applicant's face"
                    src={cvPicturePlaceholder}
                />

                <div className='name-position-div'>
                    <div className='fullName-div'>
                        <h1 className='first-name-header'>
                            {this.props.firstName}
                        </h1>

                        <h1 className='last-name-header'>
                            {this.props.lastName}
                        </h1>
                    </div>

                    <h2 className='position-header'>
                        {this.props.position}
                    </h2>
                </div>
            </div>
        )
    }
}

export {
    NamePositionPhoto
}