import Head from "next/head";
import styles from "./Dashboard.module.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchData() {
  const { data, error } = await supabase.from("charlie-tango-case").select("*");

  if (error) throw error;
  return data;
}

export default function Dashboard({ data }) {
    return (
      <>
        <Head>
          <title>Find buyer | EDC</title>
        </Head>
        <div className="wrapper">
        <h1 className={styles.headline}>Recent Contacts</h1>
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
        </div>
      </>
    );
  }
  
  export async function getStaticProps() {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase.from("charlie-tango-case").select("*");
  
    if (error) {
      console.error(error);
      return {
        props: {
          data: [],
        },
      };
    }
  
    return {
      props: {
        data,
      },
    };
  }