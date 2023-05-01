import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { BuyerCard } from "@/components/Header/BuyerCard";

export default function Buyers(props) {
  const { query } = useRouter();

  const router = useRouter();

  function addSelected(selectedBuyer) {
    props.setSelectedList((prev) => prev.concat(selectedBuyer));
  }

  function removeSelected(buyerID) {
    props.setSelectedList((prev) =>
      prev.filter((buyer) => buyer.id !== buyerID)
    );
  }

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <div className={styles.container}>
      <button className={styles.button}
          onClick={() => {
            router.push("/contact");
          }}
        >
          Next Step
        </button></div>
        <div className={styles.head}>
        <h1 className={styles.headline1}>PROPOSALS FOR </h1>
        <h1 className={styles.headline}> homes </h1>{" "}
        <h1 className={styles.headline1}>FOR SALE</h1></div>
        <BuyerCard addSelected={addSelected} removeSelected={removeSelected} />
        <br></br>
        <br></br><br></br> <br></br> <br></br>
      </div>
    </>
  );
}
