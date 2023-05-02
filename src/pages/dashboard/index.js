import Head from "next/head";
import styles from "./Dashboard.module.css";
import { useState, useEffect } from 'react'
// import ContactCard from "@/components/ContactCard";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient('https://tqxrssraxgpssjpdurca.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxeHJzc3JheGdwc3NqcGR1cmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMjU4MDQsImV4cCI6MTk5NzkwMTgwNH0.hhSvz3ws9gqKU7aEIa2iU0xiyWFguL4sr0QpP7hcloo')

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('Sellers').select('*')
        if (error) throw error
        setData(data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
    <Head>
          <title>Find buyer | EDC</title>
        </Head>
        <div className="wrapper"> <div className={styles.head}>
        <h1 className={styles.headline}>Recent Contacts</h1>
    </div>
    <div className={styles.card}>
      {data.map(row => (
        <div key={row.id} className="card">
                   <p> {new Date(row.created_at).toLocaleString()}</p>

          <h2>{row.name}</h2>
          <strong>Email:</strong> <p><a href={`mailto:${row.email}`} style={{ textDecoration: 'none' }}>{row.email}</a></p>         
          <p><strong>Phone:</strong> <a href={`tel:${row.phone}`} style={{ textDecoration: 'none' }}>+45 {row.phone}</a></p>         <strong>Estate Type:</strong><p>{row.estateType}</p>
          <strong>Price:</strong><p>{row.price.toLocaleString('en-US', { style: 'currency', currency: 'DKK' })}</p>         <strong>Size:</strong> <p>{row.size}</p>
        </div>
      ))}
    </div>
    </div></>
  )
}

  
  
  
  