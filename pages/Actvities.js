import { useCallback, useEffect } from "react";
import "./Actvities.css";
const Actvities = () => {
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

  return (
    <div className="actvities" data-animate-on-scroll>
      <div className="group-parent">
        <div className="image-126-parent">
          <img className="image-126-icon" alt="" src="/image-126@2x.png" />
          <img className="image-125-icon" alt="" src="/image-125@2x.png" />
          <img className="image-124-icon" alt="" src="/image-124@2x.png" />
          <img
            className="image-122-icon"
            alt=""
            src="/image-122@2x.png"
            onClick={onImage122Click}
          />
          <img
            className="image-121-icon"
            alt=""
            src="/image-121@2x.png"
            onClick={onImage121Click}
          />
          <img
            className="image-123-icon"
            alt=""
            src="/image-123@2x.png"
            onClick={onImage123Click}
          />
          <div className="historical-site-visit">Historical Site Visit</div>
          <div className="adrenaline-rush">Adrenaline Rush</div>
          <div className="activities">Activities</div>
          <div className="shopping">Shopping</div>
        </div>
        <div
          className="historical-site-visit-parent"
          data-scroll-to="groupContainer1"
        >
          <div className="historical-site-visit1">Historical Site Visit</div>
          <div className="rectangle-parent">
            <div className="group-child" />
            <img className="image-118-icon" alt="" src="/image-118@2x.png" />
            <div className="wazir-khan-mosque">Wazir Khan Mosque</div>
            <div className="the-wazir-khan">
              The Wazir Khan Mosque is a 17th-century mosque located in old
              Lahore. The mosque was commissioned during the reign of the Mughal
              Emperor Shah Jahan as a part of an ensemble of buildings that also
              included the nearby Shahi Hammam baths
            </div>
          </div>
          <div className="rectangle-group">
            <div className="group-item" />
            <div className="gali-surjan-singh">Gali Surjan Singh</div>
            <div className="gali-surjan-singh1">
              Gali Surjan Singh was named after Hakim Surjan Singh, the 19th
              century physician who lived in the street. He had cured many
              royals and that is why the street was named after him and because
              of his popularity, the street was named after him.
            </div>
            <img className="image-119-icon" alt="" src="/image-119@2x.png" />
          </div>
          <div className="rectangle-container">
            <div className="group-item" />
            <div className="shalamar-gardens">Shalamar Gardens</div>
            <div className="the-shalamar-gardens-container">
              <span className="emporium-mall-txt-container">
                {`The Shalamar Gardens are a `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Mughal_garden"
                  target="_blank"
                >
                  <span className="mughal-garden1">Mughal garden</span>
                </a>
                {` complex located in `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Lahore"
                  target="_blank"
                >
                  <span className="mughal-garden1">Lahore</span>
                </a>
                , Pakistan. The gardens date from the period when the Mughal
                Empire was at its artistic and aesthetic zenith, and are now one
                of Pakistan's most popular tourist destinations
              </span>
            </div>
            <img className="image-119-icon" alt="" src="/image-1191@2x.png" />
          </div>
          <div className="group-wrapper">
            <div className="group-div">
              <div className="group-item" />
              <div className="lahore-railway-station">
                Lahore Railway Station
              </div>
              <div className="lahore-railway-station1">
                Lahore Railway Station, which is also known as the Lahore
                railway junction, is one of the oldest and busiest railway
                junctions in Pakistan. Dozens of passenger trains and cargo
                carriages make use of the Lahore junction station for large
                scale movements of the railway traffic.
              </div>
              <img className="image-119-icon" alt="" src="/image-1192@2x.png" />
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="group-item" />
            <div className="food-street">Food Street</div>
            <div className="food-street-in-container">
              <span className="emporium-mall-txt-container">
                {`Food street in Lahore is one of the must-see places. Located in the heart of the city between Fort road and Roshnai gate, it is filled with all sorts of cuisines to satisfy all food cravings.With music playing in the street and a glorious view of the `}
                <a
                  className="mughal-garden"
                  href="https://visitlahore.com/attractions/badshahi-mosque/"
                  target="_blank"
                >
                  <span className="mughal-garden1">Badshahi Mosque</span>
                </a>
                , it is the perfect way to spend your evening.
              </span>
            </div>
            <img className="image-119-icon" alt="" src="/image-1193@2x.png" />
          </div>
        </div>
        <div className="adrenaline-rush-parent">
          <div className="adrenaline-rush1" data-scroll-to="adrenalineRushText">
            Adrenaline Rush
          </div>
          <div className="group-container">
            <div className="group-div">
              <div className="group-item" />
              <div className="joyland">{`Joyland `}</div>
              <div className="joyland-is-a">
                Joyland is a Pakistani amusement park company based in Lahore,
                Punjab, Pakistan. The park, adjacent to Fortress Stadium, was
                established in 1977 and is one of the largest recreation parks
                in the city. It is spread out over an area of 6 acres.
              </div>
              <img className="image-119-icon" alt="" src="/image-1194@2x.png" />
            </div>
          </div>
          <div className="group-frame">
            <div className="group-div">
              <div className="group-item" />
              <div className="go-karting">Go Karting</div>
              <div className="are-you-ready">
                Are you ready to start your engines and race at Pakistan’s first
                International Level Go Karting Track? The 2F2F Formula Karting
                track has got you covered. You can fuel your need for speed by
                racing at the largest go Karting Track in Pakistan. Whether you
                are an adult, or a youngster looking for some extreme sport,
                2F2F Karting has excellent opportunities for you.
              </div>
              <img className="image-119-icon" alt="" src="/image-1195@2x.png" />
            </div>
          </div>
          <div className="group-wrapper1">
            <div className="group-div">
              <div className="group-item" />
              <div className="joyland">Laser Tag</div>
              <div className="located-in-emporium">
                Located in emporium mall, packages mall and mall of Lahore is
                one of the most fun games; Laser Tag. Laser tag is a
                recreational shooting sport where participants use
                infrared-emitting light guns to tag designated targets.
              </div>
              <img className="image-119-icon" alt="" src="/image-1196@2x.png" />
            </div>
          </div>
          <div className="group-wrapper2">
            <div className="group-div">
              <div className="group-item" />
              <div className="gymkhana-golf-resort-container">
                <span className="emporium-mall-txt-container">
                  <p className="gymkhana">{`Gymkhana `}</p>
                  <p className="gymkhana">Golf Resort</p>
                </span>
              </div>
              <div className="one-of-the">
                One of the oldest golf courses of the city. A great get away in
                the heart of blustering city of Lahore. Good restaurants most
                sports. Swimming and lot more. Must go for visitors.
              </div>
              <img className="image-119-icon" alt="" src="/image-1197@2x.png" />
            </div>
          </div>
          <div className="rectangle-parent6">
            <div className="group-item" />
            <div className="food-street">Oasis</div>
            <div className="theres-an-oasis">{`There’s an OASIS of fun at the edge of Lahore. A true sanctuary of hearty merriment for the whole family, located in the peaceful outskirts of Lahore along the main Multan Road, Opposite Honda Cars, The Oasis Golf & Aqua Resort is an idyllic members-only haven that gives a new meaning to family entertainment.`}</div>
            <img className="image-119-icon" alt="" src="/image-1198@2x.png" />
          </div>
        </div>
        <div className="adrenaline-rush-parent" data-scroll-to="groupContainer">
          <div className="adrenaline-rush1">Shopping</div>
          <div className="group-container">
            <div className="group-div">
              <div className="group-item" />
              <div className="joyland">{`AnarKali `}</div>
              <div className="this-bazaar-is">
                This bazaar is well worth a visit. You need to witness the
                frenzy of activity to believe it. Shopping, eating or just
                watching the locals go about their business its an eye
                opener.For foodies, there is a spot selling the most insane
                chole abature which is definitely the in Lahore.
              </div>
              <img className="image-119-icon" alt="" src="/image-1199@2x.png" />
            </div>
          </div>
          <div className="group-wrapper4">
            <div className="group-div">
              <div className="group-item" />
              <div className="emporium-mall">
                <span className="emporium-mall-txt-container">
                  <p className="gymkhana">Emporium</p>
                  <p className="gymkhana"> Mall</p>
                </span>
              </div>
              <div className="located-near-expo">
                Located near expo center ,this mall offers a unique experience
                of shopping, dining and fun for the kids. You cal find all sorts
                of modern and cultural stuff here.
              </div>
              <img
                className="image-119-icon10"
                alt=""
                src="/image-11910@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper1">
            <div className="group-div">
              <div className="group-item" />
              <div className="liberty-market">Liberty Market</div>
              <div className="located-in-emporium">
                It’s one of the most famous and historic markets in the city
                with tones of eateries, shopping outlets, and other attractions.
              </div>
              <img
                className="image-119-icon"
                alt=""
                src="/image-11911@2x.png"
              />
            </div>
          </div>
          <div className="group-wrapper2">
            <div className="group-div">
              <div className="group-item" />
              <div className="akbari-market">Akbari Market</div>
              <div className="anyone-approaching-delhi">
                Anyone approaching Delhi Gate will be hit by a strong scent that
                travels up the nostrils and does not leave till it makes the
                visitor’s eyes all watery. The scent bringing tears to the eyes
                of all comers emanates from the range of spices available at
                Lahore’s Akbari Mandi.It is considered one of the largest spice
                markets in Asia and offers a panorama of colours.
              </div>
              <img
                className="image-119-icon"
                alt=""
                src="/image-11912@2x.png"
              />
            </div>
          </div>
          <div className="rectangle-parent6">
            <div className="group-item" />
            <div className="food-street">ShahAlam Market</div>
            <div className="the-shah-almi-gate-container">
              <span className="emporium-mall-txt-container">
                {`The "Shah-Almi Gate" is named after `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Mughal_emperor"
                  target="_blank"
                >
                  <span className="mughal-garden1">Mughal emperor</span>
                </a>
                {` `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Shah_Alam_I"
                  target="_blank"
                >
                  <span className="mughal-garden1">Shah Alam I</span>
                </a>
                {`, son of `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Aurangzeb"
                  target="_blank"
                >
                  <span className="mughal-garden1">Aurangzeb</span>
                </a>
                {`. Prior to his death, the gate was called the "Bherwala Gate". During the `}
                <a
                  className="mughal-garden"
                  href="https://en.wikipedia.org/wiki/Partition_of_India"
                  target="_blank"
                >
                  <span className="mughal-garden1">1947 partition riots</span>
                </a>
                , the gate was burned. Today only the name survives. Shah Alam
                Market is one of Lahore's biggest commercial markets, "Shah Almi
                Market" or Shahalmi as locals call it, exists near the site of
                the gate.
              </span>
            </div>
            <img className="image-119-icon" alt="" src="/image-11913@2x.png" />
          </div>
        </div>
      </div>
      <img className="navbar-icon" alt="" src="/navbar.svg" />
    </div>
  );
};

export default Actvities;
