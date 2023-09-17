import React,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
    const d = new Date();
let year = d.getFullYear();
const handleClick = ()=>{
  navigate("https://www.linkedin.com/in/moezdev/")
}
  return (
    <footer style={styles.footer} >
        
      <p>&copy; {year} Soft Ai. All rights reserved. Made with ❤️ by <a target="_blank" href="https://www.linkedin.com/in/moezdev/" style={{cursor:"pointer",color:"#fff",textDecoration:"none"}} >Moez</a></p>
     
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1A2C5B',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    marginTop:"150px",
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
