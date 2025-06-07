import { NavLink } from 'react-router-dom';

export default function About({ className }) {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({isActive}) => isActive ? `link ${className} home active`: `link ${className} home`}
      >Home</NavLink>
      <NavLink
        to='/about'
        className={({isActive}) => isActive ? `link ${className} about active`: `link ${className} about`}
      >About</NavLink>
      <NavLink
        to='/work'
        className={({isActive}) => isActive ? `link ${className} work active`: `link ${className} work`}
      >Work</NavLink>
    </nav>
  )
}