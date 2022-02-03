import React from "react";
import './Experience.css';
import Resume from "../../img/Anderson-Resume-1.png";
import Button from 'react-bootstrap/Button';
import pdf from '../../files/Anderson-Resume.pdf'


function Experience() {
  
  return (
      <div className="experience">
          <h1 className="title">Experience</h1>

          <div className="r-container">
            <img src={Resume} alt="" className="resume" />
          </div>

          <div className="btgroup">

            <Button href={pdf} target="_blank" className="bt1" type="button" class="btn">Resume PDF</Button>
          </div>

      </div>
    );
  }
  
  export default Experience;

