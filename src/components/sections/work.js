import './../../App.scss';
import { useState } from 'react';
import './work.scss';
import dummy1 from './../../img/dummy-image1.png';

function Work() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    const handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    return (
        <div className="container">
            <div className="big-spacer"></div>
            <h2 className="section-title">Works</h2>
            <div className="spacer"></div>
            <div className="content">
                <div className="image-frame">
                    <img src={dummy1} className="image" style={{ width: "100%" }} />
                    <div class="middle">
                        <h2>이커머스 웹사이트 개발</h2>
                        <div>HTML, CSS, JQuery</div>
                        <div class="text"><button>더 보기</button></div>
                    </div>
                </div>
                <div className="image-frame">
                    <img src={dummy1} className="image" style={{ width: "100%" }} />
                    <div class="middle">
                        <div class="text">더 보기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;