import { CVLayout } from './cv-layout';

const React = require('react');

class CVLayoutDiv extends React.Component {

    render() {
        return (
            <div className='cv-layout-div'>
                <CVLayout />
            </div>
        )
    }
}

export {
    CVLayoutDiv
}