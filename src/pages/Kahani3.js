import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kahani3.css";
const Kahani3 = () => {
  const navigate = useNavigate();

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
    <div className="kahani14">
      <div className="footer-375">
        <div className="footer-37-child22" />
        <b className="subscribe-to-newsletter11">Subscribe to Newsletter</b>
        <b className="follow-us11">Follow Us</b>
        <div className="footer-37-child23" />
        <div className="text11" />
        <div className="privacy-policy-parent9">
          <div className="privacy-policy11" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps12" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop11" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us12" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright11">
          <div className="all-rights-reserved11">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe22">
          <div className="subscribe-child9" />
          <div className="enter-your-email11">Enter your email Address</div>
          <div className="buttonstarted11">
            <div className="subscribe23">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent9">
          <img className="image-41-icon11" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon11" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon11" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon29" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child24" />
        <img className="footer-37-child25" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child26" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon11" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon11" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon11" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon11" alt="" src="/image-134@2x.png" />
      </div>
      <div className="legends-of-lahore3">Legends of Lahore</div>
      <div className="mosque-that-shouldnt-container">
        <span className="mosque-that-shouldnt-container1">
          <p className="mosque">Mosque</p>
          <p className="mosque">that</p>
          <p className="mosque">shouldn’t</p>
          <p className="be-there">be there</p>
        </span>
      </div>
      <div className="welcome-to-a3">
        Welcome to a city steeped in history, where every street has a story to
        tell…
      </div>
      <div className="next-time-you-container">
        <span className="mosque-that-shouldnt-container1">
          <p className="be-there">
            Next time you visit the newly constructed food street, opt to get a
            bird’s eye view by
          </p>
          <p className="be-there">
            choosing to eat at one of the rooftop restaurants. Then, when you
            look down at the
          </p>
          <p className="be-there">
            breathtaking view of the iconic Badshahi Mosque in all its
            splendour, just pause to
          </p>
          <p className="be-there">
            consider that it was never even supposed to exist! So where did the
            Badshahi Mosque
          </p>
          <p className="be-there">
            come from, you ask? Well herein lies the first of the tales we have
            to tell…
          </p>
          <p className="be-there">
            Hark back to a time when Emperor Shah Jehan’s son Dara Shikoh was
            prince of
          </p>
          <p className="be-there">
            Lahore. Famed for his devotion to Sufi saint Hazrat Mian Mir, Dara
            decided to honour
          </p>
          <p className="be-there">
            the saint by building a path from the Akbari gate to the saint’s
            shrine in Taslimpur (near
          </p>
          <p className="be-there">
            modern-day cantt). Ordinary bricks simply wouldn’t do for this
            purpose and so Dara
          </p>
          <p className="be-there">
            Shikoh imported red sandstone tiles all the way from Jaipur. But no
            sooner had the
          </p>
          <p className="be-there">
            bricks arrived that his brother Aurangzeb killed him, while
            imprisoning his father Shah
          </p>
          <p className="be-there">
            Jehan. Having settled matters of succession in this fratricidal
            fashion, Aurangzeb took
          </p>
          <p className="be-there">
            one look at the massive pile of bricks and decided that, instead of
            a pathway, he would
          </p>
          <p className="be-there">
            build a mosque fit for an emperor. Had Aurangzeb lost that struggle,
            and had Dara
          </p>
          <p className="be-there">
            Shikoh built his pathway, Lahore’s entire urban structure would be
            completely different!
          </p>
          <p className="be-there">
            And you, while sitting at that rooftop restaurant, would be staring
            down at a very
          </p>
          <p className="be-there">different city.</p>
        </span>
      </div>
      <img className="image-139-icon3" alt="" src="/image-1393@2x.png" />
      <div className="navbar10">
        <img
          className="icon30"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon13"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart10"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery14" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites10" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map10" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat10" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events13" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani15" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed10"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Kahani3;
