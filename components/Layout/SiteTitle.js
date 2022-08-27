import Head from "next/head";

const SiteTitle = ({ siteTitle }) => {
  return (
    <Head>
      <title>{siteTitle} | 程式家教</title>
    </Head>
  );
};
export default SiteTitle;
