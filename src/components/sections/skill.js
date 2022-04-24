import './../../App.scss';
import './skill.scss';
import jqueryIcon from './../../img/jquery-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

function Skill() {
    return (
        <div className="container">
            <div className="big-spacer"></div>
            <h2 className="section-title">Skills</h2>
            <div className="spacer"></div>
            <div className="content">
                <div className="language">
                    <div className="list-block">
                        <div className="skill-javascript">
                            <span className="skill-icon"><FontAwesomeIcon icon={faJsSquare} /></span>
                            <span className="skill-name">JavaScript</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar javascript"></div>
                        </div>
                    </div>
                    <div className="list-block">
                        <div className="skill-html">
                            <span className="skill-icon"><FontAwesomeIcon icon={faHtml5} /></span>
                            <span className="skill-name">HTML5</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar html"></div>
                        </div>
                    </div>
                    <div className="list-block">
                        <div className="skill-css">
                            <span className="skill-icon"><FontAwesomeIcon icon={faCss3Alt} /></span>
                            <span className="skill-name">CSS3</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar css"></div>
                        </div>
                    </div>
                </div>
                <div className="framework">
                    <div className="list-block">
                        <div className="skill-react">
                            <span className="skill-icon"><FontAwesomeIcon icon={faReact} /></span>
                            <span className="skill-name">React</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar react"></div>
                        </div>
                    </div>
                    <div className="list-block">
                        <div className="skill-vuejs">
                            <span className="skill-icon"><FontAwesomeIcon icon={faVuejs} /></span>
                            <span className="skill-name">VueJS</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar vuejs"></div>
                        </div>
                    </div>
                    <div className="list-block">
                        <div className="skill-jquery">
                            <span className="skill-icon"><img src={jqueryIcon}></img></span>
                            <span className="skill-name">JQuery</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar jquery"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;