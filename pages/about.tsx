import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Barkley Toller</title>
        <meta
          name="description"
          content="The life and adventures of a west coast little river dog."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>About Barkley Toller</h1>
      </main>
    </>
  );
}
