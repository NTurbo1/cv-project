const React = require('react');

class WorkExperienceInfoDiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workExperiences: ['work-1'],
            buttons: []
        }

        this.addWorkExperience = this.addWorkExperience.bind(this);
    }

    newWorkExperienceDiv(workExperienceInputId) {
        return (
            <div className='work-experience-input-div input-div'>
                <label htmlFor={workExperienceInputId}>Work Experience</label>
                <input id={workExperienceInputId} className='info-input' typeof='text'/>
            </div>
        );
    }

    addWorkExperience() {
        let id = 'work-' + this.state.workExperiences.length;
        this.setState({workExperiences: this.state.workExperiences.concat([id])});
    }

    render() {
        return (
            <div className='info-div' id='work-experience-info-div'>
                <div className='info-title-div'>
                    <h1 className='info-title'>Work Experience</h1>
                </div>

                <form id='work-experience-form' className='info-form'>
                    {this.state.workExperiences.map(workId => {
                        return this.newWorkExperienceDiv(workId);
                    })}
                </form>

                <div className='new-input-btn-div' onClick={this.addWorkExperience}>
                    <button className='new-input-btn' id='new-work-experience-btn'>Add</button>
                </div>

                <div className='form-btn-div' form='work-experience-form'>
                        <button className='form-btn' typeof='submit'>Save</button>
                </div>
            </div>
        )
    }
}

export {
    WorkExperienceInfoDiv
}