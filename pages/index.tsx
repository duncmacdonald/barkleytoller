import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <div>
          <Image
            className={styles.profile}
            src="/profile.jpg"
            alt="Barkley's profile photo"
            width={200}
            height={200}
          />
          <h1>Barkley Toller</h1>
        </div>
        <div>About</div>
        <div>Training</div>
        <div>Partnerships</div>
        <div>Tollers</div>
      </main>
    </>
  );
}
