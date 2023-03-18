import '../../../styles/cv-layout-styles/inside-cv-layout-styles/skills-style.css';

const React = require('react');

class Skills extends React.Component {

    render() {
        return (
            <div className='skills-div'>
                <div className='skills-header-div'>
                    <h3 className='skills-header'>SKILLS</h3>         
                    <div className='under-skills-header-line'></div>
                </div>
                <ul className='skills-lists'>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                    <li>Skill 6</li>
                    <li>Skill 7</li>
                </ul>     
            </div>
        )
    }
}

export {
    Skills
}