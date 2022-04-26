
import './App.css';
import React, {useState} from 'react';
import { Switch } from 'antd';
import SvgComponent from './components/email';
import mySvg from './pics/emailThree.svg'
import white from './pics/emailTwo.svg'

function App() {

  const [toggle, setToggle] =useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (

    
<body className={toggle ? "darkBack" : "lightBack"}>
<div className='web'>
  <div className='top'>
      <p className='mb'>mb</p>
      <Switch onClick={toggler} />
      {toggle ? <span>Light</span> : <span>Dark</span>}





      <div className='emailtop'>
       <p> not available / bachraty.m@gmail.com</p>
       <a href="mailto:bachraty.m@gmail.com"><img className='email' href="mailto:bachraty.m@gmail.com" src={toggle ? mySvg : white} width={30} height={30}/>
      </a> 
      </div>
  </div>
  <div className='bodys'>
    <div className='header'>
     <div className='text'>
       
         <p>
      My name is
         </p>
         <p className='name'>
      Matthew
      </p>
         <p className='last'>
           Bachraty
         </p>
        <p className='desc'> UX/UI DESIGNER /  FRONT END DEVELOPER / MECHANICAL ENGINEER / VIDEOGRAPHER / CHESS LOVER</p>
        </div>
        <img className='pp' src={require('./pics/pp.jpeg')} />
        
       
        </div>
      
      <div className='links'>

       
        <a href='https://www.instagram.com/matthew_bachraty/' target="_blank">
          <img className='logo' src={require('./pics/instagram.png')} />
        </a>
        <a href='https://www.linkedin.com/in/mbachraty/' target="_blank">
          <img className='logo' src={require('./pics/linkedIn.png')} />
        </a>
       
        
        <a href='https://www.youtube.com/channel/UC936fgViO-ok_4RBH2yLDHQ/featured' target="_blank">
          <img className='logo-one' src={require('./pics/youtube.png')} />
        </a>
        <a href='https://github.com/mbachrat' target="_blank">
          <img className='logo-two' src={require('./pics/GitHub.png')} />
        </a>
        
     </div>
  </div>
  </div>
  </body> 
  );
}
// @media only screen and (max-width: 600px) 


export default App;

