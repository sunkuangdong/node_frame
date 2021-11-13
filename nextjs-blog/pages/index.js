import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import png from "../public/1.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          第一篇文章
          <Link href="/posts/first-posts"><a >点击这里</a></Link>
        </h1>
        <img src={png.src} alt="Logo" />
        <Image src={png} alt="Logo" width={300} height={300}/>
      </main>
    </div>
  )
}
