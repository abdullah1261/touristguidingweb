import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Khaabe.css";
const Khaabe = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/cafes");
  }, [navigate]);

  const onImage4Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onVectorIconClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onIconCartClick = useCallback(() => {
    // Please sync "Shop" to the project
  }, []);

  const onGalleryTextClick = useCallback(() => {
    // Please sync "Gallery" to the project
  }, []);

  const onActivitesTextClick = useCallback(() => {
    // Please sync "Actvities" to the project
  }, []);

  const onMapTextClick = useCallback(() => {
    // Please sync "Maps" to the project
  }, []);

  const onEatTextClick = useCallback(() => {
    navigate("/khaabe");
  }, [navigate]);

  const onEventsTextClick = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onKahaniTextClick = useCallback(() => {
    // Please sync "Kahani" to the project
  }, []);

  const onIconEnvelopeClosedClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Legal Policy" to the project
  }, []);

  const onMapsTextClick = useCallback(() => {
    // Please sync "Maps" to the project
  }, []);

  const onShopTextClick = useCallback(() => {
    // Please sync "Shop" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onImage105Click = useCallback(() => {
    // Please sync "Gallery" to the project
  }, []);

  return (
    <div className="khaabe">
      <div className="khaabe-child" />
      <div className="khaabe-of-lahore-wrapper">
        <div className="khaabe-of-lahore">{`Khaabe of Lahore `}</div>
      </div>
      <div className="container">
        <img className="icon6" alt="" src="/1-5002@2x.png" />
        <img className="icon7" alt="" src="/2-2@2x.png" />
        <img className="icon8" alt="" src="/3-2@2x.png" />
      </div>
      <div className="khaabe-inner" onClick={onFrameContainer3Click}>
        <div className="parent1">
          <img className="icon9" alt="" src="/5-6@2x.png" />
          <div className="restaurant1">{`Restaurant `}</div>
          <img className="frame-child18" alt="" src="/frame-53.svg" />
        </div>
      </div>
      <div className="khaabe-inner1" onClick={onFrameContainer5Click}>
        <div className="c-3-parent">
          <img className="c-3-icon" alt="" src="/c-3@2x.png" />
          <div className="cafe3">Cafe</div>
          <img
            className="material-symbolslocal-cafe-icon"
            alt=""
            src="/materialsymbolslocalcafe.svg"
          />
        </div>
      </div>
      <div className="explore-famous-khaabe">
        Explore Famous Khaabe of Lahore
      </div>
      <div className="navbar2">
        <img
          className="icon10"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage4Click}
        />
        <img
          className="vector-icon2"
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart2"
          alt=""
          src="/-icon-cart.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery4" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites2" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map2" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat2" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events4" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani2" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed2"
          alt=""
          src="/-icon-envelope-closed.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="footer-382">
        <div className="footer-38-child5" />
        <b className="subscribe-to-newsletter2">Subscribe to Newsletter</b>
        <b className="follow-us2">Follow Us</b>
        <div className="footer-38-child6" />
        <div className="text2" />
        <div className="privacy-policy-container">
          <div className="privacy-policy2" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps2" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop2" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us2" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright2">
          <div className="all-rights-reserved2">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe4">
          <div className="subscribe-inner" />
          <div className="enter-your-email2">Enter your email Address</div>
          <div className="buttonstarted2">
            <div className="subscribe5">Subscribe</div>
          </div>
        </div>
        <div className="image-41-container">
          <img className="image-41-icon2" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon2" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon2" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon11" alt="" src="/-1-11@2x.png" />
        <div className="footer-38-child7" />
        <img className="footer-38-child8" alt="" src="/ellipse-18.svg" />
        <img className="footer-38-child9" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon2" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon2" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon2" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon2" alt="" src="/image-134@2x.png" />
      </div>
      <div className="more-in-lahore2">More in Lahore</div>
      <div className="image-98-container">
        <img className="image-98-icon2" alt="" src="/image-98@2x.png" />
        <div className="activities2">Activities</div>
        <img
          className="image-105-icon2"
          alt=""
          src="/image-105@2x.png"
          onClick={onImage105Click}
        />
        <div className="gallery5">Gallery</div>
        <img className="image-106-icon2" alt="" src="/image-106@2x.png" />
        <div className="events5">Events</div>
      </div>
    </div>
  );
};

export default Khaabe;
