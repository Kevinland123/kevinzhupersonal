import React from 'react'
import { name, mainBlock, subMainBlock, logos } from '../css/style.module.css'
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Main = () => {
  return (
    <div className={mainBlock}>

      <div className={subMainBlock}>
        {/* my name */}
        <h1 className={name}>Kevin Zhu</h1>

        {/* the images */}
        <div className={logos}>
          {/* LinkedIn */}
          <a href='https://www.linkedin.com/in/zhukevin2001/'>
            <img alt='LinkedIn' src={linkedin} width="40" height="40" />
          </a>

          {/* Email */}
          <a href='mailto:zhukevin@umich.edu'>
            <img alt='Email' src={email} width="40" height="40" />
          </a>

          {/* GitHub */}
          <a href='https://github.com/Kevinland123'>
            <img alt='GitHub' src={github} width="40" height="40" />
          </a>
        </div>
      
      </div>
    </div>
  );
};

export default Main;