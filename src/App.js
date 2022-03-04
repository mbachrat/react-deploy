
import './App.css';




function App() {
  return (

    
<div className='web'>
  <div className='top'>
      <p className='mb'>mb</p>
      <div className='emailtop'>
       <p>call me (647) 781 7041 / bachraty.m@gmail.com</p>
       <a href="mailto:bachraty.m@gmail.com"><img className='email' href="mailto:bachraty.m@gmail.com" src={require('./pics/email.png')} width={50} height={50}/>
      </a> 
      </div>
  </div>
  <div className='body'>
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

       
        <a href='https://www.instagram.com/'>
          <img className='logo' src={require('./pics/instagram.png')} />
        </a>
        <a href='https://ca.linkedin.com/'>
          <img className='logo' src={require('./pics/linkedIn.png')} />
        </a>
       
        
        <a href='https://www.youtube.com/'>
          <img className='logo-one' src={require('./pics/youtube.png')} />
        </a>
        <a href='https://github.com/'>
          <img className='logo-two' src={require('./pics/GitHub.png')} />
        </a>
        
     </div>
  </div>
  </div>
  );
}
// @media only screen and (max-width: 600px) 
export default App;
