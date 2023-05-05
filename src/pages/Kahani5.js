import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kahani5.css";
const Kahani5 = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/kahani1");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/kahani2");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/kahani3");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/kahani4");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/kahani5");
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
    <div className="kahani18">
      <img
        className="kahani-child"
        alt=""
        src="/rectangle-1285@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className="the-mosque-that">The Mosque that shouldn’t be there.</div>
      <img
        className="kahani-item"
        alt=""
        src="/rectangle-1286@2x.png"
        onClick={onRectangleImage1Click}
      />
      <img
        className="kahani-inner"
        alt=""
        src="/rectangle-1287@2x.png"
        onClick={onRectangleImage2Click}
      />
      <img
        className="rectangle-icon"
        alt=""
        src="/rectangle-1288@2x.png"
        onClick={onRectangleImage3Click}
      />
      <img
        className="kahani-child1"
        alt=""
        src="/rectangle-1289@2x.png"
        onClick={onRectangleImage4Click}
      />
      <div className="footer-377">
        <div className="footer-37-child32" />
        <b className="subscribe-to-newsletter13">Subscribe to Newsletter</b>
        <b className="follow-us13">Follow Us</b>
        <div className="footer-37-child33" />
        <div className="text13" />
        <div className="privacy-policy-parent11">
          <div className="privacy-policy13" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps14" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop13" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us14" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright13">
          <div className="all-rights-reserved13">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe26">
          <div className="subscribe-child11" />
          <div className="enter-your-email13">Enter your email Address</div>
          <div className="buttonstarted13">
            <div className="subscribe27">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent11">
          <img className="image-41-icon13" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon13" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon13" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon33" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child34" />
        <img className="footer-37-child35" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child36" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon13" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon13" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon13" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon13" alt="" src="/image-134@2x.png" />
      </div>
      <div className="the-girl-who">
        The girl who was put in the wall: Anarkali
      </div>
      <div className="the-girl-who">
        The girl who was put in the wall: Anarkali
      </div>
      <div className="tale-of-sadhu1">Tale of Sadhu: the thief</div>
      <div className="a-defeated-king-container2">
        <span className="a-defeated-king-container3">
          <p className="scaling-the-mountain">A defeated king</p>
          <p className="scaling-the-mountain">A funeral pyre</p>
        </span>
      </div>
      <div className="the-mosque-that">The Mosque that shouldn’t be there.</div>
      <div className="scaling-the-mountain-container2">
        <span className="a-defeated-king-container3">
          <p className="scaling-the-mountain">Scaling the mountain of light</p>
        </span>
      </div>
      <div className="legends-of-lahore5">Legends of Lahore</div>
      <div className="welcome-to-a5">
        Welcome to a city steeped in history, where every street has a story to
        tell…
      </div>
      <div className="navbar12">
        <img
          className="icon34"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon15"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart12"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery16" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites12" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map12" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat12" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events15" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani19" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed12"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Kahani5;
