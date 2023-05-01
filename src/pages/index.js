import Head from "next/head";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Home(props) {
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

    props.setSellerData({
      price: parseInt(price),
      estateType: estateTypes[parseInt(estateType) - 1].name,
      size: parseInt(size),
      zipCode,
    });
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline1}>Find a </h1>
        <h1 className={styles.headline}> buyer </h1>{" "}
        <h1 className={styles.headline1}>for your property</h1>
        <div className={styles.content}>
          <h2>Start the search</h2>
          <p>
            {" "}
            In order for us to effectively identify potential buyers, we kindly
            request that you provide us with the necessary information regarding
            the property that you are planning to sell.{" "}
          </p>
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
            <br /> <br />
            <button className={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>{" "}
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
