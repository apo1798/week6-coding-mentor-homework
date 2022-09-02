import Layout from "../../components/Layout/Layout";
import SiteTitle from "../../components/Layout/SiteTitle";
import CourseDescription from "../../components/BasicHtmlPage/CourseDescription";
import CourseRecommendation from "../../components/BasicHtmlPage/CourseRecommendation";

const ClassPage = () => {
  return (
    <>
      <SiteTitle siteTitle="基礎前端 - HTML" />
      <Layout>
        <CourseDescription />
        <CourseRecommendation />
      </Layout>
    </>
  );
};
export default ClassPage;
