import Header from '../components/Header.jsx'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import clsx from 'clsx'

export default function Layout({theme, setTheme}) {

  const styles = {
    backgroundColor: theme && "rgb(17 24 39)"
  }

  const className = clsx(theme && 'dark-nav')

  return (
    <div style={styles} className='main-layout'>
      <Header 
        theme={theme}
        setTheme={setTheme}
      />
      <Navbar className={className} />
      <Outlet />
    </div>
  )
}