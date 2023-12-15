import { PageWrapper } from "context/page";
import Head from "next/head";
export const Page = (props) => {
  
  return (
    <PageWrapper
      value={{
        propertyFeatures: props.propertyFeatures,
        title: props.title,
        featuredImage: props.featuredImage,
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      efwfwf
    </PageWrapper>
  );
};