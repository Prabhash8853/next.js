import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Layout from "../containers/Layout/Layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vigyaa - User Generated Content</title>
        <meta property="fb:app_id" content="1611415982497477" />
        <meta name="twitter:site" content="vigyaa" />

        <meta property="fb:app_id" content="1611415982497477" />
        <meta
          name="ahrefs-site-verification"
          content="fa6e22a8b1c231083afc5bfe78046f8617984d88e218cfd026370a6414ce7849"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Vigyaa"} />
        <meta property="og:description" content={"Vigyaa"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
}
