import Head from "next/head";
import styles from "./Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Thank You | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.head2}>
        <h1 className={styles.headline3}>Thank You</h1>{" "}</div>
        <div className={styles.content2}>
          <h2>You will hear from us within 1-2 working days</h2>
        </div>
      </div>
    </>
  );
}
