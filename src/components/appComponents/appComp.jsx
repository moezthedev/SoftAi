import "./styles.css";
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const MyForm = () => {

  const [responseData, setResponseData] = useState(null);
  const [isLoading,setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handlePostRequest = async (e) => {
   
    e.preventDefault(); 
   

    const makeAxiosRequest = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set('text', e.target.elements.text.value);
  
      const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/spam',
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
        console.log(response.data);
        setResponseData(response.data);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };


makeAxiosRequest()
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
    <div className="form-container">
      <div className="info">
      <h1>Spam Detector: <button type="button" className="menu-button" onClick={toggleMenu}>
            ?
          </button>
          </h1>
     </div>
     {isMenuOpen && (
        <div className="menu">
          <button className="close-menu-button" onClick={closeMenu}>
            Close X
          </button>
          <div className="menu-container">
          <h2>How it works?</h2>
      <p>Just enter content of email you received in search area and click Check</p>
      </div>
        </div>
      )}
      <form className="my-form" onSubmit={handlePostRequest}>
       
        <TextField
          required
          id="outlined"
          label="Text Area"
          defaultValue="hey you won jackpot"
          name="text"
        />

        <button type="submit" className="submit-button">
          Check !
        </button>
        
      </form>
      
    </div>
   
   
{isLoading?<div style={{textAlign:"center"}}>Loading...</div>: <div className="img-container">
          <p>{responseData&&responseData?.label + ":"}  </p>
          <p> {responseData&&Math.round(responseData?.score*100)+"%"}</p>
        </div>}
       
      

      </>
  );
};

export default MyForm;
