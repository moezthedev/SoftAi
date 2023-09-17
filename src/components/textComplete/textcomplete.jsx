import React from 'react'
import Text from "../../assets/textcomplete.svg"
import { useNavigate } from 'react-router-dom'
import "../description/description.css"
import { useEffect } from 'react';
import aos from "aos"
import "aos/dist/aos.css"
const description = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/textcompletion")
    }
    useEffect(()=>{
      aos.init({duration:3000})
      
      },[])
  return (
    <>

    <div data-aos="fade" style={{borderTop:"2px solid #56539C",borderBottom:"2px solid #56539C",borderWidth:"10px",paddingBottom:"20px",display:"flex",width:"100vw",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2 style={{textAlign:"center"}}>Text Completion</h2>
<img className="img"  src={Text}/>
<p style={{textAlign:"justify",padding:"40px",marginTop:"20px"}}>Our web app introduces a game-changing Text Completion feature, designed to supercharge your writing. Seamlessly complete sentences and paragraphs with AI-powered suggestions, enhancing your content's quality and efficiency.
</p>
<button style={{border:"none",padding:"20px",cursor:"pointer",backgroundColor:"#004781",color:"#fff",borderRadius:"10px"}} onClick={handleClick}>Check it out</button>
    </div>
    
    </>
  )
}

export default description