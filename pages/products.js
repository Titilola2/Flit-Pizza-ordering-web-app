import Head from "next/head";
import Layout from "../components/Layout";
import Productpage from "../components/product"

export default function pizza() {
  return (
    <Layout>
      <div>
        <Head>
          <title>PIZZA</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
            
         <Productpage/>
        </main>
      </div>
      </Layout>
  );
}

