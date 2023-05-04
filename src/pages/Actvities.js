import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Actvities.css";
const Actvities = () => {
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

  const onImage122Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='adrenalineRushText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onImage121Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onImage123Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
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

  const onImage1Click = useCallback(() => {
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

  return (
    <div className="actvities" data-animate-on-scroll>
      <div className="actvities-child" />
      <div className="rectangle-parent27">
        <div className="group-child28" />
        <div className="image-126-group">
          <img className="image-126-icon1" alt="" src="/image-126@2x.png" />
          <img className="image-125-icon1" alt="" src="/image-125@2x.png" />
          <img className="image-124-icon1" alt="" src="/image-124@2x.png" />
          <img
            className="image-122-icon1"
            alt=""
            src="/image-122@2x.png"
            onClick={onImage122Click}
          />
          <img
            className="image-121-icon1"
            alt=""
            src="/image-121@2x.png"
            onClick={onImage121Click}
          />
          <img
            className="image-123-icon1"
            alt=""
            src="/image-123@2x.png"
            onClick={onImage123Click}
          />
          <div className="historical-site-visit2">Historical Site Visit</div>
          <div className="adrenaline-rush2">Adrenaline Rush</div>
          <div className="activities5">Activities</div>
          <div className="shopping2">Shopping</div>
        </div>
        <div
          className="historical-site-visit-group"
          data-scroll-to="groupContainer1"
        >
          <div className="historical-site-visit3">Historical Site Visit</div>
          <div className="rectangle-parent28">
            <div className="group-child29" />
            <img className="image-118-icon3" alt="" src="/image-1182@2x.png" />
            <div className="wazir-khan-mosque3">Wazir Khan Mosque</div>
            <div className="the-wazir-khan3">
              The Wazir Khan Mosque is a 17th-century mosque located in old
              Lahore. The mosque was commissioned during the reign of the Mughal
              Emperor Shah Jahan as a part of an ensemble of buildings that also
              included the nearby Shahi Hammam baths
            </div>
          </div>
          <div className="rectangle-parent29">
            <div className="group-child30" />
            <div className="gali-surjan-singh6">Gali Surjan Singh</div>
            <div className="gali-surjan-singh7">
              Gali Surjan Singh was named after Hakim Surjan Singh, the 19th
              century physician who lived in the street. He had cured many
              royals and that is why the street was named after him and because
              of his popularity, the street was named after him.
            </div>
            <img
              className="image-119-icon22"
              alt=""
              src="/image-11919@2x.png"
            />
          </div>
          <div className="rectangle-parent30">
            <div className="group-child30" />
            <div className="shalamar-gardens3">Shalamar Gardens</div>
            <div className="the-shalamar-gardens-container6">
              <span className="the-shalamar-gardens-container7">
                {`The Shalamar Gardens are a `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Mughal_garden"
                  target="_blank"
                >
                  <span className="mughal-garden7">Mughal garden</span>
                </a>
                {` complex located in `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Lahore"
                  target="_blank"
                >
                  <span className="mughal-garden7">Lahore</span>
                </a>
                , Pakistan. The gardens date from the period when the Mughal
                Empire was at its artistic and aesthetic zenith, and are now one
                of Pakistan's most popular tourist destinations
              </span>
            </div>
            <img
              className="image-119-icon22"
              alt=""
              src="/image-11920@2x.png"
            />
          </div>
          <div className="group-wrapper10">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="lahore-railway-station6">
                Lahore Railway Station
              </div>
              <div className="lahore-railway-station7">
                Lahore Railway Station, which is also known as the Lahore
                railway junction, is one of the oldest and busiest railway
                junctions in Pakistan. Dozens of passenger trains and cargo
                carriages make use of the Lahore junction station for large
                scale movements of the railway traffic.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11921@2x.png"
              />
            </div>
          </div>
          <div className="rectangle-parent32">
            <div className="group-child30" />
            <div className="food-street3">Food Street</div>
            <div className="food-street-in-container6">
              <span className="the-shalamar-gardens-container7">
                {`Food street in Lahore is one of the must-see places. Located in the heart of the city between Fort road and Roshnai gate, it is filled with all sorts of cuisines to satisfy all food cravings.With music playing in the street and a glorious view of the `}
                <a
                  className="mughal-garden6"
                  href="https://visitlahore.com/attractions/badshahi-mosque/"
                  target="_blank"
                >
                  <span className="mughal-garden7">Badshahi Mosque</span>
                </a>
                , it is the perfect way to spend your evening.
              </span>
            </div>
            <img
              className="image-119-icon25"
              alt=""
              src="/image-11922@2x.png"
            />
          </div>
        </div>
        <div className="adrenaline-rush-group">
          <div className="adrenaline-rush3" data-scroll-to="adrenalineRushText">
            Adrenaline Rush
          </div>
          <div className="group-wrapper11">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="joyland1">{`Joyland `}</div>
              <div className="joyland-is-a1">
                Joyland is a Pakistani amusement park company based in Lahore,
                Punjab, Pakistan. The park, adjacent to Fortress Stadium, was
                established in 1977 and is one of the largest recreation parks
                in the city. It is spread out over an area of 6 acres.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-1199@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper12">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="go-karting1">Go Karting</div>
              <div className="are-you-ready1">
                Are you ready to start your engines and race at Pakistan’s first
                International Level Go Karting Track? The 2F2F Formula Karting
                track has got you covered. You can fuel your need for speed by
                racing at the largest go Karting Track in Pakistan. Whether you
                are an adult, or a youngster looking for some extreme sport,
                2F2F Karting has excellent opportunities for you.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11910@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper13">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="joyland1">Laser Tag</div>
              <div className="located-in-emporium1">
                Located in emporium mall, packages mall and mall of Lahore is
                one of the most fun games; Laser Tag. Laser tag is a
                recreational shooting sport where participants use
                infrared-emitting light guns to tag designated targets.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11911@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper14">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="gymkhana-golf-resort-container2">
                <span className="the-shalamar-gardens-container7">
                  <p className="gymkhana1">{`Gymkhana `}</p>
                  <p className="gymkhana1">Golf Resort</p>
                </span>
              </div>
              <div className="one-of-the1">
                One of the oldest golf courses of the city. A great get away in
                the heart of blustering city of Lahore. Good restaurants most
                sports. Swimming and lot more. Must go for visitors.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11912@2x.png"
              />
            </div>
          </div>
          <div className="rectangle-parent37">
            <div className="group-child30" />
            <div className="oasis1">Oasis</div>
            <div className="theres-an-oasis1">{`There’s an OASIS of fun at the edge of Lahore. A true sanctuary of hearty merriment for the whole family, located in the peaceful outskirts of Lahore along the main Multan Road, Opposite Honda Cars, The Oasis Golf & Aqua Resort is an idyllic members-only haven that gives a new meaning to family entertainment.`}</div>
            <img
              className="image-119-icon22"
              alt=""
              src="/image-11913@2x.png"
            />
          </div>
        </div>
        <div className="shopping-group" data-scroll-to="groupContainer">
          <div className="shopping3">Shopping</div>
          <div className="group-wrapper15">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="joyland1">{`AnarKali `}</div>
              <div className="this-bazaar-is1">
                This bazaar is well worth a visit. You need to witness the
                frenzy of activity to believe it. Shopping, eating or just
                watching the locals go about their business its an eye
                opener.For foodies, there is a spot selling the most insane
                chole abature which is definitely the in Lahore.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11914@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper16">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="emporium-mall1">
                <span className="the-shalamar-gardens-container7">
                  <p className="gymkhana1">Emporium</p>
                  <p className="gymkhana1"> Mall</p>
                </span>
              </div>
              <div className="located-near-expo1">
                Located near expo center ,this mall offers a unique experience
                of shopping, dining and fun for the kids. You cal find all sorts
                of modern and cultural stuff here.
              </div>
              <img
                className="image-119-icon32"
                alt=""
                src="/image-11915@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper17">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="liberty-market1">Liberty Market</div>
              <div className="located-in-emporium1">
                It’s one of the most famous and historic markets in the city
                with tones of eateries, shopping outlets, and other attractions.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11916@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper18">
            <div className="rectangle-parent31">
              <div className="group-child30" />
              <div className="akbari-market1">Akbari Market</div>
              <div className="anyone-approaching-delhi1">
                Anyone approaching Delhi Gate will be hit by a strong scent that
                travels up the nostrils and does not leave till it makes the
                visitor’s eyes all watery. The scent bringing tears to the eyes
                of all comers emanates from the range of spices available at
                Lahore’s Akbari Mandi.It is considered one of the largest spice
                markets in Asia and offers a panorama of colours.
              </div>
              <img
                className="image-119-icon22"
                alt=""
                src="/image-11917@2x.png"
              />
            </div>
          </div>
          <div className="rectangle-parent42">
            <div className="group-child30" />
            <div className="oasis1">ShahAlam Market</div>
            <div className="the-shah-almi-gate-container2">
              <span className="the-shalamar-gardens-container7">
                {`The "Shah-Almi Gate" is named after `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Mughal_emperor"
                  target="_blank"
                >
                  <span className="mughal-garden7">Mughal emperor</span>
                </a>
                {` `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Shah_Alam_I"
                  target="_blank"
                >
                  <span className="mughal-garden7">Shah Alam I</span>
                </a>
                {`, son of `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Aurangzeb"
                  target="_blank"
                >
                  <span className="mughal-garden7">Aurangzeb</span>
                </a>
                {`. Prior to his death, the gate was called the "Bherwala Gate". During the `}
                <a
                  className="mughal-garden6"
                  href="https://en.wikipedia.org/wiki/Partition_of_India"
                  target="_blank"
                >
                  <span className="mughal-garden7">1947 partition riots</span>
                </a>
                , the gate was burned. Today only the name survives. Shah Alam
                Market is one of Lahore's biggest commercial markets, "Shah Almi
                Market" or Shahalmi as locals call it, exists near the site of
                the gate.
              </span>
            </div>
            <img
              className="image-119-icon22"
              alt=""
              src="/image-11918@2x.png"
            />
          </div>
        </div>
        <div className="footer-3713">
          <div className="footer-37-child62" />
          <b className="subscribe-to-newsletter19">Subscribe to Newsletter</b>
          <b className="follow-us19">Follow Us</b>
          <div className="footer-37-child63" />
          <div className="text20" />
          <div className="privacy-policy-parent17">
            <div
              className="privacy-policy20"
              onClick={onPrivacyPolicyTextClick}
            >
              Privacy Policy
            </div>
            <div className="maps20" onClick={onMapsTextClick}>
              Maps
            </div>
            <div className="shop21" onClick={onShopTextClick}>
              Shop
            </div>
            <div className="contact-us20" onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
          <div className="copyright19">
            <div className="all-rights-reserved19">
              © 2023 All Rights Reserved
            </div>
          </div>
          <div className="subscribe38">
            <div className="subscribe-child17" />
            <div className="enter-your-email19">Enter your email Address</div>
            <div className="buttonstarted19">
              <div className="subscribe39">Subscribe</div>
            </div>
          </div>
          <div className="image-41-parent17">
            <img className="image-41-icon19" alt="" src="/image-41@2x.png" />
            <img className="image-42-icon19" alt="" src="/image-42@2x.png" />
            <img className="image-43-icon19" alt="" src="/image-43@2x.png" />
          </div>
          <img className="icon44" alt="" src="/-1-11@2x.png" />
          <div className="footer-37-child64" />
          <img className="footer-37-child65" alt="" src="/ellipse-18.svg" />
          <img className="footer-37-child66" alt="" src="/ellipse-19.svg" />
          <img className="image-135-icon19" alt="" src="/image-135@2x.png" />
          <img className="image-136-icon19" alt="" src="/image-136@2x.png" />
          <img className="image-137-icon19" alt="" src="/image-137@2x.png" />
          <img className="image-134-icon19" alt="" src="/image-134@2x.png" />
        </div>
      </div>
      <div className="navbar17">
        <img
          className="icon45"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon20"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart17"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery21" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites17" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map17" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat17" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events20" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani24" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed17"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Actvities;
