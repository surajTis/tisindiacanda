import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";
import Image from "next/image";
import BannerImg from "../../public/assets/img/banner-image.webp";
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
      <MainMenu />
      <section className="bannner-outer">
        <figure>
          <Image
            src={BannerImg}

            alt="Picture of the author"
          />
          
        </figure>
        <div className="banner-text-outer">
          <div className="container">
            <div className="banner-text">
              <h4>we are tis canada</h4>
              <h1>Award-winning Digital Marketing Agency UK</h1>
              <p>
                Holistic digital solutions that drive engagement, increase
                conversions, and grow your business
              </p>
              <h3>
                Wanna get in touch? <a href="#" className="lets-talk">Lets talk</a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};