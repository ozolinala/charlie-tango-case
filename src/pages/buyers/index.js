import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useEffect, useState } from "react";

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
        <div className={styles.buyersCard}>
          {buyers.map((buyer) => (
            <div key={buyer.id}>
              <p>{buyer.description}</p>
              <p>ID: {buyer.id}</p>
              <p>TYPE: {buyer.estateType.name}</p>
              <p>SIZE: {buyer.minSize + "SQM"}</p>
              <p>{buyer.maxPrice + " DKK"}</p>
            </div>
          ))}
        </div>
        <p>
          On this page you get the <code>`query`</code> params like{" "}
          <code>`zipCode`</code>, and can use them to fetch a list of buyers
          from the API.
        </p>
        <p>
          Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best.
        </p>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
            >
              next.js - Data fetching
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
              target="_blank"
            >
              react.dev - Fetching data
            </a>
          </li>
        </ul>
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
