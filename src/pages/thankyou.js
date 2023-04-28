import Head from "next/head";
import styles from "./Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Thank You | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Thank You</h1>{" "}
        <div className={styles.content}>
          <h2>You will hear from us within 1-2 working days.</h2>
        </div>
      </div>
    </>
  );
}
