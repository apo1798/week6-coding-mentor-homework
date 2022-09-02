import Head from "next/head";

const SiteTitle = ({ siteTitle }) => {
  const title = `${siteTitle} | 程式家教`;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default SiteTitle;
