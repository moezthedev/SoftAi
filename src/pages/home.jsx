import Navbar from '../components/navbar/navbar'
import Header from '../components/header/header'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'
import Description from '../components/description/description';
import TextToHeadline from "../components/texttoheadline/texttoheadline"
import TextComplete from "../components/textComplete/textcomplete"

const home = () => {

  return (
    <>
        
          
      <Navbar/>
      <Header />
      <Features/>
      <Description/>
      <TextToHeadline/>
      <TextComplete/>
      <Footer/>
    </>
  )
}

export default home