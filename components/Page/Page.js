import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";
import Image from "next/image";
import BannerImg from "../../public/assets/img/banner-image.webp";
import ServiceIcon from "../../public/assets/img/services-ico1.webp";
import FooterIcon1 from "../../public/assets/img/footer-ico1.webp";
import FooterIcon2 from "../../public/assets/img/footer-ico2.webp";
import FooterIcon3 from "../../public/assets/img/footer-ico3.webp";
import FooterIcon4 from "../../public/assets/img/footer-ico4.webp";
import FooterIcon5 from "../../public/assets/img/footer-ico5.webp";
import ThroughBoxImg1 from "../../public/assets/img/through-bx-img1.webp";
import ThroughBoxImg2 from "../../public/assets/img/through-bx-img2.webp";
import ThroughBoxImg3 from "../../public/assets/img/through-bx-img3.webp";
import ThroughBoxImg4 from "../../public/assets/img/through-bx-img4.webp";
import ThroughBoxImg5 from "../../public/assets/img/through-bx-img5.webp";
import ThroughBoxImg6 from "../../public/assets/img/through-bx-img6.webp";
import ThroughBoxImg7 from "../../public/assets/img/through-bx-img7.webp";
import ThroughBoxImg8 from "../../public/assets/img/through-bx-img8.webp";
import IntwoLogo from "../../public/assets/img/intwo-logo.webp";
import AboutDigiImgSm1 from "../../public/assets/img/about-digitech-img-small1.webp";
import AboutDigiImgSm2 from "../../public/assets/img/about-digitech-img-small.webp";
import AboutDigiImgSm from "../../public/assets/img/about-digitech-img.webp";
import DigiRoleImg from "../../public/assets/img/digital-role-img.webp";
import DigiRoleImgSm from "../../public/assets/img/digital-role-img-sm.webp";
import { Footer } from "components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
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
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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
      <section className="satisfied-client-outer">
        <div className="container">
          <div className="row d-flex justify-content-between flex-wrap">
            <div className="satisfied-bx">
              <h3>130+</h3>
              <h6>Satisfied Clients</h6>
            </div>
            <div className="satisfied-bx">
              <h3>50+</h3>
              <h6>Professionals</h6>
            </div>
            <div className="satisfied-bx">
              <h3>17+</h3>
              <h6>SYears of Industry</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="elevating-outer">
        <div className="container">
          <div className="elevating-main">
            <div className="head">
              <h3>Elevating</h3>
              <h2>
                your Future by Empowering Your Brand
                <span> with Cutting-Edge Digital Solutions </span>
              </h2>
            </div>
            <p>
              The surest way to establishing your brand in the digital pantheon is
              by building a strong online presence. At DMA, we understand the way
              the complex digital world works and we have you covered. Whether you
              are a startup, a local business owner, or even a large enterprise,
              our range of digital services, from website design and development,
              to mobile apps and digital marketing, ensures that you have a
              complete arsenal at your disposal to create an impact with your
              brand, increase your clientele, and grow your business
            </p>
            <p>
              As a top digital agency with a blazing track record of successful
              deployment of a complete array of digital solutions, we empower our
              diverse clientele to leverage our skills, knowledge, and experience
              to inject more potency into their operations. In the process, we
              enrich ourselves by driving more results, gaining our clients
              trust, and building more meaningful and long-lasting relationships.
            </p>
          </div>
        </div>
      </section>
      <section className="services-outer">
        <div className="container">
          <div className="services-main">
            <div className="head">
              <h3>services</h3>
              <h2>Future-ready Services for a Brighter Tomorrow</h2>
            </div>
            <div className="row">
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>SEO services</h3>
                <ul>
                  <li>
                    Enhanced Visibility: Utilise SEO to reach global audiences,
                    elevating brand and growth prospects.
                  </li>
                  <li>
                    Precision Targeting: Craft SEO-centric campaigns to engage
                    ideal customers and maximise ROI.
                  </li>
                  <li>
                    Data-Driven Optimisation: Employ SEO analytics for strategy
                    enhancement and better performance.
                  </li>
                </ul>
              </div>
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>SMO SERVICES</h3>
                <ul>
                  <li>
                    Crafting immersive digital destinations through a blend of
                    aesthetics and functionality
                  </li>
                  <li>
                    Precision Targeting: Craft SEO-centric campaigns to engage
                    ideal customers and maximise ROI.
                  </li>
                  <li>
                    Data-Driven Optimisation: Employ SEO analytics for strategy
                    enhancement and better performance.
                  </li>
                </ul>
              </div>
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>PPC</h3>
                <ul>
                  <li>
                    Laser-focused campaigns that bring instant visibility to
                    target audiences, turning clicks into conversions and driving
                    measurable ROI
                  </li>
                  <li>
                    Laser-focused campaigns that bring instant visibility to
                    target audiences, turning clicks into conversions and driving
                    measurable ROI
                  </li>
                  <li>
                    Laser-focused campaigns that bring instant visibility to
                    target audiences, turning clicks into conversions and driving
                    measurable ROI
                  </li>
                </ul>
              </div>
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>WEB DESIGN</h3>
                <ul>
                  <li>
                    Building innovative solutions with flawless performance for
                    unmatched user experiences
                  </li>
                  <li>
                    Building innovative solutions with flawless performance for
                    unmatched user experiences
                  </li>
                  <li>
                    Building innovative solutions with flawless performance for
                    unmatched user experiences
                  </li>
                </ul>
              </div>
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>WEB DEVELOPMENT</h3>
                <ul>
                  <li>
                    Breathing life into your app concept by creating perfect
                    harmony between creativity and technology
                  </li>
                  <li>
                    Breathing life into your app concept by creating perfect
                    harmony between creativity and technology
                  </li>
                  <li>
                    Breathing life into your app concept by creating perfect
                    harmony between creativity and technology
                  </li>
                </ul>
              </div>
              <div className="services-bx">
                <figure>
                  <Image
                    src={ServiceIcon}
                    alt="Picture of the author"
                  />
                </figure>
                <h3>SALESFORCE</h3>
                <ul>
                  <li>
                    Preserving your brands value by keeping its image pristine
                    across various digital platforms
                  </li>
                  <li>
                    Preserving your brands value by keeping its image pristine
                    across various digital platforms
                  </li>
                  <li>
                    Preserving your brands value by keeping its image pristine
                    across various digital platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="start-project-outer">
        <div className="container">
          <div className="start-project-main">
            <h2>Start a project</h2>
            <p>
              Do you have a digital marketing objective youd like to achieve? Are
              you ready to find out how TIS can help to build your business
              online? If so, make contact with us today…
            </p>
            <a href="#"
            >REQUEST A QUOTE <i className="fa-solid fa-caret-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="through-digital-outer">
        <div className="container">
          <div className="head">
            <h3>Through bold digital designs</h3>
            <h2>
              innovative development & unique SEO techniques, weve snagged a few
              awards.
            </h2>
          </div>
          <div className="through-digital-tab">
            <ul className="nav nav-tabs d-none d-lg-flex" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  AWARDS
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  RECOGNITION
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  EXPERTISE
                </button>
              </li>
            </ul>
            <div className="tab-content accordion" id="myTabContent">
              <div
                className="tab-pane fade show active accordion-item"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <h2 className="accordion-header d-lg-none" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    AWARDS
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show d-lg-block"
                  aria-labelledby="headingOne"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    <div className="through-digital-bx">

                      <Image
                        src={ThroughBoxImg1}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg2}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg3}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg4}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg5}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg6}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg7}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg8}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade accordion-item"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <h2 className="accordion-header d-lg-none" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    RECOGNITION
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse d-lg-block"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg1}
                        alt="Picture of the author"
                      />

                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg2}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg3}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg4}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg5}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg6}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg7}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg8}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade accordion-item"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <h2 className="accordion-header d-lg-none" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    EXPERTISE
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse d-lg-block"
                  aria-labelledby="headingThree"
                  data-bs-parent="#myTabContent"
                >
                  <div className="accordion-body">
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg1}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg2}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg3}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg4}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg5}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg6}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg7}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="through-digital-bx">
                      <Image
                        src={ThroughBoxImg8}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="textmonail-outer">
        <div className="container">
          <div className="head">
            <h3>TESTIMONIALS</h3>
            <h2>What Our Client say</h2>
          </div>
          <div className="textmonail-slide">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="textmonail-row">
                  <div className="textmonail-logo">
                    <Image
                      src={IntwoLogo}
                      alt="Picture of the author"
                    />
                    <div className="star-rating">
                      <span className="fa fa-star" data-rating="1"></span>
                      <span className="fa fa-star" data-rating="2"></span>
                      <span className="fa fa-star" data-rating="3"></span>
                      <span className="fa fa-star" data-rating="4"></span>
                      <span className="fa fa-star" data-rating="5"></span>
                      <input type="hidden" name="whatever1" className="rating-value" value="2.56" />
                    </div>
                  </div>
                  <div className="textmonail-text">
                    <p>We couldnt be happier with the outstanding work DMA Netherlands delivered for us at Intwo! Their teams website design and development skills
                      are truly top-notch, and they transformed our online presence into something truly remarkable. Not only did they create a visually stunning
                      website, but they also took care of our SEO and paid ads strategy. The results were beyond our expectations! Our website traffic has
                      significantly increased, and our brand visibility has skyrocketed. Their attention to detail, creativity, and dedication to our project were
                      truly exceptional. We wholeheartedly recommend DMA Netherlands to anyone in need of web design, development, and digital marketing services.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textmonail-row">
                  <div className="textmonail-logo">
                    <Image
                      src={IntwoLogo}
                      alt="Picture of the author"
                    />
                    <div className="star-rating">
                      <span className="fa fa-star" data-rating="1"></span>
                      <span className="fa fa-star" data-rating="2"></span>
                      <span className="fa fa-star" data-rating="3"></span>
                      <span className="fa fa-star" data-rating="4"></span>
                      <span className="fa fa-star" data-rating="5"></span>
                      <input type="hidden" name="whatever1" className="rating-value" value="2.56" />
                    </div>
                  </div>
                  <div className="textmonail-text">
                    <p>We couldnt be happier with the outstanding work DMA Netherlands delivered for us at Intwo! Their teams website design and development skills
                      are truly top-notch, and they transformed our online presence into something truly remarkable. Not only did they create a visually stunning
                      website, but they also took care of our SEO and paid ads strategy. The results were beyond our expectations! Our website traffic has
                      significantly increased, and our brand visibility has skyrocketed. Their attention to detail, creativity, and dedication to our project were
                      truly exceptional. We wholeheartedly recommend DMA Netherlands to anyone in need of web design, development, and digital marketing services.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>


          </div>
        </div>
      </section>
      <section className="about-digitech-outer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-7 col-md-7 col-sm-7 col-xs-12 about-digitech-left">
              <h3>about tis digitech</h3>
              <h2>A Leading Digital Marketing Agency in the UK</h2>
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
              <h4>Strengthening Your Digital Presence</h4>
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            <div className="col col-lg-5 col-md-5 col-sm-5 col-xs-12 about-digitech-right">
              <figure>
                <Image
                  src={AboutDigiImgSm1}
                  alt="Picture of the author"
                />
                <div className="about-small">
                  <div className="about-small-sm">

                    <Image
                      src={AboutDigiImgSm2}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="about-small-sm">
                    <Image
                      src={AboutDigiImgSm}
                      alt="Picture of the author"
                    />

                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="role-digital-marketing-outer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-12 role-digital-left">
              <figure>
                <Image
                  src={DigiRoleImg}
                  alt="Picture of the author"
                />

                <div className="role-digital-sm">
                  <Image
                    src={DigiRoleImgSm}
                    alt="Picture of the author"
                  />
                </div>
              </figure>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-12 role-digital-right">
              <h4>The Role of a Digital Marketing Agency</h4>
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.</p>
              <h4>Your Digital Success Partner</h4>
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="your-bussnies-growth-outer">
        <div className="container">
          <div className="your-bussnies-growth-main row">
            <div className="your-growth-left col col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <h3>TAKE THE ROAD TO</h3>
              <h2>Digitizing Your Business Growth</h2>
              <div className="socail-growth">
                <h3>fOLLOW US</h3>
                <ul>
                  <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="your-growth-right col col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <h4>Start A Conversation With Us</h4>
              <form>
                <div className="growth-bx">
                  <span>
                    <Image
                      src={FooterIcon1}
                      alt="Picture of the author"
                    />

                  </span>
                  <input type="text" placeholder="Name*" />
                </div>
                <div className="growth-bx">
                  <span>
                    <Image
                      src={FooterIcon2}
                      alt="Picture of the author"
                    />
                  </span>
                  <input type="text" placeholder="company name*" />
                </div>
                <div className="growth-bx">
                  <span>
                    <Image
                      src={FooterIcon3}
                      alt="Picture of the author"
                    />
                  </span>
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="growth-bx">
                  <span>
                    <Image
                      src={FooterIcon4}
                      alt="Picture of the author"
                    />
                  </span>
                  <input type="text" placeholder="Phone*" />
                </div>
                <div className="growth-bx">
                  <span>
                    <Image
                      src={FooterIcon5}
                      alt="Picture of the author"
                    />
                  </span>
                  <input type="text" placeholder="Your Message*" />
                </div>
                <div className="growth-submit">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
};