import React from "react";
import NavBar from "../src/components/NavBar";
import Hero from "../src/components/VolunteerHero";
import Cards from "../src/components/Cards";
import Footer from "../src/components/Footer";
import Head from "next/head";

const Volunteer = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <title>Empower Her Community</title>
        <meta
          name="title"
          property="og:title"
          content="Empower Her Community"
        />
        <link rel="icon" href="/logo.png" />
        <meta
          name="image"
          property="og:image"
          content="https://empower-her-community.vercel.app/preview.png"
        />
        <meta name="twitter:title" content="Empower Her Community" />
        <meta
          name="twitter:description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta
          name="description"
          content="We are a female community seeing to the growth and progress of all women in tech worldwide"
        />
        <meta
          property="og:site_name"
          content="https://empower-her-community.vercel.app/"
        />
        <meta
          property="og:image:secure_url"
          content="https://empower-her-community.vercel.app/preview.png"
        />
      </Head>
      <NavBar />
      <main className="main overflow-hidden bg-primary bg-opacity-10">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
