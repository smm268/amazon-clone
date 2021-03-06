import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { getSession, useSession } from "next-auth/client";

export default function Home({products}) {
  const [session, loading] = useSession();


  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

    {/*Header */}
    <Header />

    <main className="max-w-5xl mx-auto">
      {/*Banner */}
     <Banner />
    {/*Product Feed */}
    <ProductFeed products={products} />
    

    </main>
   
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props:{
      session,
      products,
    },
  };
}