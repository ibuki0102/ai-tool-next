import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ToolSection from '../components/ToolSection'
import Companys from '../components/Companys'
import Onions from '../components/Onions'
import Footer from '../components/Footer'
import Recommends from '../components/Recommends'

import flash from '../public/img/flash.svg'
import awesome from '../public/img/awesome.svg'
import libraryAdd from '../public/img/library-add.svg'
import arrowRightUp from '../public/img/arrow-right-up.svg'
import arrowRightUpBlack from '../public/img/arrow-right-up-black.svg'

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>AI工具王</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <header className={styles.Header}>
          <div className={styles.Title}>
            <p>透過</p>
            <p>AI工具王的</p>
            <p>強大模型</p>
            <p>讓您的業務更聰明</p>
          </div>
          <button className={styles.StartBtn}>開始使用</button>
          <Onions />
        </header>
        <div className={styles.Service}>
          <div>我們的服務</div>
          <div>
            <p>我們相信透過 AI 技術，</p>
            <p>
              包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
            </p>
          </div>
        </div>
        <div className={styles.Cards}>
          <div className={styles.Card}>
            <Image src={flash} alt="flash" priority="true" width={80} />
            <div>快速</div>
            <p>
              我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。
            </p>
          </div>
          <div className={styles.Card}>
            <Image src={awesome} alt="awesome" priority="true" width={80} />
            <div>靈活</div>
            <p>
              我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。
            </p>
          </div>
          <div className={styles.Card}>
            <Image
              src={libraryAdd}
              alt="libraryAdd"
              priority="true"
              width={80}
            />
            <div>擴充</div>
            <p>我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</p>
          </div>
        </div>
        <div className={styles.Coop}>
          <h3>來自合作夥伴</h3>
          <Companys />
        </div>
        <Recommends />
      </main>
      <ToolSection />
      <main>
        <div className={styles.StartUse}>
          <div>現在就來建立屬於你的服務吧</div>
          <button>
            開始使用
            <Image
              src={arrowRightUp}
              alt="arrowRightUp"
              priority="true"
              width={24}
            />
            <Image
              src={arrowRightUpBlack}
              alt="arrowRightUp"
              priority="true"
              width={24}
            />
          </button>
        </div>
        <Footer />
      </main>
    </div>
  )
}
