import Head from 'next/head';
import Intro from '../components/Intro';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Anower Jahan Shofol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full">
        <Intro></Intro>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
