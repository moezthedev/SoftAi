
import './App.css'
import SentimentAnalysis from './pages/sentimentAnalysis';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import MainApp from './pages/app'
import About from "./pages/about"
import TextToHeadline from "./pages/textanalysis"
import TextComplete from "./pages/textcompletion"
function App() {
  

  return (
    <>
  
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<MainApp />} />
        <Route path='/analysis' element={<SentimentAnalysis/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/texttoheadline' element={<TextToHeadline/>}/>
        <Route path='/textcompletion' element={<TextComplete/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
