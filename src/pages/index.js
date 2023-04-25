import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline1}>Find a </h1><h1 className={styles.headline}> buyer </h1>  <h1 className={styles.headline1}>for your property</h1>
       
        <div className={styles.content}>
          <h2>Start the search</h2>
          <p>
          In order for us to effectively identify potential buyers, we kindly request that you provide us with the necessary information regarding the property that you are planning to sell. 
          </p>
      <br></br>
          <form action="/buyers" method="GET" className={styles.form}>    
            <label>
              <span className={styles.label}>Estate Type</span>
              <select name="estateType" id="cars">
  <option id="1">Villa</option>
  <option id="2">Villalejlighed</option>
  <option id="3">Rækkehus</option>
  <option id="4">Ejerlejlighed</option>
  <option id="5">Fritidshus</option>
  <option id="6">Fritidsgrund</option>
  <option id="7">Helårsgrund</option>
  <option id="8">Andelsbolig</option>
  <option id="9">Landejendom</option>
</select>
            </label><br></br>
            <label>
              <span className={styles.label}>Size</span>
              <input type="number" name="size" required />
            </label><br></br>
            <label>
              <span className={styles.label}>Price</span>
              <input type="number" min="100" name="price" required />
            </label> <br></br>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label> <br></br>
            <br></br>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
