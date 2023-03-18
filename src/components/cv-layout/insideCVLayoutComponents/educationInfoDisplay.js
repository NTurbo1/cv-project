import React from "react";

import '../../../styles/cv-layout-styles/inside-cv-layout-styles/educationInfoDisplay-style.css';

class EducationInfoDisplayDiv extends React.Component {

    render() {

        return (
            <div className="education-info-display-div">
                <div className="education-main-info">
                    <span className="education-duration-div">
                        {this.props.startDate} - {this.props.endDate}
                    </span>
                    <span className="degree-title">
                        {this.props.degreeTitle}    
                    </span>
                    <span className="university-name">
                        {this.props.universityName}
                    </span>
                </div>
            </div>
        )
    }
}

export {
    EducationInfoDisplayDiv
}