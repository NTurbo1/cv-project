import uniqid from 'uniqid';
import { DynamicInfoDiv } from "./dynamicInfoDiv";

import closeIcon from '../../close-icon.png';

class WorkExperienceInfoDiv extends DynamicInfoDiv {

    constructor(props) {
        super(props);
        this.state = {
            workExperiences: [],
            buttonId: 'new-work-input-btn',
            inputFieldRendered: false
        }
    }

    renderCurrentBtn() {
        if (this.state.buttonId === 'new-work-input-btn') {
            return (
                <div className='new-input-btn-div'>
                    <button className='new-input-btn' 
                        id={this.state.buttonId}
                        onClick={e => {
                            this.setState({buttonId:'save-new-work-input-btn', 
                                        inputFieldRendered: true});
                        }}>
                        +
                    </button>
                </div>
            );
        } 

        return (
            <div className="save-new-input-btn-div">
                <button className='save-new-input-btn' 
                    id={this.state.buttonId} 
                    onClick={e => {
                        const input = document.getElementById('work-experience-input');
                        const inputText = input.value;
                        if (inputText.length > 0) {
                            const id = uniqid();
                            this.setState({ workExperiences: this.state.workExperiences
                                                        .concat([{id: id, description: inputText}]), 
                                            buttonId:'new-work-input-btn', 
                                            inputFieldRendered: false });
                        }
                    }}>
                    Add
                </button>

                <button className='close-new-input-btn'
                    id = 'close-new-work-input-btn' 
                    onClick={e => {
                        this.setState(
                            {
                                buttonId:'new-work-input-btn', 
                                inputFieldRendered: false
                            }
                        );
                    }}
                >
                    Close
                </button>
            </div>
        );
    }

    removeWorkExperienceAt(index) { // Sets the state
        const workExperiencesList = this.state.workExperiences;
        workExperiencesList.splice(index, 1);
        this.setState(
            {
                workExperiences: workExperiencesList
            }
        )
    }

    render() { /* Inherited method*/
        return (
            <div className='info-div'>
                {this.infoTitleDiv('Work Experience') /* Inherited method*/}

                <div className="saved-inputs-div">
                    {this.state.workExperiences.map(work => {
                            return (
                                <div className="saved-input-div" 
                                    key = {work.id}
                                    id = {work.id}
                                >
                                    <h3 className="saved-input-description">
                                        {work.description}
                                    </h3>
                                    <div className="close-icon-div">
                                        <img
                                            src = {closeIcon}
                                            alt = "#"
                                            className="close-icon"
                                            onClick={e => {
                                                const closeIconDiv = e.target.parentElement;
                                                const savedInputDiv = closeIconDiv.parentElement;
                                                const workExperienceObject = this.state.workExperiences.find(
                                                    elem => elem.id === savedInputDiv.id
                                                );
                                                const workExperienceIndex = this.state.workExperiences.indexOf(workExperienceObject);
                                                this.removeWorkExperienceAt(workExperienceIndex);
                                            }}
                                        ></img>
                                    </div>
                                </div>
                            );
                    })}
                </div>

                <form id='work-experience-form' className='info-form'>
                    {this.state.inputFieldRendered 
                        ? this.newInputDiv('work-experience-input', 'Work Experience')  /* Inherited method*/
                        : <div></div>}
                </form>

                {this.renderCurrentBtn()}

                {this.formSubmitBtn('work-experience-form') /* Inherited method*/}
            </div>
        )
    }
}

export {
    WorkExperienceInfoDiv
}