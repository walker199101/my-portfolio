import './../../App.scss';
import './intro.scss';
import TypeWriterEffect from 'react-typewriter-effect';

function Intro() {
    return (
    <div className="intro">
        <div className="code-block">
            <h3 style={{ paddingLeft: "30px" }}>{'<body>'}</h3>
            <h3 style={{ paddingLeft: "60px" }}>{`<div class="introduction">`}</h3>
            <h3 style={{ paddingLeft: "90px" }}>{`<div>`}</h3>
        </div>
        <div className="intro-typed">
            <div className="typewriter-space">
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Red Hat Display' }}
                    startDelay={100}
                    cursorColor="white"
                    hideCursorAfterText="true"
                    multiText={["안녕하세요"]}
                    typeSpeed={100}
                />
            </div>
            <div className="typewriter-space">
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Red Hat Display' }}
                    startDelay={2100}
                    cursorColor="white"
                    hideCursorAfterText="true"
                    multiText={["프론트 엔드 개발자 "]}
                    typeSpeed={100}
                />
            </div>  
            <div className="typewriter-space">
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Red Hat Display' }}
                    startDelay={5100}
                    cursorColor="white"
                    multiText={["김고운입니다"]}
                    typeSpeed={100}
                />
            </div>
        </div>
        <div className="code-block">
            <h3 style={{ paddingLeft: "90px" }}>{`</div>`}</h3>
            <h3 style={{ paddingLeft: "60px" }}>{`</div>`}</h3>
            <h3 style={{ paddingLeft: "30px" }}>{'<body>'}</h3>
        </div>
        <div className="btn-area">
            <a className="contact-btn" href="#section-4">Contact me</a>
        </div>
    </div>
    )
}

export default Intro;