import React from 'react'
import Text from "../../assets/text.svg"
import { useNavigate } from 'react-router-dom'
import "../description/description.css"
import { useEffect } from 'react';
import aos from "aos"
import "aos/dist/aos.css"
const description = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/texttoheadline")
    }
    useEffect(()=>{
      aos.init({duration:3000})
      
      },[])
  return (
    <>

    <div data-aos="fade" style={{borderTop:"2px solid #56539C",borderBottom:"2px solid #56539C",borderWidth:"10px",paddingBottom:"20px",display:"flex",width:"100vw",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2 style={{textAlign:"center"}}>Text to Headline using AI</h2>
<img className="img"  src={Text}/>
<p style={{textAlign:"justify",padding:"40px",marginTop:"20px"}}>Transforming Ideas into Headlines: Text-to-Headline Feature in Our Web App
Our cutting-edge web app introduces a game-changing 
Text-to-Headline feature, revolutionizing content creation. Save time and boost engagement as you convert your ideas into captivating headlines that resonate with your audience. Stay ahead with this innovative feature.
</p>
<button style={{border:"none",padding:"20px",cursor:"pointer",backgroundColor:"#004781",color:"#fff",borderRadius:"10px"}} onClick={handleClick}>Check it out</button>
    </div>
    
    </>
  )
}

export default description