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
  );
};

export default Home;
