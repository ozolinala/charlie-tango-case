import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [selectedList, setSelectedList] = useState([]);
  const [sellerData, setSellerData] = useState({});
  return (
    <>
      <Header />
      <main>
        <Component
          sellerData={sellerData}
          setSellerData={setSellerData}
          selectedList={selectedList}
          setSelectedList={setSelectedList}
          {...pageProps}
        />
      </main>
    </>
  );
}
