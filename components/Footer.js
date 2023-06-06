import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/img/logo.svg'
import ai_title from '../public/img/ai-title.svg'
import arrowUp from '../public/img/arrow-up.svg'

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div className={styles.MenuSection}>
        <div className={styles.Menu}>
          <Image src={logo} alt="logo" priority="true" width={40} />
          <a href="/">
            <Image src={ai_title} alt="ai_title" priority="true" width={190} />
          </a>
        </div>
        <div>
          <p>
            <Link href="/">首頁</Link>
          </p>
          <p>
            <Link href="/pricing">定價</Link>
          </p>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.FirstRow}>
          <div>AI工具王 © 2023</div>
          <ul className={styles.SecondRow}>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className={styles.BackToTop} onClick={() => handleScrollToTop()}>
          <div>
            Back to top
            <Image
              src={arrowUp}
              alt="arrowUp"
              priority="true"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </>
  )
}
