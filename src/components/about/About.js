import './About.css';
import Me2 from "../../img/aboutprofile.jpg"
import greekrho from "../../img/greekrho.png"


function About() {
  return (
    <div className='about' id="about">
        <div className="about-backgr"></div>
        <div className="about-left">
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
                In my free time, I enjoy working on my personal projects. One of my favorites is Greekrho (click below),
                an early stage startup I cofounded. Lately, I have been interested
                in cloud infrastructure, blockchain tech, and blockchain programming languages.
            </p>

            <div className="greekrho">
                <div className="greekrho-browser">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <a href="https://www.greek-rho.com/#/" target="_blank" rel="noreferrer">
                    <img src={greekrho} alt="" className="g-img"/>
                </a>
            </div>
        </div>

        {/* <div className="whisper-wrapper">
            <div className="whisper">Check out this website's code on GitHub: </div>
            <div className="about-icon"> <SocialIcon url="https://github.com/jonahanderson/jonahanderson.me" style={{ height: 30, width: 30 }}/></div>

        </div> */}
    </div>
  );
}

export default About;
