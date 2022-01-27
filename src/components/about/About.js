import './About.css';
import Me2 from "/home/jonah/code/jonahanderson.me/src/img/aboutprofile.jpg"
import { SocialIcon } from 'react-social-icons';


function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-backgr"></div>
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={Me2} alt="" className='about-img'/>
             </div>
        </div>

        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className='about-sub'>
                Building the product...
            </p>
            <p className='about-desc'>
                I'm a Product Manager at a customer experience SaaS company living in Arlington, VA.
                Prioritizing new features, driving roadmap, and gathering customer requirements are
                some of my favorite aspects of my job.
                <br></br><br></br>
                I graduated from the University of Virginia in 2020 majoring in Computer Science.
                In my free time, I enjoy working on my personal projects. One of my favorites is Greekrho,
                an early stage startup I cofounded. Lately, I have been interested
                in React, blockchain tech, and blockchain programming languages.
            </p>
        </div>

        <div className="whisper-wrapper">
            <div className="whisper">Check out this website's code on GitHub: </div>
            <div className="about-icon"> <SocialIcon url="https://github.com/jonahanderson/jonahanderson.me" style={{ height: 30, width: 30 }}/></div>

        </div>
    </div>
  );
}

export default About;
