import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/buyers/Buyers.module.css";
import { estateTypes } from "@/data/estateTypes";

export function BuyerCard(props) {
  const [buyers, setBuyers] = useState([]);
  const { query } = useRouter();
  useEffect(() => {
    fetch(
      `/api/find-buyers?zipCode=${query.zipCode}&estateType=${query.estateType}&size=${query.size}&price=${query.price}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
      });
  }, [query]);

  function getEstateTypeName(id) {
    const estateType = estateTypes.find((type) => type.id === id);
    return estateType ? estateType.name : null;
  }

  function handleSelected(e, buyer) {
    if (e.target.checked) {
      props.addSelected(buyer);
    } else {
      props.removeSelected(buyer.id);
    }
  }

  return (
    <div className={styles.buyersCardGrid}>
      {buyers.map((buyer) => (
        <div className={styles.buyersCard} key={buyer.id}>
         <div className={styles.buyersCardCheckbox}>
          <input 
            type="checkbox"
            className={styles.customCheckbox}
            onChange={(e) => {
              handleSelected(e, buyer);
            }}
          ></input></div> 
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
            {buyer.minSize + " ㎡"}
          </p>

          <br />
          <p>
            <span className={styles.p}>{buyer.description}</span>
          </p>

          <p> <strong>{buyer.maxPrice.toLocaleString("en-US", { useGrouping: true, minimumFractionDigits: 0 }).replace(/,/g, ".") + " DKK"} </strong> </p>       </div>
      ))}
    </div>
  );
}
