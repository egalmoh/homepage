import { AlignCenter, Moon, Sun } from "lucide-react"
import homeImg from '../assets/IMG_050355.JPG'

export default function Header({theme, setTheme}) {
  
  const stylesH1 = {
    color: theme && "white"
  }

  const stylesButt = {
    backgroundColor: theme && "rgb(31 41 55)",
    color: theme && "white",
  }

  const styles1 = {
    color: theme && "white"
  }

  const styles2 = {
    color: theme && "rgb(209 213 219)"
  }

  

  return (
    <>
      <header className="header-container">
        <h1 style={stylesH1}>Mohamed Egal</h1>
        <button className="moon-sun-btn" style={stylesButt} onClick={() => setTheme(prevTheme => !prevTheme)}>{theme ? <Sun size={28} /> : <Moon size={28} />}</button>
      </header>
      <section className="about-home-section">
        <div className="home-about">
          <img src={homeImg} className='egal-img' alt='mohamed egal image' />
        </div>
        <h2 style={styles1}>Welcome to my personal homepage!</h2>
        <p style={styles2}>I'm a passionate Software Developer with a love for creating beautiful, functional web apps and solving real world problems.</p>
        <div></div>
      </section>
    </>
  )
}