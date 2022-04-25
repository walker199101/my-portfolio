import './../../App.scss';
import './experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    return (
        <div className="container">
            <div className="big-spacer"></div>
            <h2 className="section-title">Experience</h2>
            <div className="spacer"></div>
            <div className="content">
                <div className="academy">
                    <div className="list-block">
                        <div className="date">2009 ~ 2016</div>
                        <h3><span className="timeline-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>경영정보학 전공 <span className="at-icon"><FontAwesomeIcon icon={faAt} />동국대학교</span></h3>
                    </div>
                    <div className="list-block">
                        <div className="date">2016 ~ 2017</div>
                        <h3><span className="timeline-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>웹개발자 교육 과정 이수 <span className="at-icon"><FontAwesomeIcon icon={faAt} />글로벌인</span></h3>
                        <p>JAVA, JavaScript, HTML, CSS 스킬 학습</p>
                    </div>
                    <span className="line"></span>
                </div>
                <div className="career">
                    <div className="list-block">
                        <div className="date">2017 ~ 2019 (2년)</div>
                        <h3><span className="timeline-icon"><FontAwesomeIcon icon={faBriefcase} /></span>프론트엔드 개발자 <span className="at-icon"><FontAwesomeIcon icon={faAt} />KeyPort Solutions</span></h3>
                        <p>미쓰비시 UFJ 증권 구좌 개설 모바일 페이지 개발 (VueJs)</p>
                        <p>E-커머스 웹사이트 Organic Story 개발 (CSS, HTML)</p>
                        <p>모바일 페이지용 하이브리드 어플리케이션 개발 (VueJs, Cordova)</p>
                    </div>
                    <div className="list-block">
                        <div className="date">2019 ~ 2021 (1년 10개월)</div>
                        <h3><span className="timeline-icon"><FontAwesomeIcon icon={faBriefcase} /></span>프론트엔드 개발자 <span className="at-icon"><FontAwesomeIcon icon={faAt} />씨에스이</span></h3>
                        <p>NTT 데이터센터 모니터링 웹사이트 화면단 개발 (React)</p>
                        <p>모바일용 웹페이지 화면 개발 및 UI 개선 작업 (React)</p>
                    </div>
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
}

export default Experience;