import type { JSX } from 'react'
import { navigationItems } from '../data/portfolio'

function Header(): JSX.Element {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">VD</a>
        <nav className="menu">
          {navigationItems.map((item) => (
            <a key={item.label} className={item.active ? 'active' : undefined} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#" className="lang">UA</a>
      </div>
    </header>
  )
}

export default Header
