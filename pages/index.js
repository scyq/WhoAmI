import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>scyq artstation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainTitle}>scyq artstation</h1>

        <Link href="/resume/resume">
          <a>Resume</a>
        </Link>
      </main>
    </div>
  );
}
