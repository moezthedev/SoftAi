import React from 'react'
import Emotion from "../../assets/emotion.svg"
import { useNavigate } from 'react-router-dom'
import "./description.css"
import { useEffect } from 'react';
import aos from "aos"
import "aos/dist/aos.css"
const description = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/analysis")
    }
    useEffect(()=>{
      aos.init({duration:3000})
      
      },[])
  return (
    <>

    <div  data-aos="fade" style={{borderTop:"2px solid #56539C",borderBottom:"2px solid #56539C",borderWidth:"5px",paddingBottom:"20px",display:"flex",width:"100vw",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2 style={{textAlign:"center"}}>Sentimant Analysis using AI</h2>
<img className="img"  src={Emotion}/>
<p style={{textAlign:"justify",padding:"40px",marginTop:"20px"}}>Experience the power of sentiment analysis with our user-friendly web app. Input text or URLs, and our advanced AI algorithms will instantly analyze sentiment, providing valuable insights. Visualize sentiment trends, track sentiment changes over time, and make data-driven decisions. Transform text into actionable insights today.</p>
<button style={{border:"none",padding:"20px",cursor:"pointer",backgroundColor:"#004781",color:"#fff",borderRadius:"10px"}} onClick={handleClick}>Check it out</button>
    </div>
    
    </>
  )
}

export default description