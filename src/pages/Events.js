import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
const Events = () => {
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
    navigate("/events");
  }, [navigate]);

  const onKahaniTextClick = useCallback(() => {
    navigate("/kahani");
  }, [navigate]);

  const onIconEnvelopeClosedClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

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
    <div className="events19">
      <div className="navbar19">
        <img
          className="icon42"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon44"
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart19"
          alt=""
          src="/-icon-cart.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery20" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites19" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map19" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat19" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events20" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani20" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed19"
          alt=""
          src="/-icon-envelope-closed.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="lahore-the-city">Lahore, the city that never sleeps!</div>
      <div className="events-in-lahore-wrapper">
        <div className="events-in-lahore">Events in Lahore</div>
      </div>
      <b className="explore-all-the">
        Explore All the Infamous Events in Lahore
      </b>
      <img
        className="blf-ziggo-1180x490-1-icon"
        alt=""
        src="/blf-ziggo1180x490-1@2x.png"
      />
      <b className="lahore-is-known-container">
        <p className="lahore-is-known">
          Lahore is known for buzzing late at night and providing entertainment
          and events of all sorts! With art theaters popping up and the city
          producing more artists than ever, the entertainment industry is
          keeping people busy!
        </p>
      </b>
      <div className="footer-38">
        <div className="footer-38-child" />
        <b className="subscribe-to-newsletter20">Subscribe to Newsletter</b>
        <b className="follow-us20">Follow Us</b>
        <div className="footer-38-item" />
        <div className="text20" />
        <div className="privacy-policy-parent18">
          <div className="privacy-policy20" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps21" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop20" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us21" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright20">
          <div className="all-rights-reserved20">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe40">
          <div className="subscribe-child18" />
          <div className="enter-your-email20">Enter your email Address</div>
          <div className="buttonstarted20">
            <div className="subscribe41">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent18">
          <img className="image-41-icon20" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon20" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon20" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon43" alt="" src="/-1-11@2x.png" />
        <div className="footer-38-inner" />
        <img className="footer-38-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-38-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon20" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon20" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon20" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon20" alt="" src="/image-134@2x.png" />
      </div>
      <div className="sports-wrapper">
        <div className="sports">
          <p className="lahore-is-known">Sports</p>
        </div>
      </div>
      <div className="group-parent2">
        <div className="frame-parent66">
          <div className="nov-17-parent">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
            <img
              className="malik-atta-pegg-1"
              alt=""
              src="/malik-atta-pegg-1@2x.png"
            />
          </div>
          <div className="nov-17-group">
            <div className="nov-171">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="days-trip-to-container">
              <p className="lahore-is-known">
                5 days Trip to Hunza and China Border
              </p>
            </div>
            <div className="wandering-traveller">
              <p className="lahore-is-known">Wandering Traveller</p>
            </div>
          </div>
          <div className="dec-19-parent">
            <div className="nov-17">
              <p className="lahore-is-known">Dec</p>
              <p className="p">19</p>
            </div>
            <div className="nike-open-tennis">{`Nike open tennis tournament `}</div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
            </div>
            <div className="bagh-e-jinnah-lahore">Bagh-e-Jinnah Lahore</div>
            <img className="tennis-1-icon" alt="" src="/tennis-1@2x.png" />
          </div>
          <div className="may-10-parent">
            <div className="nov-171">
              <p className="lahore-is-known">May</p>
              <p className="p">10</p>
            </div>
            <div className="rung">
              <p className="lahore-is-known">RUNG</p>
            </div>
            <div className="fast-nuces-lahore-container">
              <p className="lahore-is-known">FAST NUCES LAHORE</p>
            </div>
            <img className="rung-1-icon" alt="" src="/rung-1@2x.png" />
          </div>
        </div>
        <img className="hunza-1-icon" alt="" src="/hunza--1@2x.png" />
      </div>
      <div className="events-inner">
        <div className="frame-parent67">
          <div className="nov-30-parent">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">30</p>
            </div>
            <div className="she2023-summit-container">
              <p className="lahore-is-known">{`#SHE2023 SUMMIT & AWARDS`}</p>
            </div>
            <div className="people-are-interested-container">
              <p className="lahore-is-known">18 people are interested</p>
            </div>
            <div className="lahorepunjabpakistan">
              <p className="lahore-is-known">Lahore,Punjab,Pakistan</p>
            </div>
            <img className="she-1-icon" alt="" src="/she-1@2x.png" />
          </div>
          <div className="nov-17-container">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="jan-26-parent">
            <div className="nov-171">
              <p className="lahore-is-known">Jan</p>
              <p className="p">26</p>
            </div>
            <div className="future-fest-2024-container">
              <p className="lahore-is-known">
                Future Fest 2024 : Pakistan’s Largest Tech Event
              </p>
            </div>
            <div className="alhamra-arts-council-container">
              <p className="lahore-is-known">Alhamra Arts Council, Mall</p>
            </div>
            <img
              className="futurefest-1-icon"
              alt=""
              src="/futurefest-1@2x.png"
            />
          </div>
          <div className="mar-20-parent">
            <div className="nov-171">
              <p className="lahore-is-known">Mar</p>
              <p className="lahore-is-known">20</p>
            </div>
            <div className="makers-market">Makers Market</div>
            <div className="the-commons-karachi">The Commons Karachi</div>
            <img
              className="makersmarket-1-icon"
              alt=""
              src="/makersmarket-1@2x.png"
            />
          </div>
          <div className="may-04-parent">
            <div className="nov-171">
              <p className="lahore-is-known">May</p>
              <p className="p">04</p>
            </div>
            <div className="rebooted">RebooTED</div>
            <div className="tedx-lahore">TEDx Lahore</div>
          </div>
          <div className="nov-17-parent1">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <img className="tedx2-1-icon" alt="" src="/tedx2-1@2x.png" />
        </div>
      </div>
      <div className="events-child">
        <div className="frame-parent68">
          <div className="nov-17-parent2">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
            <img
              className="malik-atta-pegg-1"
              alt=""
              src="/malik-atta-pegg-1@2x.png"
            />
          </div>
          <div className="nov-17-parent3">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="nov-17-parent4">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="nov-17-parent5">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="nov-17-parent6">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="nov-17-parent7">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
          <div className="nov-17-parent8">
            <div className="nov-17">
              <p className="lahore-is-known">Nov</p>
              <p className="p">17</p>
            </div>
            <div className="th-malik-atta">
              4th Malik Atta Tent Pegging 2023
            </div>
            <div className="fri-nov-17-container">
              <p className="lahore-is-known">&nbsp;</p>
              <p className="lahore-is-known">Fri Nov 17 2023 at 10:00 am</p>
            </div>
            <div className="sa-gardens">SA Gardens</div>
          </div>
        </div>
      </div>
      <div className="talks">Talks</div>
      <div className="competitions">
        <p className="lahore-is-known">Competitions</p>
      </div>
    </div>
  );
};

export default Events;
