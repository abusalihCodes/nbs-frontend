import { Link, NavLink } from "react-router-dom"
import './Navbar.css';


const Navbar = () => {
  return (
  <>
   <header>
     <div className="container">
       <div className="logo-brand">
         <NavLink to="/">
            <img src="/images/Logo-05.svg" alt="Company Logo"/>        
         </NavLink>
       </div>

       <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
       </nav>

       <div className="cta-button">
            <Link to="/contact" className="nav-button">Book A Call</Link>
       </div>

       <div className="language-selector">
                <a href="#" className="language-link">
                    <i className="fa-solid fa-earth-americas"></i>
                </a> 
            </div>

     </div>
   </header>  
  </>)
}

export default Navbar