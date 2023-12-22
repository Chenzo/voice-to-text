

import Image from 'next/image'
import styles from './page.module.css'

import VoiceToText from './VoiceToText'

export default function Home() {


  return (
    <main className={styles.main}>
      simple

      <VoiceToText />
    </main>
  )
}
