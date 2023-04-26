import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/buyers/Buyers.module.css";
import { estateTypes } from "@/data/estateTypes";

export function BuyerCard() {
  const [buyers, setBuyers] = useState([]);
  const { query } = useRouter();
  console.log(query.zipCode);
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

  function getEstateTypeName(id) {
    const estateType = estateTypes.find((type) => type.id === id);
    return estateType ? estateType.name : null;
  }
  return (
    <div className={styles.buyersCardGrid}>
      {buyers.map((buyer) => (
        <div className={styles.buyersCard} key={buyer.id}>
          <p>
            <strong>ID: </strong> {buyer.id}
          </p>

          <p>
            <span className={styles.estateTypeStyling}>
              {getEstateTypeName(buyer.estateType)}
            </span>
          </p>
          <p>
            <strong>TAKEOVER DATE: </strong> {buyer.takeoverDate}
          </p>
          <div className={styles.familyIcon}>
            <p>
              <span>
                {" "}
                <strong>{buyer.adults}</strong> adults
              </span>
            </p>
            <p>
              <strong>{buyer.children} </strong>children
            </p>
          </div>
          <p>
            <span className={styles.sizeIcon}></span>
            {buyer.minSize + "㎡"}
          </p>

          <br />
          <p>
            <span className={styles.p}>{buyer.description}</span>
          </p>
          {/* <p>SIZE: {buyer.minSize + "㎡"}</p>
      <p>{buyer.maxPrice + " DKK"}</p> */}
        </div>
      ))}
    </div>
  );
}
