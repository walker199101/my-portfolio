import './App.scss';
import Intro from './components/sections/intro';
import Experience from './components/sections/experience';
import Skill from './components/sections/skill';
import Contact from './components/sections/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faScrewdriverWrench, faMessage } from '@fortawesome/free-solid-svg-icons';
import Scrollspy from 'react-scrollspy';

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <span>Portfolio</span><span>by GWK</span>
          </div>
          <ul className="nav-shortcuts">
            <Scrollspy className="scrollspy" items={['section-1', 'section-2', 'section-3', 'section-4']} 
            currentClassName="isCurrent"
            >
            <li>
              <a href="#section-1">
                <span className="nav-icons"><FontAwesomeIcon icon={faHome} /></span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#section-2">
                <span className="nav-icons"><FontAwesomeIcon icon={faBriefcase} /></span>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#section-3">
                <span className="nav-icons"><FontAwesomeIcon icon={faScrewdriverWrench} /></span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#section-4">
                <span className="nav-icons"><FontAwesomeIcon icon={faMessage} /></span>
                <span>Contact</span>
              </a>
            </li>
            </Scrollspy>
          </ul>
          <div className="nav-footer">
            <span>© 2022 React Project</span>
          </div>
        </div>
      </div>
      <main>
        <div id="section-1" className="section section-intro">
          <div className="section-container">
            <Intro />
          </div>
        </div>
        <div id="section-2" className="section">
          <div className="section-container">
            <Experience />
          </div>
        </div>
        <div id="section-3" className="section">
          <div className="section-container">
            <Skill />
          </div>
        </div>
        <div id="section-4" className="section">
          <div className="section-container">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// develop history
// create-react-app 으로 프로젝트 만들기
// clone할 페이지 뼈대 만들기 (html 위주로)
// react fontawesome 추가 (https://fontawesome.com/v5/docs/web/use-with/react)
// typewriter-effect 추가 (https://github.com/kevoese/react-typewriter-effect)
// 헤더 만들기
// multiple section 만들기
// react-scrollspy 추가 (https://makotot.github.io/react-scrollspy/)