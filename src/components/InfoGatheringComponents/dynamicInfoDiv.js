import React from "react";

class DynamicInfoDiv extends React.Component {

    infoTitleDiv(titleText) {
        return (
            <div className='info-title-div'>
                <h1 className='info-title'>{titleText}</h1>
            </div>
        )
    }

    newInputDiv(newInputId, newInputLabelText) {
        return (
            <div className='input-div'>
                <label htmlFor={newInputId}>{newInputLabelText}</label>
                <input id={newInputId} className='info-input' typeof='text'/>
            </div>
        );
    }

    formSubmitBtn(formId) {
        return (
            <div className='form-btn-div' form={formId}>
                    <button className='form-btn' typeof='submit'>Save</button>
            </div>
        )
    }

    render() {
        return (
            <div></div>
        )
    }
}

export {
    DynamicInfoDiv
}