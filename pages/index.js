import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/avatar";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p className={styles.pinkH1}>Hello.</p>
        <p className={styles.pinkH2}>My name is Scyq Chen.</p>
        <p>
          I studied at Beijing University of Technology (B.S.) and Tsinghua
          University (M.S.). I have a great passion for game development, visual
          arts, and content creation, including painting, animation, computer
          graphics, and generative art. My satisfied works will be updated here,
          my open source works are publicly available my{" "}
          <a href="https://github.com/scyq">GitHub</a>, and my indie game
          production are posted on <a href="https://scyq.itch.io/">itch.io</a>.
        </p>

        <p>
          If you speak Mandarin, my Chinese name is 陈宇卿 and you can also find
          me on{" "}
          <a href="https://www.zhihu.com/people/chen-yu-qing-43-88">知乎</a> and{" "}
          <a href="https://space.bilibili.com/336229943">Bilibili</a>.
        </p>
        <p>This website is under construction.</p>
      </section>

      <Link href="/resume/resume">
        <a>Resume</a>
      </Link>
    </Layout>
  );
}
