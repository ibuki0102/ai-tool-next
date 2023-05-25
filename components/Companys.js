import styles from '../styles/Companys.module.scss'
import Image from 'next/image'

import company1 from '../public/img/row1-1.png'
import company2 from '../public/img/row1-2.png'
import company3 from '../public/img/row1-3.png'
import company4 from '../public/img/row1-4.png'
import company5 from '../public/img/row1-5.png'
import company6 from '../public/img/row1-6.png'

import company7 from '../public/img/row2-1.png'
import company8 from '../public/img/row2-2.png'
import company9 from '../public/img/row2-3.png'
import company10 from '../public/img/row2-5.png'
import company11 from '../public/img/row2-6.png'

export default function Companys() {
  return (
    <div className={styles.LongCompanys}>
      <div className={styles.FirstRow}>
        <div className={styles.FirstRowContainer}>
          <Image src={company2} alt="company2" priority="true" width={160} />
          <Image src={company1} alt="company1" priority="true" width={160} />
          <Image src={company2} alt="company2" priority="true" width={160} />
          <Image src={company3} alt="company3" priority="true" width={160} />
          <Image src={company4} alt="company4" priority="true" width={160} />
          <Image src={company5} alt="company5" priority="true" width={160} />
          <Image src={company6} alt="company6" priority="true" width={160} />
          <Image src={company1} alt="company1" priority="true" width={160} />
        </div>
      </div>
      <div className={styles.SecondRow}>
        <div className={styles.SecondRowContainer}>
          <Image src={company7} alt="company7" priority="true" width={160} />
          <Image src={company8} alt="company8" priority="true" width={160} />
          <Image src={company9} alt="company9" priority="true" width={160} />
          <Image src={company5} alt="company5" priority="true" width={160} />
          <Image src={company10} alt="company10" priority="true" width={160} />
          <Image src={company11} alt="company11" priority="true" width={160} />
          <Image src={company7} alt="company7" priority="true" width={160} />
        </div>
      </div>
    </div>
  )
}
