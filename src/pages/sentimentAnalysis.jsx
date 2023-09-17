import React,{useState} from 'react'
import axios from "axios"
import TextField from '@mui/material/TextField'
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
      url: 'https://open-ai21.p.rapidapi.com/sentiment',
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
    <Fade >
    <div style={{marginTop:"200px"}}>
        
        
        <h1 style={{textAlign:"center"}}>Sentiment Analysis</h1>
        <p style={{textAlign:"center",padding:"20px"}}>Just enter text you want to analyse</p>
        <form  style={{display:"flex",flexDirection:"column",gap:"50px",alignItems:"center",justifyContent:"center",alignContent:"center"}} onSubmit={handleSubmit}>
       
       <TextField
         required
         id="outlined"
         label="Text Area"
         defaultValue="hey you won jackpot"
         name="text"
       />

       <button type="submit" style={{border:"none",padding:"20px",cursor:"pointer",backgroundColor:"#004781",color:"#fff",borderRadius:"10px"}} >
         Generate !
       </button>
       {resData&&<div>
       <span>Positive:<p style={{color:"green"}}>{" "+Math.round(resData?.positive*100)+ "%"}</p></span>
       <span>Negative:<p style={{color:"red"}}>{" "+Math.round(resData?.negative*100)+ "%"}</p></span>
      <span>Neutral:<p style={{color:"gray"}}>{" "+Math.round(resData?.neutral*100)+"%"}</p></span>
      </div>}
       {isLoading&&<p>Loading...</p>}
       
     </form>
     
    </div>
    </Fade>
    </>
  )
}

export default sentimentAnalysis