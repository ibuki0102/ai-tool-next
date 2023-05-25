import styles from '../styles/PriceSection.module.scss'
import Image from 'next/image'
import arrowRightUp from '../public/img/arrow-right-up.svg'

export default function PriceSection() {
  return (
    <div className={styles.PriceSection}>
      <h3>定價</h3>
      <div className={styles.Cards}>
        <div className={styles.Card}>
          <div className={styles.Info}>
            <h4>琪琪</h4>
            <ul>
              <li>初級</li>
              <li>速度最快</li>
            </ul>
          </div>
          <div className={styles.Price}>
            <div>
              <span>NT$5</span>
              <span className={styles.Token}>／1k tokens</span>
            </div>
            <div className={styles.StartUse}>
              開始使用
              <Image
                src={arrowRightUp}
                alt="arrowRightUp"
                priority="true"
                width={16}
              />
            </div>
          </div>
        </div>

        <div className={styles.Card}>
          <div className={styles.Info}>
            <h4>昊昊</h4>
            <ul>
              <li>中級</li>
            </ul>
          </div>
          <div className={styles.Price}>
            <div>
              <span>NT$5</span>
              <span className={styles.Token}>／1k tokens</span>
            </div>
            <div className={styles.StartUse}>
              開始使用
              <Image
                src={arrowRightUp}
                alt="arrowRightUp"
                priority="true"
                width={16}
              />
            </div>
          </div>
        </div>

        <div className={styles.Card}>
          <div className={styles.Info}>
            <h4>卡卡</h4>
            <ul>
              <li>高級</li>
            </ul>
          </div>
          <div className={styles.Price}>
            <div>
              <span>NT$5</span>
              <span className={styles.Token}>／1k tokens</span>
            </div>
            <div className={styles.StartUse}>
              開始使用
              <Image
                src={arrowRightUp}
                alt="arrowRightUp"
                priority="true"
                width={16}
              />
            </div>
          </div>
        </div>

        <div className={styles.Card}>
          <div className={styles.Info}>
            <h4>杰杰</h4>
            <ul>
              <li>最高級</li>
              <li>資訊最完善</li>
            </ul>
          </div>
          <div className={styles.Price}>
            <div>
              <span>NT$5</span>
              <span className={styles.Token}>／1k tokens</span>
            </div>
            <div className={styles.StartUse}>
              開始使用
              <Image
                src={arrowRightUp}
                alt="arrowRightUp"
                priority="true"
                width={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
