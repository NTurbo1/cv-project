const React = require('react');

class EducationInfoDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            degreeInputs: []
        }
    }

    newDegreeDiv(newDegreeInputId) {
        return (
            <div className='input-div'>
                <label htmlFor={newDegreeInputId}>Degree</label>
                <input id={newDegreeInputId} className='education-info-input' typeof='text'/>
            </div>
        );
    }

    render() {
        return (
            <div className='info-div' id='education-info-div'>
                <div className='info-title-div'>
                    <h1 className='info-title'>Education</h1>
                </div>

                <form id='education-info-form' className='info-form'>

                </form>

                <div className='new-input-btn-div'>
                    <button className='new-input-btn' id='new-degree-btn'>Add</button>
                </div>

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