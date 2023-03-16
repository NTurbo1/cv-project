const React = require('react');

class PersonalInfoDiv extends React.Component {

    render() {
        return (
            <div className='info-div' id='personal-info-div'>
                <div className='info-title-div'>
                    <h1 className='info-title'>Personal Info</h1>
                </div>

                <form id='personal-info-form' className='info-form'>
                    <div className='firstName-input-div input-div'>
                        <label htmlFor='firstName'>First Name</label>
                        <input id='firstName' className='personal-info-input' typeof='text'/>
                    </div>

                    <div className='lastName-input-div input-div'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input id='lastName' className='personal-info-input' typeof='text'/>
                    </div>

                    <div className='phone-input-div input-div'>
                        <label htmlFor='phone'>Phone number</label>
                        <input id='phone' className='personal-info-input' typeof='number'/>
                    </div>

                    <div className='email-input-div input-div'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' className='personal-info-input' typeof='email'/>
                    </div>
                </form>

                <div className='form-btn-div' form='personal-info-form'>
                        <button className='form-btn' typeof='submit'>Save</button>
                </div>
            </div>
        )
    }
}

export {
    PersonalInfoDiv
}