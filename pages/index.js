import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from '../styles/Home.module.css'
import Services from "../components/Services";
import { client } from "../lib/client";
import Menu from "../components/Menu";

export default function Home({pizzas}) {
  return (
    <Layout>

      <div className={css.container}>
        <Head>
          <title>PIzzanoes</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>        
          <Services/>
          <Menu pizzas={pizzas}/>
        </main>
      </div>

      </Layout>
  );
}

//predefined next function that automatically renders
export const getServerSideProps =async()=> {
  const query= '*[_type == "Pizza"]';
  const pizzas = await client.fetch(query);
  return { props:{pizzas}}
}

