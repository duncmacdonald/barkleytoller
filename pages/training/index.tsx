import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Training() {
  return (
    <>
      <Head>
        <title>Training</title>
        <meta
          name="Training"
          content="Training with Barkley"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Training Barkley</h1>
      </main>
    </>
  );
}
