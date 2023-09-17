import React,{useEffect} from 'react';
import "./features.css"
import aos from "aos"
import "aos/dist/aos.css"
const CardComponent = () => {
  const cardsData = [
    {
      title: ' Cross-Domain Innovation',
      content: 'Witness the convergence of textual, visual, and auditory elements, fostering unprecedented cross-domain innovation. Unleash your creativity as AI-powered generators collaboratively push the boundaries of conventional artistic expression, birthing a new era of multidisciplinary creativity.',
    },
    {
      title: 'Elevating Artistry through AI',
      content: ' Witness the harmonious dance between human ingenuity and machine intelligence, as AI-generated sparks of inspiration intertwine with your own creative vision. Elevate your artistry through the fusion of ideas, genres, and styles, catalyzed by the seamless collaboration between creators and AI generators.',
    },
    {
      title: ' Narratives Beyond Imagination',
      content: 'As AI-generated plots interweave with human-written dialogues, blurring the lines between reality and fantasy. Embrace the power of AI to co-create narratives that challenge the depths of your imagination and captivate audiences in novel and unexpected ways.',
    },
  ];
  useEffect(()=>{
    aos.init({duration:2000})
    
    },[aos])
  return (
    <div style={styles.container} className='features-container'   >
      {cardsData.map((card, index) => (
        <div key={index} style={styles.card} className='features' data-aos="fade-right" >
          <h1 style={{ textAlign: 'center',color:"#004781"}}>{card.title}</h1>
          <p style={{fontSize:"1.2rem",textAlign: 'left'}}>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    marginTop:"100px",
    gap:"30px",
   
  },
  card: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   
  },
};

export default CardComponent;
