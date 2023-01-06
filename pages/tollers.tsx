import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Tollers() {
  return (
    <>
      <Head>
        <title>Barkley Toller</title>
        <meta
          name="Tollers"
          content="What is a Nova Scotia Duck Tolling Retriever?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>About Tollers</h1>
      </main>
    </>
  );
}