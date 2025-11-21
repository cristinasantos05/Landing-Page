'use client';
import './header.css';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';

const navItems = [
  { name: 'Hosting', link: '/' },
  { name: 'Domain', link: '/' },
  { name: 'Features', link: '/' },
  { name: 'Support', link: '/' },
  { name: 'Community', link: '/' },
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="container">
      <header>
        <div className="cel-mode">
          <div className="cel-mode-trigger">
            <button className="menu-ham" onClick={() => setMenu(!menu)}>
              <FiMenu size={28} />
            </button>
          </div>
          {menu && (
            <div className="cel-mode-container">
              <div className="cel-mode-container-close">
                <button className="close" onClick={() => setMenu(!menu)}>
                  <IoCloseSharp size={28} />
                </button>
              </div>
              <nav className="cel-mode-nav">
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.name} className="nav-item">
                      <a href={item.link} className="nav-link">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div className="desktop-mode">
          <nav>
            <ul className="desktop-mode-ul">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a href={item.link} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
