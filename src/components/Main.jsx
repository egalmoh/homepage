import { useState } from 'react'
import allLanguages from '../languages.js'
import LanguageButton from './LanguageButton.jsx'
import { Facebook, Github, Linkedin, Mail, JavaScript } from "lucide-react"
import { clsx } from 'clsx'


export default function Main({theme}) {
  const [languages, setLanguages] = useState(allLanguages)

  const styles1 = {
    color: theme && "white"
  }

  const className = clsx(theme ? 'profile-links-dark' : 'profile-links')

  const languagesEl = languages.map(language => {
    return (
        <LanguageButton 
          key={language.name} 
          language={language} 
          icon={JavaScript}
          handleClick={() => handleClick(language)}
          theme={theme}
        />
    )
  })

  function handleClick(language) {
    setLanguages(prevLang => prevLang.map(lang => {
      return language.name === lang.name 
        ? {...lang, isShown: !lang.isShown} 
        : lang
    }))
  }

  return (
    <main className="main-container">
      <section className='skills-section'>
        <h2 style={styles1}>Skills</h2>
        <div className='languages'>
          {languagesEl}
        </div>
      </section>
      <section className='get-in-touch-section'>
        <h2 style={styles1}>Get in Touch</h2>
        <div className={`${className}`}>
          <a className="github" href='https://github.com/egalmoh' target='_blank' aria-label='Github profile'><Github /></a>
          <a className="linkedin" href="https://www.linkedin.com/in/cigaal/" target='_blank' aria-label='Linkedin profile'><Linkedin /></a>
          <a className="mail" href="mailto:egalmoh7@gmail.com" target='_blank' aria-label='Email'><Mail /></a>
          <a className="facebook" href="https://www.facebook.com/egalmoh" target='_blank' ><Facebook /></a>
        </div>
      </section>
    </main>
  )
}