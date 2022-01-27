import './Intro.css';
import Me from "/home/jonah/code/jonahanderson.me/src/img/profile.png"
import { SocialIcon } from 'react-social-icons';


function Intro() {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-greeting">Hello, my name is</h2>
                <h1 className="intro-name">Jonah Anderson</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">Product Manager</div>
                        <div className="intro-title-item">Software Developer</div>
                        <div className="intro-title-item">Cofounder</div>
                        <div className="intro-title-item">Product Manager</div>

                    </div>
                </div>
                <div className="intro-desc">
                    I build, design, and code within the Washington D.C. metropolitan area. 
                    Feel free to take a look at some of my personal projects. 
                    If you like what you see, contact me and we can build something
                    together. 
                </div>
                <div className="intro-icons">
                    <div className="intro-icons-item"> <SocialIcon url="https://www.linkedin.com/in/jonah-anderson-105b44191/"/></div>
                    <div className="intro-icons-item"> <SocialIcon url="https://github.com/jonahanderson"/></div>
                    <div className="intro-icons-item"> <SocialIcon url="mailto:jonahmanderson10@gmail.com"/></div>
                </div>
            </div>
        </div>
    
        <div className="intro-right">
            <div className="intro-bg"></div>
            <img src={Me} alt="" className="intro-img" />
        </div>


    </div>
  );
}

export default Intro;