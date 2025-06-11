import { clsx } from 'clsx'

export default function LanguageButton({language, handleClick, buttStyles, theme}) {

  const className = clsx({
    'btn-border': language.isShown,
    'drk-mode': theme,
    "lang-dark-btn": theme,

  })

  return (
    <div>
      <button 
        className={`lang-button ${className}`}
        onClick={handleClick}
      >{language.name}</button>
      <p className={`text-description ${className}`}> {language.isShown && language.description}</p>
    </div>
  )
} 