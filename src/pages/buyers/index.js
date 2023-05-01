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
        <button
          onClick={() => {
            router.push("/contact");
          }}
        >
          Next Step
        </button>

        <h1 className={styles.headline}>Potential buyers</h1>
        <BuyerCard addSelected={addSelected} removeSelected={removeSelected} />
        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
