import React,{useState} from 'react'
import axios from "axios"
import Navbar from "../components/navbar/navbar"
import Fade from "react-reveal"
const sentimentAnalysis = () => {
  const [resData,setResData] = useState()
  const [isLoading,setIsLoading] = useState(false)
const handleSubmit = (e)=>{
e.preventDefault()


async function makePostRequest() {
    const encodedParams = new URLSearchParams();
    encodedParams.set('text', e.target.elements.text.value);
  
    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/headline',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b61cc4d1abmsha3d5138bdb19adcp1f1c14jsn2be057e19bfc',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      data: encodedParams,
    };
  
    try {
        setIsLoading(true)
      const response = await axios.request(options);
      setResData(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }
  makePostRequest()
}
  return (
    <>
     <Navbar/>
 
    <Fade>
    <div style={{marginTop:"200px"}}>
       
        <h1 style={{textAlign:"center"}}>Text to headline</h1>
        <p style={{textAlign:"center",padding:"20px"}}>Enter text or paragraph in text area that you want to convert to headline</p>
<form  style={{display:"flex",flexDirection:"column",gap:"50px",alignItems:"center",justifyContent:"center",alignContent:"center"}} onSubmit={handleSubmit}>
       
       <textarea
          rows="6" cols="30"
         defaultValue="Enter your paragraph here"
         name="text"
         style={{textDecoration:"none",borderRadius:"10px",border:"3px solid #1A2C5B"}}
       />

       <button type="submit" style={{border:"none",padding:"20px",cursor:"pointer",backgroundColor:"#004781",color:"#fff",borderRadius:"10px"}} >
         Generate !
       </button>
       {resData&&<div>
       <span>Headline:<p style={{color:"green"}}>{" "+resData?.headline}</p></span>
       
      </div>}
       {isLoading&&<p>Loading...</p>}
     </form>
    </div>
    </Fade>
    </>
  )
}

export default sentimentAnalysis