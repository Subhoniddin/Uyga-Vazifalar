
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">Brit<span className='logoLex'>lex</span></div>
        <ul className="menu-items">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#">Skills</a></li>
            <li className="menu-item"><a href="#">About Us</a></li>
            <li className="menu-item"><a href="#">Pricing</a></li>
            <li className="menu-item"><a href="#">Contacts</a></li>
        </ul>
        <button className='talkBtn'>Let's Talk</button>
    </div>
  )
}

export default Navbar