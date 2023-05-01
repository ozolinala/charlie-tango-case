import Head from "next/head";
import styles from "./contact/Contact.module.css";
import { useState } from "react";
import Selected from "@/components/Header/Selected";

export default function Contact(props) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;

  const [selectedBuyers, setSelectedBuyers] = useState([...props.selectedList]);

  function removeSelectedBuyer(id) {
    setSelectedBuyers((oldList) => {
      return oldList.filter((buyer) => buyer.id !== id);
    });
  }

  function submit(e) {
    e.preventDefault();
    const newSeller = {
      price: props.sellerData.price,
      estateType: props.sellerData.estateType,
      size: props.sellerData.size,
      zipCode: props.sellerData.zipCode,
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      consent: true,
      buyers: selectedBuyers,
    };
    postSeller(newSeller);
  }

  function postSeller(seller) {
    fetch("https://tqxrssraxgpssjpdurca.supabase.co/rest/v1/Sellers", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxeHJzc3JheGdwc3NqcGR1cmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMjU4MDQsImV4cCI6MTk5NzkwMTgwNH0.hhSvz3ws9gqKU7aEIa2iU0xiyWFguL4sr0QpP7hcloo",
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
      <div className={styles.head}>
        <h1 className={styles.headline}> Your contact details</h1>{" "}
      </div>
        <div className={styles.content}>
          <div className={styles.list_section}>
            <h2 className={styles.name}>Selected Buyers</h2>
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
