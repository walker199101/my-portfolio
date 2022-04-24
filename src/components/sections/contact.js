import './../../App.scss';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className="container">
            <div className="big-spacer"></div>
            <h2 className="section-title">Contact</h2>
            <div className="spacer"></div>
            <div className="content">
                {/* 명함 느낌으로 */}
                <div class="business-card">
                    <h2>김고운</h2>
                    <h3>Front-end Engineer</h3>
                    <div className="small-spacer"></div>
                    <h4><span class="card-icon"><FontAwesomeIcon icon={faPhone} /></span>010-7934-9852</h4>
                    <h4><span class="card-icon"><FontAwesomeIcon icon={faEnvelope} /></span>walker199101@gmail.com</h4>
                    <h4><span class="card-icon"><FontAwesomeIcon icon={faGithub} /></span>github.com/walker199101</h4>
                </div>
            </div>
        </div>
    );
}

export default Contact;