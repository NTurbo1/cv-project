const React = require('react');

class WorkExperienceDiv extends React.Component {

    render() {
        return (
            <div className='work-experience-div'>
                <div className='info-title-div'>
                    <h1 className='info-title'>Work Experience</h1>
                </div>

                <form id='work-experience-form' className='info-form'>
                    <div className='work1-input-div input-div'>
                        <label htmlFor='highestDegree'>The highest degree</label>
                        <input id='highestDegree' className='education-info-input' typeof='text'/>
                    </div>
                </form>

                <div className='form-btn-div' form='work-experience-form'>
                        <button className='form-btn' typeof='submit'>Save</button>
                </div>
            </div>
        )
    }
}

export {
    WorkExperienceDiv
}