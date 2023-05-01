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

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const handleEstateType = (e) => {
    setEstateType(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <label for="zipCode">
              <span className={styles.label}>Zip Code</span>
              <input
                value={zipCode}
                onChange={handleZipCode}
                name="zipCode"
                type="number"
                inputMode="numeric"
              />
            </label>
            <br />
            <label for="price">
              <span className={styles.label}>Price</span>
              <input
                value={price}
                onChange={handlePrice}
                name="price"
                type="number"
                inputMode="numeric"
                required
              />
            </label>
            <label for="size" className={styles.sizeIcon}>
              <span className={styles.label}>Size</span>
              <input
                value={size}
                onChange={handleSize}
                name="size"
                type="number"
                inputMode="numeric"
                required
              />
            </label>
            <label for="estateType">
              <span val className={styles.label}>
                Estate type
              </span>

              <select
                value={estateType}
                onChange={handleEstateType}
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
