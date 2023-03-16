import { DynamicInfoDiv } from './dynamicInfoDiv';

class EducationInfoDiv extends DynamicInfoDiv {
    constructor(props) {
        super(props);
        this.state = {
            degrees: [],
            buttonId: 'new-degree-input-btn',
            inputFieldRendered: false
        }
    }

    renderCurrentBtn() {
        if (this.state.buttonId === 'new-degree-input-btn') {
            return (
                <div className='new-input-btn-div'>
                    <button className='new-input-btn' 
                        id={this.state.buttonId}
                        onClick={e => {
                            this.setState({buttonId:'save-new-degree-input-btn', 
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
                        const input = document.getElementById('degree-input');
                        const inputText = input.value;
                        if (inputText.length > 0) {
                            const id = 'degree-' + this.state.degrees.length;
                            this.setState({ degrees: this.state.degrees
                                                        .concat([{id: id, description: inputText}]), 
                                            buttonId:'new-degree-input-btn', 
                                            inputFieldRendered: false });
                        }
                    }}>
                    Add
                </button>
            </div>
        );
    }

    render() { /* Inherited method*/
        return (
            <div className='info-div'>
                {this.infoTitleDiv('Education') /* Inherited method*/}

                <div className="saved-inputs-div">
                    {this.state.degrees.map(degree => {
                            return (
                                <div className="saved-input-div" key = {degree.id}>
                                    <h3 className="saved-input-description">
                                        {degree.description}
                                    </h3>
                                </div>
                            );
                    })}
                </div>

                <form id='education-info-form' className='info-form'>
                    {this.state.inputFieldRendered 
                        ? this.newInputDiv('degree-input', 'Degree') /* Inherited method*/
                        : <div></div>}
                </form>

                {this.renderCurrentBtn()}

                {this.formSubmitBtn('education-info-form') /* Inherited method*/}
            </div>
        )
    }
}

export {
    EducationInfoDiv
}