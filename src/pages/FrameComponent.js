import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";
const FrameComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onMapsTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onImage103Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onImage104Click = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onImage105Click = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/legal-policy");
  }, [navigate]);

  const onMapsText1Click = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactUsText1Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="group-parent">
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="rectangle-group">
          <video
            className="wrapper"
            autoPlay
            muted
            loop
            onLoadStart={(e) => (e.target.volume = 0)}
            data-animate-on-scroll
          >
            <source src="/intro1.mp4" />
          </video>
          <div className="intro-1" />
          <div className="lahore">Lahore</div>
          <div className="heart-of-pakistan">Heart of Pakistan</div>
        </div>
        <div className="image-90-parent">
          <div className="image-90" />
          <div className="group-item" />
          <div className="group-inner" />
          <img className="image-100-icon" alt="" src="/image-100@2x.png" />
          <div className="gallery" onClick={onGalleryTextClick}>
            Gallery
          </div>
          <div className="khabay">Khabay</div>
          <div className="news">News</div>
          <div className="kahani">Kahani</div>
          <div className="activities">Activities</div>
          <div className="maps" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="recs">Recs</div>
          <div className="contact-us" onClick={onContactUsTextClick}>
            Contact Us
          </div>
          <img className="image-101-icon" alt="" src="/image-101@2x.png" />
          <div className="image-102" />
          <img
            className="image-103-icon"
            alt=""
            src="/image-103@2x.png"
            onClick={onImage103Click}
          />
          <img
            className="image-104-icon"
            alt=""
            src="/image-104@2x.png"
            onClick={onImage104Click}
          />
          <img
            className="image-105-icon"
            alt=""
            src="/image-105@2x.png"
            onClick={onImage105Click}
          />
          <img className="image-106-icon" alt="" src="/image-106@2x.png" />
          <img className="image-107-icon" alt="" src="/image-107@2x.png" />
          <img className="image-108-icon" alt="" src="/image-108@2x.png" />
          <div className="rectangle-div" />
        </div>
        <div className="group-wrapper">
          <div className="group-container">
            <div className="rectangle-container">
              <div className="group-child1" />
              <img className="image-118-icon" alt="" src="/image-118@2x.png" />
              <div className="wazir-khan-mosque">Wazir Khan Mosque</div>
              <div className="the-wazir-khan">
                The Wazir Khan Mosque is a 17th-century mosque located in old
                Lahore. The mosque was commissioned during the reign of the
                Mughal Emperor Shah Jahan as a part of an ensemble of buildings
                that also included the nearby Shahi Hammam baths
              </div>
            </div>
            <div className="group-div">
              <div className="group-child2" />
              <div className="wazir-khan-mosque">Gali Surjan Singh</div>
              <div className="gali-surjan-singh1">
                Gali Surjan Singh was named after Hakim Surjan Singh, the 19th
                century physician who lived in the street. He had cured many
                royals and that is why the street was named after him and
                because of his popularity, the street was named after him.
              </div>
              <img className="image-119-icon" alt="" src="/image-119@2x.png" />
            </div>
            <div className="rectangle-parent1">
              <div className="group-child2" />
              <div className="wazir-khan-mosque">Shalamar Gardens</div>
              <div className="the-shalamar-gardens-container">
                <span className="the-shalamar-gardens-container1">
                  {`The Shalamar Gardens are a `}
                  <a
                    className="mughal-garden"
                    href="https://en.wikipedia.org/wiki/Mughal_garden"
                    target="_blank"
                  >
                    <span className="most-populous-city">Mughal garden</span>
                  </a>
                  {` complex located in `}
                  <a
                    className="mughal-garden"
                    href="https://en.wikipedia.org/wiki/Lahore"
                    target="_blank"
                  >
                    <span className="most-populous-city">Lahore</span>
                  </a>
                  , Pakistan. The gardens date from the period when the Mughal
                  Empire was at its artistic and aesthetic zenith, and are now
                  one of Pakistan's most popular tourist destinations
                </span>
              </div>
              <img
                className="image-119-icon1"
                alt=""
                src="/image-1191@2x.png"
              />
              <div className="rectangle-parent2">
                <div className="group-child2" />
                <div className="lahore-railway-station">
                  Lahore Railway Station
                </div>
                <div className="the-wazir-khan">
                  Lahore Railway Station, which is also known as the Lahore
                  railway junction, is one of the oldest and busiest railway
                  junctions in Pakistan. Dozens of passenger trains and cargo
                  carriages make use of the Lahore junction station for large
                  scale movements of the railway traffic.
                </div>
                <img
                  className="image-119-icon2"
                  alt=""
                  src="/image-1192@2x.png"
                />
                <div className="rectangle-parent3">
                  <div className="group-child2" />
                  <div className="food-street">Food Street</div>
                  <div className="food-street-in-container">
                    <span className="the-shalamar-gardens-container1">
                      {`Food street in Lahore is one of the must-see places. Located in the heart of the city between Fort road and Roshnai gate, it is filled with all sorts of cuisines to satisfy all food cravings.With music playing in the street and a glorious view of the `}
                      <a
                        className="mughal-garden"
                        href="https://visitlahore.com/attractions/badshahi-mosque/"
                        target="_blank"
                      >
                        <span className="most-populous-city">
                          Badshahi Mosque
                        </span>
                      </a>
                      , it is the perfect way to spend your evening.
                    </span>
                  </div>
                  <img
                    className="image-119-icon2"
                    alt=""
                    src="/image-1193@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-parent1">
          <div className="lahore-parent">
            <div className="lahore3">Lahore</div>
            <div className="area-1772-km2-container">
              <span className="the-shalamar-gardens-container1">
                <p className="area-1772-km2-684-sq-mi">
                  <span className="area">{`Area: `}</span>
                  <span className="km2-684-sq">{`1,772 km2 (684 sq mi) `}</span>
                </p>
                <p className="area-1772-km2-684-sq-mi">
                  <span className="area">{`Mayor: `}</span>
                  <span className="km2-684-sq">Usman Younis</span>
                </p>
                <p className="area-1772-km2-684-sq-mi">
                  <span className="area">{`Province: `}</span>
                  <span className="km2-684-sq">Punjab</span>
                </p>
                <p className="area-1772-km2-684-sq-mi">
                  <span className="area">{`Population: `}</span>
                  <span>{`11.13 million (2017) `}</span>
                  <a
                    className="mughal-garden"
                    href={`http://data.un.org/Data.aspx?d=POP&amp;f=tableCode%3A240`}
                    target="_blank"
                  >
                    <span>
                      <span className="most-populous-city">United Nations</span>
                    </span>
                  </a>
                </p>
                <p className="area-1772-km2-684-sq-mi">
                  <span className="area">{`Postal Code: `}</span>
                  <span className="km2-684-sq">54000</span>
                </p>
              </span>
            </div>
            <div className="lahore-is-the-container">
              <span className="the-shalamar-gardens-container1">
                {`Lahore  is the `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/List_of_cities_in_Pakistan_by_population"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    second most populous
                  </span>
                </a>
                {` city in `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">Pakistan</span>
                </a>
                {` after `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Karachi"
                  target="_blank"
                >
                  <span className="most-populous-city">Karachi</span>
                </a>
                {` and 26th `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/List_of_largest_cities"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    most populous city in the world
                  </span>
                </a>
                {`, with a population of over 13 million. It is the capital of the `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Provinces_of_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">province</span>
                </a>
                {` of `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Punjab,_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">Punjab</span>
                </a>{" "}
                where it is the largest city. Lahore is one of Pakistan's major
                industrial and economic hubs, with an estimated GDP (
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Purchasing_power_parity"
                  target="_blank"
                >
                  <span className="most-populous-city">PPP</span>
                </a>
                {`) of $84 billion as of 2019. It is the largest city as well as the historic capital and cultural center of the wider `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Punjab_region"
                  target="_blank"
                >
                  <span className="most-populous-city">Punjab region</span>
                </a>
                {`, and is one of Pakistan's most `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Social_liberalism"
                  target="_blank"
                >
                  <span className="most-populous-city">socially liberal</span>
                </a>
                {`, `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Progressivism"
                  target="_blank"
                >
                  <span className="most-populous-city">progressive</span>
                </a>
                {`, and `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Cosmopolitanism"
                  target="_blank"
                >
                  <span className="most-populous-city">cosmopolitan</span>
                </a>
                {` cities. It is situated in `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Geography_of_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    the northeast of the country
                  </span>
                </a>
                {`, close to the `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/India-Pakistan_border"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    international border
                  </span>
                </a>
                {` with `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/India"
                  target="_blank"
                >
                  <span className="most-populous-city">India</span>
                </a>
                .
              </span>
            </div>
          </div>
          <img className="image-120-icon" alt="" src="/image-120@2x.png" />
        </div>
        <div className="footer-37">
          <div className="footer-37-child" />
          <b className="subscribe-to-newsletter">Subscribe to Newsletter</b>
          <b className="follow-us">Follow Us</b>
          <div className="footer-37-item" />
          <div className="text" />
          <div className="privacy-policy-parent">
            <div className="privacy-policy" onClick={onPrivacyPolicyTextClick}>
              Privacy Policy
            </div>
            <div className="maps1" onClick={onMapsText1Click}>
              Maps
            </div>
            <div className="shop" onClick={onShopTextClick}>
              Shop
            </div>
            <div className="contact-us1" onClick={onContactUsText1Click}>
              Contact Us
            </div>
          </div>
          <div className="copyright">
            <div className="all-rights-reserved">
              © 2023 All Rights Reserved
            </div>
          </div>
          <div className="subscribe">
            <div className="subscribe-child" />
            <div className="enter-your-email">Enter your email Address</div>
            <div className="buttonstarted">
              <div className="subscribe1">Subscribe</div>
            </div>
          </div>
          <div className="image-41-parent">
            <img className="image-41-icon" alt="" src="/image-41@2x.png" />
            <img className="image-42-icon" alt="" src="/image-42@2x.png" />
            <img className="image-43-icon" alt="" src="/image-43@2x.png" />
          </div>
          <img className="icon" alt="" src="/-1-11@2x.png" />
          <div className="footer-37-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-18.svg" />
          <img className="footer-37-child1" alt="" src="/ellipse-19.svg" />
          <img className="image-135-icon" alt="" src="/image-135@2x.png" />
          <img className="image-136-icon" alt="" src="/image-136@2x.png" />
          <img className="image-137-icon" alt="" src="/image-137@2x.png" />
          <img className="image-134-icon" alt="" src="/image-134@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
