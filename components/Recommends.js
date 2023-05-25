import styles from '../styles/Recommends.module.scss'
import Image from 'next/image'

import star from '../public/img/star.svg'
import avatar1 from '../public/img/avatar1.svg'
import avatar2 from '../public/img/avatar2.svg'
import avatar3 from '../public/img/avatar3.svg'
import pagination from '../public/img/pagination.svg'

export default function Recommends() {
  return (
    <div className={styles.Recommends}>
      <div className={styles.Recommend}>
        <div className={styles.Stars}>
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
        </div>
        <p className={styles.Content}>
          非常喜歡 AI工具王 提供的 AI
          模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王
          提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！
        </p>
        <div className={styles.UserInfo}>
          <Image
            src={avatar1}
            alt="avatar1"
            priority="true"
            width={48}
            className={styles.Avatar}
          />
          <div className={styles.Info}>
            <div>陳小姐</div>
            <p>ABC科技有限公司</p>
          </div>
        </div>
      </div>
      <div className={styles.Recommend}>
        <div className={styles.Stars}>
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
        </div>
        <p className={styles.Content}>
          作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王
          提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王
          的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝
          AI工具王 團隊的辛勤工作！
        </p>
        <div className={styles.UserInfo}>
          <Image
            src={avatar2}
            alt="avatar2"
            priority="true"
            width={48}
            className={styles.Avatar}
          />
          <div className={styles.Info}>
            <div>劉小姐</div>
            <p>XYZ 醫療器材有限公司</p>
          </div>
        </div>
      </div>
      <div className={styles.Recommend}>
        <div className={styles.Stars}>
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
          <Image src={star} alt="star" priority="true" width={16} />
        </div>
        <p className={styles.Content}>
          我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而
          AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王
          的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝
          AI工具王 團隊的支持！
        </p>
        <div className={styles.UserInfo}>
          <Image
            src={avatar3}
            alt="avatar3"
            priority="true"
            width={48}
            className={styles.Avatar}
          />
          <div className={styles.Info}>
            <div>黃先生</div>
            <p>EFG 銀行</p>
          </div>
        </div>
      </div>
      <Image
        src={pagination}
        alt="pagination"
        priority="true"
        width={44}
        className={styles.Pagination}
      />
    </div>
  )
}
