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

  const onImage105Click = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div className="khaabe">
      <div className="khaabe-child" />
      <div className="khaabe-of-lahore-wrapper">
        <div className="khaabe-of-lahore">{`Khaabe of Lahore `}</div>
      </div>
      <div className="container">
        <img className="icon7" alt="" src="/1-5002@2x.png" />
        <img className="icon8" alt="" src="/2-2@2x.png" />
        <img className="icon9" alt="" src="/3-2@2x.png" />
      </div>
      <div className="khaabe-inner" onClick={onFrameContainer3Click}>
        <div className="parent1">
          <img className="icon10" alt="" src="/5-6@2x.png" />
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
          className="icon11"
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
        <div className="gallery5" onClick={onGalleryTextClick}>
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
        <div className="kahani3" onClick={onKahaniTextClick}>
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
        <div className="footer-38-child7" />
        <b className="subscribe-to-newsletter3">Subscribe to Newsletter</b>
        <b className="follow-us3">Follow Us</b>
        <div className="footer-38-child8" />
        <div className="text3" />
        <div className="privacy-policy-parent1">
          <div className="privacy-policy3" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps4" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop3" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us4" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright3">
          <div className="all-rights-reserved3">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe6">
          <div className="subscribe-child1" />
          <div className="enter-your-email3">Enter your email Address</div>
          <div className="buttonstarted3">
            <div className="subscribe7">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent1">
          <img className="image-41-icon3" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon3" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon3" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon12" alt="" src="/-1-11@2x.png" />
        <div className="footer-38-child9" />
        <img className="footer-38-child10" alt="" src="/ellipse-18.svg" />
        <img className="footer-38-child11" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon3" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon3" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon3" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon3" alt="" src="/image-134@2x.png" />
      </div>
      <div className="more-in-lahore2">More in Lahore</div>
      <div className="image-98-container">
        <img className="image-98-icon2" alt="" src="/image-98@2x.png" />
        <div className="activities3">Activities</div>
        <img
          className="image-105-icon3"
          alt=""
          src="/image-1051@2x.png"
          onClick={onImage105Click}
        />
        <div className="gallery6">Gallery</div>
        <img className="image-106-icon3" alt="" src="/image-1061@2x.png" />
        <div className="events5">Events</div>
      </div>
    </div>
  );
};

export default Khaabe;
