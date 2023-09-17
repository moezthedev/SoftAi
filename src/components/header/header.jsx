import React,{useEffect} from 'react';
import HeaderImg from "../../assets/header-img.jpg"
import "./header.css"
import aos from "aos"
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";
const Header = () => {
  useEffect(()=>{
    aos.init({duration:2000})
    
    },[])
    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate("/app")
    }
  return (
    <header className='header' style={styles.header} data-aos="fade-top">
      <div className="header-container" >
        <div style={styles.leftContent} >
          <h1 className='heading'>Unlocking Creativity with Multi-Generator using <span style={{color:"#004781"}}>AI</span></h1>
          <p style={{fontSize:"1.5rem"}}>	<span style={{color:"#004781",fontSize:"2rem"}}>&#8220;</span>By harnessing the collective powers of 
          various AI generators, this approach empowers creators and artists 
          to traverse beyond the boundaries of their individual imagination.<span style={{color:"#004781",fontSize:"2rem"}}>&#8221;</span> </p>
        <button onClick={handleClick} style={{cursor:"pointer",color:"#fff",backgroundColor:"#004781",border:"none",padding:"20px",borderRadius:"10px"}}>Get Started</button>
        </div>
        <div style={styles.rightContent}>
          <img src={HeaderImg} alt="Header Image" style={styles.image} />
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
   
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:"150px",
    gap:"10px"

  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    xs:{flexDirection:"column"},
    gap:"20px"
  },
  leftContent: {
    flex: 1,
   
  },
  rightContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection:"column"
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
   
  },
};

export default Header;
