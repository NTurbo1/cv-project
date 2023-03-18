import React from "react";

import '../../../styles/cv-layout-styles/inside-cv-layout-styles/workInfoDisplay-style.css';

class WorkInfoDisplayDiv extends React.Component {

    render() {

        return (
            <div className="work-info-display-div">
                <div className="jobs-main-info">
                    <span className="job-duration-div">
                        {this.props.startDate} - {this.props.endDate}
                    </span>
                    <span className="job-title">
                        {this.props.jobTitle}    
                    </span>
                    <span className="company-name">
                        {this.props.companyName}
                    </span>
                </div>

                <span className="jobs-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, eos!
                    Dignissimos, doloremque corporis ratione ab vero eligendi.
                </span>
            </div>
        )
    }
}

export {
    WorkInfoDisplayDiv
}