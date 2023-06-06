import Head from 'next/head'
import styles from '../styles/Pricing.module.scss'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import ToolSection from '../components/ToolSection'
import Footer from '../components/Footer'
import Onions from '../components/Onions'
import PriceSection from '../components/PriceSection'

import add from '../public/img/add.svg'

export default function Pricing() {
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
            <p>用多少，</p>
            <p>付多少。</p>
          </div>
          <div className={styles.SubTitle}>
            <p>我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</p>
          </div>
        </header>
        <Onions />
        {/* 定價 */}
        <PriceSection />
        {/* 使用規範 */}
        <div className={styles.TermsSection}>
          <h3>使用規範</h3>
          <div className={styles.Terms}>
            <div className={styles.Term}>
              <h4>守法</h4>
              <p>請遵守相關的法規和政策，不得進行任何違法違規的活動。</p>
            </div>
            <div className={styles.Term}>
              <h4>資訊安全</h4>
              <p>請務必保護好自己的帳號和密碼，不得將其透露給他人。</p>
            </div>
            <div className={styles.Term}>
              <h4>守密</h4>
              <p>需對使用過程中產生的數據負責，不得擅自泄露數據。</p>
            </div>
          </div>
        </div>
      </main>
      <ToolSection />
      <main>
        {/* 常見問題 */}
        <div className={styles.QAsection}>
          <h3>常見問題</h3>
          <ul className={styles.Questions}>
            <li className={styles.Question}>
              <div>
                <input id="q1" type="checkbox" className={styles.Checkbox} />
                <label htmlFor="q1">
                  <Image
                    src={add}
                    alt="add"
                    priority="true"
                    width={24}
                    className={styles.AddIcon}
                  />
                  <p>如何選擇適合的AI模型？</p>
                </label>
                <p className={styles.Content}>
                  選擇適合的AI模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最適合的模型。
                </p>
              </div>
            </li>

            <li className={styles.Question}>
              <div>
                <input id="q2" type="checkbox" className={styles.Checkbox} />
                <label htmlFor="q2">
                  <Image
                    src={add}
                    alt="add"
                    priority="true"
                    width={24}
                    className={styles.AddIcon}
                  />
                  <p>租用模型的費用是如何計算的？</p>
                </label>
                <p className={styles.Content}>
                  租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、暫用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。
                </p>
              </div>
            </li>
            <li className={styles.Question}>
              <div>
                <input id="q3" type="checkbox" className={styles.Checkbox} />
                <label htmlFor="q3">
                  <Image
                    src={add}
                    alt="add"
                    priority="true"
                    width={24}
                    className={styles.AddIcon}
                  />
                  <p>如何進行付款？</p>
                </label>
                <p className={styles.Content}>
                  付款方式可以通過網站上提供的宴上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用欸用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。
                </p>
              </div>
            </li>
            <li className={styles.Question}>
              <div>
                <input id="q4" type="checkbox" className={styles.Checkbox} />
                <label htmlFor="q4">
                  <Image
                    src={add}
                    alt="add"
                    priority="true"
                    width={24}
                    className={styles.AddIcon}
                  />
                  <p>租用模型的期限是多久？</p>
                </label>
                <p className={styles.Content}>
                  租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。
                </p>
              </div>
            </li>
            <li className={styles.Question}>
              <div>
                <input id="q5" type="checkbox" className={styles.Checkbox} />
                <label htmlFor="q5">
                  <Image
                    src={add}
                    alt="add"
                    priority="true"
                    width={24}
                    className={styles.AddIcon}
                  />
                  <p>如果在使用的過程中遇到問題，應該怎麼處理？</p>
                </label>
                <p className={styles.Content}>
                  如果在使用過程中遇到問題，您可以聯繫惡扶或技術支持人員進行諮詢或報告問題。您也可以。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </main>
    </div>
  )
}
