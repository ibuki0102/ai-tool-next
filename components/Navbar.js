import styles from '../styles/Navbar.module.scss'
import logo from '../public/img/logo.svg'
import menu from '../public/img/menu.svg'
import ai_title from '../public/img/ai-title.svg'
import close from '../public/img/close.svg'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuState, setMenuState] = useState(false)
  const handleOpenMenu = () => {
    setMenuState((setMenuState) => (setMenuState === false ? true : false))
  }
  return (
    <div className={styles.Container}>
      <div>
        <Image
          src={logo}
          alt="logo"
          priority="true"
          width={40}
          className={styles.Logo}
        />
        <a href="/">
          <Image
            src={ai_title}
            alt="ai_title"
            priority="true"
            width={190}
            className={styles.AiTitle}
          />
        </a>
      </div>
      <div>
        {menuState ? (
          <Image
            src={close}
            alt="close"
            priority="true"
            width={24}
            className={styles.Close}
            onClick={() => handleOpenMenu()}
          />
        ) : (
          <Image
            src={menu}
            alt="menu"
            priority="true"
            width={24}
            className={styles.Hamburger}
            onClick={() => handleOpenMenu()}
          />
        )}
        <div className={styles.DesktopMenu}>
          <Link href="/">首頁</Link>
          <Link href="/pricing">定價</Link>
        </div>
      </div>
      {menuState && (
        <div className={styles.OpenedMenu}>
          <div className={styles.Menu}>
            <Link href="/">首頁</Link>
            <Link href="/pricing">定價</Link>
          </div>
          <div className={styles.Footer}>
            <div>AI工具王 © 2023</div>
            <div className={styles.Links}>
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
