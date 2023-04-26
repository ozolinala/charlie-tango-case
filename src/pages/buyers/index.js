import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useEffect, useState } from "react";
import { BuyerCard } from "@/components/Header/BuyerCard";

export default function Buyers() {
  const [buyers, setBuyers] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    fetch(
      `/api/find-buyers?zipCode=${query.zipCode}&estateType=${query.estateType}&size=${query.size}&price=${query.price}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBuyers(data);
      });
  }, [query]);
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <BuyerCard />
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
