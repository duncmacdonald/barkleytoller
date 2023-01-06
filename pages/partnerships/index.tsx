import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Partnerships() {
  return (
    <>
      <Head>
        <title>Partnerships</title>
        <meta
          name="Partnerships"
          content="These are some companies we like and are excited to be working with."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Partnerships</h1>
          <p>Partnerships? We have none.</p>
      </main>
    </>
  );
}
