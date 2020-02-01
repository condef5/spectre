import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="full-width text-tint-01">
      <div
        className="h-full w-full absolute top-0 bg-cover bg-cyan"
        style={{
          backgroundImage: "url(https://i.imgur.com/ugzscGo.png)",
          backgroundBlendMode: "multiply"
        }}
      />
      <div className="content relative text-center">
        <h1 className="m-0 text-white w-full mt-32 text-5xl leading-tight">
          Welcome to Spectre!
        </h1>
        <p className="text-cyan-dark pt-2">
          The best site for recommendations on anime, cartoons and manga.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
