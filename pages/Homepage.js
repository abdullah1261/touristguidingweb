import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
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

  return (
    <div className="homepage">
      <div className="group-parent1">
        <div className="rectangle-parent44">
          <video
            className="wrapper"
            autoPlay
            muted
            loop
            onLoadStart={(e) => (e.target.volume = 0)}
            data-animate-on-scroll
          >
            <source src="/intro.mp4" />
          </video>
          <div className="intro-1" />
          <div className="lahore4">Lahore</div>
          <div className="heart-of-pakistan">Heart of Pakistan</div>
        </div>
        <div className="image-90-parent">
          <div className="image-90" />
          <div className="group-child34" />
          <div className="group-child35" />
          <img className="image-100-icon" alt="" src="/image-100@2x.png" />
          <div className="gallery3" onClick={onGalleryTextClick}>
            Gallery
          </div>
          <div className="khabay">Khabay</div>
          <div className="news3">News</div>
          <div className="kahani2">Kahani</div>
          <div className="activities3">Activities</div>
          <div className="maps3" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="recs2">Recs</div>
          <div className="contact-us7" onClick={onContactUsTextClick}>
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
          <div className="group-child36" />
        </div>
        <div className="group-wrapper7">
          <div className="group-parent2">
            <div className="rectangle-parent45">
              <div className="group-child37" />
              <img
                className="image-118-icon1"
                alt=""
                src="/image-1181@2x.png"
              />
              <div className="wazir-khan-mosque1">Wazir Khan Mosque</div>
              <div className="the-wazir-khan1">
                The Wazir Khan Mosque is a 17th-century mosque located in old
                Lahore. The mosque was commissioned during the reign of the
                Mughal Emperor Shah Jahan as a part of an ensemble of buildings
                that also included the nearby Shahi Hammam baths
              </div>
            </div>
            <div className="rectangle-parent46">
              <div className="group-child38" />
              <div className="wazir-khan-mosque1">Gali Surjan Singh</div>
              <div className="gali-surjan-singh3">
                Gali Surjan Singh was named after Hakim Surjan Singh, the 19th
                century physician who lived in the street. He had cured many
                royals and that is why the street was named after him and
                because of his popularity, the street was named after him.
              </div>
              <img
                className="image-119-icon14"
                alt=""
                src="/image-11914@2x.png"
              />
            </div>
            <div className="rectangle-parent47">
              <div className="group-child38" />
              <div className="wazir-khan-mosque1">Shalamar Gardens</div>
              <div className="the-shalamar-gardens-container2">
                <span className="the-shalamar-gardens-container3">
                  {`The Shalamar Gardens are a `}
                  <a
                    className="united-nations"
                    href="https://en.wikipedia.org/wiki/Mughal_garden"
                    target="_blank"
                  >
                    <span className="most-populous-city">Mughal garden</span>
                  </a>
                  {` complex located in `}
                  <a
                    className="united-nations"
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
                className="image-119-icon14"
                alt=""
                src="/image-11915@2x.png"
              />
              <div className="rectangle-parent48">
                <div className="group-child38" />
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
                  className="image-119-icon14"
                  alt=""
                  src="/image-11916@2x.png"
                />
                <div className="rectangle-parent49">
                  <div className="group-child38" />
                  <div className="food-street1">Food Street</div>
                  <div className="food-street-in-container2">
                    <span className="the-shalamar-gardens-container3">
                      {`Food street in Lahore is one of the must-see places. Located in the heart of the city between Fort road and Roshnai gate, it is filled with all sorts of cuisines to satisfy all food cravings.With music playing in the street and a glorious view of the `}
                      <a
                        className="united-nations"
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
                    className="image-119-icon14"
                    alt=""
                    src="/image-11917@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-parent3">
          <div className="lahore-container">
            <div className="lahore7">Lahore</div>
            <div className="area-1772-km2-container">
              <span className="the-shalamar-gardens-container3">
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
                    className="united-nations"
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
              <span className="the-shalamar-gardens-container3">
                {`Lahore  is the `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/List_of_cities_in_Pakistan_by_population"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    second most populous
                  </span>
                </a>
                {` city in `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">Pakistan</span>
                </a>
                {` after `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Karachi"
                  target="_blank"
                >
                  <span className="most-populous-city">Karachi</span>
                </a>
                {` and 26th `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/List_of_largest_cities"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    most populous city in the world
                  </span>
                </a>
                {`, with a population of over 13 million. It is the capital of the `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Provinces_of_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">province</span>
                </a>
                {` of `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Punjab,_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">Punjab</span>
                </a>{" "}
                where it is the largest city. Lahore is one of Pakistan's major
                industrial and economic hubs, with an estimated GDP (
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Purchasing_power_parity"
                  target="_blank"
                >
                  <span className="most-populous-city">PPP</span>
                </a>
                {`) of $84 billion as of 2019. It is the largest city as well as the historic capital and cultural center of the wider `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Punjab_region"
                  target="_blank"
                >
                  <span className="most-populous-city">Punjab region</span>
                </a>
                {`, and is one of Pakistan's most `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Social_liberalism"
                  target="_blank"
                >
                  <span className="most-populous-city">socially liberal</span>
                </a>
                {`, `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Progressivism"
                  target="_blank"
                >
                  <span className="most-populous-city">progressive</span>
                </a>
                {`, and `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Cosmopolitanism"
                  target="_blank"
                >
                  <span className="most-populous-city">cosmopolitan</span>
                </a>
                {` cities. It is situated in `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/Geography_of_Pakistan"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    the northeast of the country
                  </span>
                </a>
                {`, close to the `}
                <a
                  className="united-nations"
                  href="https://en.wikipedia.org/wiki/India-Pakistan_border"
                  target="_blank"
                >
                  <span className="most-populous-city">
                    international border
                  </span>
                </a>
                {` with `}
                <a
                  className="united-nations"
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
      </div>
      <img className="navbar-icon7" alt="" src="/navbar7.svg" />
    </div>
  );
};

export default Homepage;
