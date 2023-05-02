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

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('Sellers').delete().eq('id', id)
      if (error) throw error
      setData(data.filter(row => row.id !== id))
    } catch (error) {
      setError(error.message)
    }
  }

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
    <div className={styles.cardContainer}>
      {data.map(row => (
        <div key={row.id} className={styles.card}>
<button className={`${styles.removeButton}`} onClick={() => handleDelete(row.id)}>X</button>                   <p> {new Date(row.created_at).toLocaleString()}</p>

          <h2>{row.name}</h2>
          <p><>Email:</> <a href={`mailto:${row.email}`} style={{ textDecoration: 'none' }}>{row.email}</a></p>         
          <p><>Phone:</> <a href={`tel:${row.phone}`} style={{ textDecoration: 'none' }}>+45 {row.phone}</a></p>         
          <h3> {row.estateType}</h3>
          <span className={styles.sizeIcon}></span>
            {row.size + " ㎡"}
           <p> <span className={styles.budgetIcon}></span>
           {row.price.toLocaleString("en-US", { useGrouping: true, minimumFractionDigits: 0 }).replace(/,/g, ".") + " DKK"}
       </p> 
       </div>
      ))}
    </div>
    </div></>
  )
}

  
  
  
  