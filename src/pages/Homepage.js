import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onIconCartClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onActivitesTextClick = useCallback(() => {
    navigate("/actvities");
  }, [navigate]);

  const onMapTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onEatTextClick = useCallback(() => {
    navigate("/khaabe");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onKahaniTextClick = useCallback(() => {
    navigate("/kahani");
  }, [navigate]);

  const onIconEnvelopeClosedClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

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

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/legal-policy");
  }, [navigate]);

  const onMapsTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="navbar6">
        <img
          className="icon21"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon9"
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart6"
          alt=""
          src="/-icon-cart.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery10" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites6" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map6" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat6" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events9" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani7" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed6"
          alt=""
          src="/-icon-envelope-closed2.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="group-parent2">
        <div className="rectangle-parent4">
          <div className="group-child6" />
          <div className="rectangle-parent5">
            <video
              className="frame"
              autoPlay
              muted
              loop
              onLoadStart={(e) => (e.target.volume = 0)}
              data-animate-on-scroll
            >
              <source src="/intro1.mp4" />
            </video>
            <div className="intro-11" />
            <div className="lahore4">Lahore</div>
            <div className="heart-of-pakistan1">Heart of Pakistan</div>
          </div>
          <div className="group-frame">
            <div className="group-parent3">
              <div className="rectangle-parent6">
                <div className="group-child7" />
                <img
                  className="image-118-icon1"
                  alt=""
                  src="/image-118@2x.png"
                />
                <div className="wazir-khan-mosque1">Wazir Khan Mosque</div>
                <div className="the-wazir-khan1">
                  The Wazir Khan Mosque is a 17th-century mosque located in old
                  Lahore. The mosque was commissioned during the reign of the
                  Mughal Emperor Shah Jahan as a part of an ensemble of
                  buildings that also included the nearby Shahi Hammam baths
                </div>
              </div>
              <div className="rectangle-parent7">
                <div className="group-child8" />
                <div className="wazir-khan-mosque1">Gali Surjan Singh</div>
                <div className="gali-surjan-singh3">
                  Gali Surjan Singh was named after Hakim Surjan Singh, the 19th
                  century physician who lived in the street. He had cured many
                  royals and that is why the street was named after him and
                  because of his popularity, the street was named after him.
                </div>
                <img
                  className="image-119-icon4"
                  alt=""
                  src="/image-1194@2x.png"
                />
              </div>
              <div className="rectangle-parent8">
                <div className="group-child8" />
                <div className="wazir-khan-mosque1">Shalamar Gardens</div>
                <div className="the-shalamar-gardens-container2">
                  <span className="the-shalamar-gardens-container3">
                    {`The Shalamar Gardens are a `}
                    <a
                      className="mughal-garden2"
                      href="https://en.wikipedia.org/wiki/Mughal_garden"
                      target="_blank"
                    >
                      <span className="mughal-garden3">Mughal garden</span>
                    </a>
                    {` complex located in `}
                    <a
                      className="mughal-garden2"
                      href="https://en.wikipedia.org/wiki/Lahore"
                      target="_blank"
                    >
                      <span className="mughal-garden3">Lahore</span>
                    </a>
                    , Pakistan. The gardens date from the period when the Mughal
                    Empire was at its artistic and aesthetic zenith, and are now
                    one of Pakistan's most popular tourist destinations
                  </span>
                </div>
                <img
                  className="image-119-icon5"
                  alt=""
                  src="/image-1191@2x.png"
                />
                <div className="rectangle-parent9">
                  <div className="group-child8" />
                  <div className="lahore-railway-station2">
                    Lahore Railway Station
                  </div>
                  <div className="the-wazir-khan1">
                    Lahore Railway Station, which is also known as the Lahore
                    railway junction, is one of the oldest and busiest railway
                    junctions in Pakistan. Dozens of passenger trains and cargo
                    carriages make use of the Lahore junction station for large
                    scale movements of the railway traffic.
                  </div>
                  <img
                    className="image-119-icon6"
                    alt=""
                    src="/image-1192@2x.png"
                  />
                  <div className="rectangle-parent10">
                    <div className="group-child8" />
                    <div className="food-street1">Food Street</div>
                    <div className="food-street-in-container2">
                      <span className="the-shalamar-gardens-container3">
                        {`Food street in Lahore is one of the must-see places. Located in the heart of the city between Fort road and Roshnai gate, it is filled with all sorts of cuisines to satisfy all food cravings.With music playing in the street and a glorious view of the `}
                        <a
                          className="mughal-garden2"
                          href="https://visitlahore.com/attractions/badshahi-mosque/"
                          target="_blank"
                        >
                          <span className="mughal-garden3">
                            Badshahi Mosque
                          </span>
                        </a>
                        , it is the perfect way to spend your evening.
                      </span>
                    </div>
                    <img
                      className="image-119-icon6"
                      alt=""
                      src="/image-1193@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-parent4">
            <div className="lahore-group">
              <div className="lahore7">Lahore</div>
              <div className="area-1772-km2-container2">
                <span className="the-shalamar-gardens-container3">
                  <p className="area-1772-km2-684-sq-mi1">
                    <span className="area4">{`Area: `}</span>
                    <span className="km2-684-sq1">{`1,772 km2 (684 sq mi) `}</span>
                  </p>
                  <p className="area-1772-km2-684-sq-mi1">
                    <span className="area4">{`Mayor: `}</span>
                    <span className="km2-684-sq1">Usman Younis</span>
                  </p>
                  <p className="area-1772-km2-684-sq-mi1">
                    <span className="area4">{`Province: `}</span>
                    <span className="km2-684-sq1">Punjab</span>
                  </p>
                  <p className="area-1772-km2-684-sq-mi1">
                    <span className="area4">{`Population: `}</span>
                    <span>{`11.13 million (2017) `}</span>
                    <a
                      className="mughal-garden2"
                      href={`http://data.un.org/Data.aspx?d=POP&amp;f=tableCode%3A240`}
                      target="_blank"
                    >
                      <span>
                        <span className="mughal-garden3">United Nations</span>
                      </span>
                    </a>
                  </p>
                  <p className="area-1772-km2-684-sq-mi1">
                    <span className="area4">{`Postal Code: `}</span>
                    <span className="km2-684-sq1">54000</span>
                  </p>
                </span>
              </div>
              <div className="lahore-is-the-container2">
                <span className="the-shalamar-gardens-container3">
                  {`Lahore  is the `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/List_of_cities_in_Pakistan_by_population"
                    target="_blank"
                  >
                    <span className="mughal-garden3">second most populous</span>
                  </a>
                  {` city in `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Pakistan"
                    target="_blank"
                  >
                    <span className="mughal-garden3">Pakistan</span>
                  </a>
                  {` after `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Karachi"
                    target="_blank"
                  >
                    <span className="mughal-garden3">Karachi</span>
                  </a>
                  {` and 26th `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/List_of_largest_cities"
                    target="_blank"
                  >
                    <span className="mughal-garden3">
                      most populous city in the world
                    </span>
                  </a>
                  {`, with a population of over 13 million. It is the capital of the `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Provinces_of_Pakistan"
                    target="_blank"
                  >
                    <span className="mughal-garden3">province</span>
                  </a>
                  {` of `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Punjab,_Pakistan"
                    target="_blank"
                  >
                    <span className="mughal-garden3">Punjab</span>
                  </a>{" "}
                  where it is the largest city. Lahore is one of Pakistan's
                  major industrial and economic hubs, with an estimated GDP (
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Purchasing_power_parity"
                    target="_blank"
                  >
                    <span className="mughal-garden3">PPP</span>
                  </a>
                  {`) of $84 billion as of 2019. It is the largest city as well as the historic capital and cultural center of the wider `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Punjab_region"
                    target="_blank"
                  >
                    <span className="mughal-garden3">Punjab region</span>
                  </a>
                  {`, and is one of Pakistan's most `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Social_liberalism"
                    target="_blank"
                  >
                    <span className="mughal-garden3">socially liberal</span>
                  </a>
                  {`, `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Progressivism"
                    target="_blank"
                  >
                    <span className="mughal-garden3">progressive</span>
                  </a>
                  {`, and `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Cosmopolitanism"
                    target="_blank"
                  >
                    <span className="mughal-garden3">cosmopolitan</span>
                  </a>
                  {` cities. It is situated in `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/Geography_of_Pakistan"
                    target="_blank"
                  >
                    <span className="mughal-garden3">
                      the northeast of the country
                    </span>
                  </a>
                  {`, close to the `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/India-Pakistan_border"
                    target="_blank"
                  >
                    <span className="mughal-garden3">international border</span>
                  </a>
                  {` with `}
                  <a
                    className="mughal-garden2"
                    href="https://en.wikipedia.org/wiki/India"
                    target="_blank"
                  >
                    <span className="mughal-garden3">India</span>
                  </a>
                  .
                </span>
              </div>
            </div>
            <img className="image-120-icon1" alt="" src="/image-120@2x.png" />
          </div>
          <div className="footer-371">
            <div className="footer-37-child2" />
            <b className="subscribe-to-newsletter7">Subscribe to Newsletter</b>
            <b className="follow-us7">Follow Us</b>
            <div className="footer-37-child3" />
            <div className="text7" />
            <div className="privacy-policy-parent5">
              <div
                className="privacy-policy7"
                onClick={onPrivacyPolicyTextClick}
              >
                Privacy Policy
              </div>
              <div className="maps8" onClick={onMapsTextClick}>
                Maps
              </div>
              <div className="shop7" onClick={onShopTextClick}>
                Shop
              </div>
              <div className="contact-us8" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
            <div className="copyright7">
              <div className="all-rights-reserved7">
                © 2023 All Rights Reserved
              </div>
            </div>
            <div className="subscribe14">
              <div className="subscribe-child5" />
              <div className="enter-your-email7">Enter your email Address</div>
              <div className="buttonstarted7">
                <div className="subscribe15">Subscribe</div>
              </div>
            </div>
            <div className="image-41-parent5">
              <img className="image-41-icon7" alt="" src="/image-41@2x.png" />
              <img className="image-42-icon7" alt="" src="/image-42@2x.png" />
              <img className="image-43-icon7" alt="" src="/image-43@2x.png" />
            </div>
            <img className="icon22" alt="" src="/-1-11@2x.png" />
            <div className="footer-37-child4" />
            <img className="footer-37-child5" alt="" src="/ellipse-18.svg" />
            <img className="footer-37-child6" alt="" src="/ellipse-19.svg" />
            <img className="image-135-icon7" alt="" src="/image-135@2x.png" />
            <img className="image-136-icon7" alt="" src="/image-136@2x.png" />
            <img className="image-137-icon7" alt="" src="/image-137@2x.png" />
            <img className="image-134-icon7" alt="" src="/image-134@2x.png" />
          </div>
        </div>
        <div className="see-more-">{`See more -> `}</div>
      </div>
    </div>
  );
};

export default Homepage;
