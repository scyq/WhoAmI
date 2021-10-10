import Head from "next/head";
import Image from "next/image";
import styles from "./avatar.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "scyq artstation";

export default function Avatar({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to my station." />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt="This is scyq's site"
          />
        </>
      </header>
      <main>{children}</main>
    </div>
  );
}
