import parse from "html-react-parser";
import Link from "next/link";
import FooterIcon2 from "../../public/assets/img/footer-ico2.webp";
import FooterIcon3 from "../../public/assets/img/footer-ico3.webp";
import FooterIcon5 from "../../public/assets/img/footer-ico5.webp";
import Image from "next/image";
export const Footer = () => {

  return (
    <>
      <section className="footer-outer">
        <div className="container">
          <div className="our-office">
            <h3>our offices</h3>
            <h2>global Presence</h2>
            <div className="global-oofice">
              <div className="office-bx">
                <h3>LONDON</h3>
                <ul>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon2}
                        alt="Picture of the author"
                      />

                    </span>
                    <span className="office-text">13 Austin Friars,London,EC2N 2HE</span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon3}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="tel:+44 208 338 1206">+44 208 338 1206</a></span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon5}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="mailto:info@tisdigitech.ca"></a> info@tisdigitech.ca</span>
                  </li>
                </ul>
              </div>
              <div className="office-bx">
                <h3>LONDON</h3>
                <ul>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon2}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text">13 Austin Friars,London,EC2N 2HE</span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon3}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="tel:+44 208 338 1206">+44 208 338 1206</a></span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon5}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="mailto:info@tisdigitech.ca"></a> info@tisdigitech.ca</span>
                  </li>
                </ul>
              </div>
              <div className="office-bx">
                <h3>LONDON</h3>
                <ul>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon2}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text">13 Austin Friars,London,EC2N 2HE</span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon3}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="tel:+44 208 338 1206">+44 208 338 1206</a></span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon5}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="mailto:info@tisdigitech.ca"></a> info@tisdigitech.ca</span>
                  </li>
                </ul>
              </div>
              <div className="office-bx">
                <h3>LONDON</h3>
                <ul>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon2}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text">13 Austin Friars,London,EC2N 2HE</span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon3}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="tel:+44 208 338 1206">+44 208 338 1206</a></span>
                  </li>
                  <li>
                    <span className="office-ico">
                      <Image
                        src={FooterIcon5}
                        alt="Picture of the author"
                      />
                    </span>
                    <span className="office-text"><a href="mailto:info@tisdigitech.ca"></a> info@tisdigitech.ca</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-bx">
              <div className="footer-logo">
                <Image
                  src={FooterIcon5}
                  alt="Picture of the author"
                />
              </div>
              <p>A multi award winning digital agency based in the United Kingdom. </p>
            </div>
            <div className="footer-bx footer-bx-dobule">
              <h3>services</h3>
              <ul>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Web Design </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Seo </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i>PPC</a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Website Development</a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Creative  </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i>Social Media</a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Web Design </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Seo </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i>PPC</a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Website Development</a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Creative  </a>
                </li>
                <li>
                  <a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i>Social Media</a>
                </li>
              </ul>
            </div>
            <div className="footer-bx">
              <h3>legal</h3>
              <ul>
                <li><a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Terms & Conditions</a></li>
                <li><a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Nominet Terms</a></li>
                <li><a href="#"><i className="fa-solid fa-caret-right" aria-hidden="true"></i> Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
