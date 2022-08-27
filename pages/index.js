import Head from "next/head";
import SiteTitle from "../components/Layout/SiteTitle";

import Course from "../components/IndexPage/Course";
import Feature from "../components/IndexPage/Feature";
import Gallery from "../components/IndexPage/Gallery";
import Hero from "../components/IndexPage/Hero";
import Process from "../components/IndexPage/Process";
import Programming from "../components/IndexPage/Programming";
import Layout from "../components/Layout/Layout";
import Article from "../components/IndexPage/Article";
import Slide from "../components/IndexPage/Slide";

const Home = () => {
  return (
    <>
      <SiteTitle siteTitle="首頁" />
      <Layout>
        <Hero />
        <Feature />
        <Process />
        <Programming />
        <Course />
        <Gallery />
        <Article />
        <Slide />
      </Layout>
    </>
  );
};

export default Home;
