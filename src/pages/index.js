import Head from "next/head";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Home() {
  const [size, setSize] = useState("");
  const [estateType, setEstateType] = useState("1");
  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleEstateTypeChange = (event) => {
    setEstateType(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/buyers",
      query: { zipCode, estateType, size, price },
    });
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Homepage</h1>
        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input
                value={zipCode}
                onChange={handleZipCodeChange}
                name="zipCode"
                required
              />
            </label>
            <br />
            <label>
              <span className={styles.label}>Price</span>
              <input
                value={price}
                onChange={handlePriceChange}
                name="price"
                required
              />
            </label>
            <label className={styles.sizeIcon}>
              <span className={styles.label}>Size</span>
              <input
                value={size}
                onChange={handleSizeChange}
                name="size"
                required
              />
            </label>
            <label>
              <span val className={styles.label}>
                Estate type
              </span>

              <select
                value={estateType}
                onChange={handleEstateTypeChange}
                name="estateType"
                required
              >
                {estateTypes.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
