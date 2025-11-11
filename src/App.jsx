import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Services.jsx"
import Careers from "./pages/Careers.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return <>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/careers" element={<Careers />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
}

export default App

