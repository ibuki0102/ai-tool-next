import styles from '../styles/Onions.module.scss'
import Image from 'next/image'
import onion from '../public/img/onion.svg'

export default function Onions() {
  return (
    <div className={styles.Onions}>
      <div className={styles.Onion}>
        <Image src={onion} alt="onion" priority="true" width={180} />
      </div>
      <div className={styles.Onion}>
        <Image src={onion} alt="onion" priority="true" width={180} />
      </div>
      <div className={styles.Onion}>
        <Image src={onion} alt="onion" priority="true" width={180} />
      </div>
    </div>
  )
}
