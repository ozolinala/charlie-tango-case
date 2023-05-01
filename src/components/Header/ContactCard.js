import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/buyers/Buyers.module.css";
import { estateTypes } from "@/data/estateTypes";

export function ContactCard() {
 
  return (
        <ul>
            {data.map((item) => (
              <li key={item.id}>
                <strong>ID:</strong> {item.id}, <strong>Created at:</strong>{" "}
                {item.created_at}, <strong>Zip Code:</strong> {item.zipCode},{" "}
                <strong>Estate Type:</strong> {item.estateType},{" "}
                <strong>Price:</strong> {item.price}, <strong>Size:</strong>{" "}
                {item.size}, <strong>Buyer ID:</strong> {item.buyerID.join(", ")},{" "}
                <strong>Name:</strong> {item.name}, <strong>Email:</strong>{" "}
                {item.email}, <strong>Phone:</strong> {item.phone},{" "}
                <strong>Allow Contact:</strong> {item.allowContact ? "Yes" : "No"}
              </li>
            ))}
          </ul>
    )}

