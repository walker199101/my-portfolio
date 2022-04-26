import './../../App.scss';
import { useState } from 'react';
import './work.scss';
import osApp1 from './../../img/os-app1.png';
import mufjApp from './../../img/mufj-app.png';
import NexcenterApp1 from './../../img/nexcenter1.png';

function Work() {
    // TODO:react-modal 추가
    // const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => {
    //     this.setState({ showModal: true });
    // }

    // const handleCloseModal = () => {
    //     this.setState({ showModal: false });
    // }

    return (
        <div className="container">
            <div className="big-spacer"></div>
            <h2 className="section-title">Works</h2>
            <div className="spacer"></div>
            {/* TODO: content 영역 height 문제 수정 */}
            <div className="content">
                <div className="image-frame">
                    <img src={NexcenterApp1} className="image" style={{ width: "100%" }} />
                    <div class="middle">
                        <h2 className="project-name">Nexcenter (NTT 데이터센터 고객용 웹사이트 개발 프로젝트)</h2>
                        <p className="project-role">React 웹사이트 및 모바일 UI 개발 및 UI/UX 개선 업무</p>
                        <div className="skill-list">
                            <span className="skill">HTML5</span>
                            <span className="skill">CSS3</span>
                            <span className="skill">ReactJS</span>
                        </div>
                        <button className="more-btn"><div class="btn-text">더 보기</div></button>
                    </div>
                </div>
                <div className="image-frame">
                    <img src={osApp1} className="image" style={{ width: "100%" }} />
                    <div class="middle">
                        <h2 className="project-name">Organic Story (쇼핑몰 웹 및 하이브리드 어플 개발)</h2>
                        <p className="project-role">퍼블리싱 및 하이브리드 어플리케이션 개발</p>
                        <div className="skill-list">
                            <span className="skill">HTML5</span>
                            <span className="skill">CSS3</span>
                            <span className="skill">VueJS</span>
                        </div>
                        <button className="more-btn"><div class="btn-text">더 보기</div></button>
                    </div>
                </div>
                <div className="image-frame">
                    <img src={mufjApp} className="image" 
                    style={{ width: "100%", position: "absolute", left: 0, top: "20%" }} 
                    />
                    <div class="middle">
                        <h2 className="project-name">미쓰비시UFJ증권 (구좌 개설 어플 개발 프로젝트)</h2>
                        <p className="project-role">VueJS 모바일용 UI 개발</p>
                        <div className="skill-list">
                            <span className="skill">HTML5</span>
                            <span className="skill">CSS3</span>
                            <span className="skill">VueJS</span>
                        </div>
                        <button className="more-btn"><div class="btn-text">더 보기</div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;