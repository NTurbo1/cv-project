const React = require('react');

class EducationInfoDiv extends React.Component {

    render() {
        return (
            <div className='education-info-div'>
                <div className='info-title-div'>
                    <h1 className='info-title'>Education</h1>
                </div>

                <form id='education-info-form' className='info-form'>
                    <div className='highestDegree-input-div input-div'>
                        <label htmlFor='highestDegree'>Degree (highest)</label>
                        <input id='highestDegree' className='education-info-input' typeof='text'/>
                    </div>
                </form>

                <div className='form-btn-div' form='education-info-form'>
                        <button className='form-btn' typeof='submit'>Save</button>
                </div>
            </div>
        )
    }
}

export {
    EducationInfoDiv
}