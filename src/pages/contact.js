import Head from "next/head";
import styles from "./Home.module.css";
import { useState } from "react";
import Selected from "@/components/Header/Selected";

export default function Contact() {
  const [selectedBuyers, setSelectedBuyers] = useState([
    { id: "buyerID_1", description: "weird family 1" },
    { id: "buyerID_2", description: "weird family 2" },
    { id: "buyerID_3", description: "weird family 3" },
    { id: "buyerID_4", description: "weird family 4" },
  ]);

  function removeSelectedBuyer(id) {
    setSelectedBuyers((oldList) => {
      return oldList.filter((buyer) => buyer.id !== id);
    });
  }

  function submit(e) {
    e.preventDefault();
    const newSeller = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      consent: true,
      buyers: selectedBuyers,
    };
    postSeller(newSeller);
  }

  function postSeller(seller) {
    fetch("https://jebydpkuuyyogrpubntk.supabase.co/rest/v1/wines", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYnlkcGt1dXl5b2dycHVibnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTk0MjIsImV4cCI6MTk5NTQ5NTQyMn0.wvAEE9l5FvXvjFmU5qsuyIK0QG2YFdyGRzLJ8qjgZMo",
      },
      body: JSON.stringify(seller),
    })
      .then((data) => data.json())
      .then((data) => (window.location.href = "/thankyou"));
  }

  return (
    <>
      <Head>
        <title>Contact buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline1}>Contact potential</h1>
        <h1 className={styles.headline}> buyers </h1>{" "}
        <div className={styles.content}>
          <div className={styles.list_section}>
            <h2>Selected Buyers</h2>
            <ul>
              {selectedBuyers.map((buyer) => (
                <Selected
                  {...buyer}
                  key={buyer.id}
                  removeSelectedBuyer={removeSelectedBuyer}
                ></Selected>
              ))}
            </ul>
          </div>

          <br></br>
          <form
            action="/thankyou"
            method="GET"
            className={styles.form}
            onSubmit={submit}
          >
            <h2>Contact Information</h2>
            <label>
              <span className={styles.label}>Name</span>
              <input type="text" name="name" required />
            </label>
            <br></br>
            <label>
              <span className={styles.label}>Email</span>
              <input type="email" name="email" required />
            </label>{" "}
            <br></br>
            <label>
              <span className={styles.label}>Phone</span>
              <input type="number" name="phone" required />
            </label>{" "}
            <br></br>
            <br></br>
            <label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="checkbox"
                required
              />
            </label>
            {
              "Yes please, EDC may contact me with offers and information related to the real estate market."
            }
            <br></br>
            <br></br>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
