import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
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

  const onImage2Click = useCallback(() => {
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
    <div className="gallery24">
      <div className="gallery-inner">
        <div className="component-1variant3-parent">
          <div className="component-1variant3">
            <div className="component-1variant3-child" />
            <img
              className="component-1variant3-item"
              alt=""
              src="/ellipse-16.svg"
            />
            <div className="lahore-container">
              <div className="lahore13">Lahore</div>
              <i className="through-lens">through lens</i>
            </div>
            <img className="icon50" alt="" src="/3@2x.png" />
            <div className="rectangle-parent43">
              <div className="group-child45" />
              <div className="group-child46" />
            </div>
            <div className="rectangle-parent44">
              <div className="group-child47" />
              <div className="group-child48" />
            </div>
            <div className="image-40-parent">
              <img className="image-40-icon" alt="" src="/image-40@2x.png" />
              <img className="image-7-icon" alt="" src="/image-7@2x.png" />
            </div>
            <div className="image-41-parent20">
              <img className="image-41-icon22" alt="" src="/image-412@2x.png" />
              <img className="image-42-icon22" alt="" src="/image-422@2x.png" />
              <img className="image-43-icon22" alt="" src="/image-432@2x.png" />
            </div>
          </div>
          <div className="rectangle-parent45">
            <div className="group-child49" />
            <img className="image-48-icon" alt="" src="/image-48@2x.png" />
            <img className="image-46-icon" alt="" src="/image-46@2x.png" />
            <img className="image-44-icon" alt="" src="/image-44@2x.png" />
            <img className="image-40-icon1" alt="" src="/image-401@2x.png" />
            <img className="image-41-icon23" alt="" src="/image-413@2x.png" />
            <img className="image-42-icon23" alt="" src="/image-423@2x.png" />
            <img className="image-43-icon23" alt="" src="/image-433@2x.png" />
            <img className="image-45-icon" alt="" src="/image-45@2x.png" />
            <img className="image-47-icon" alt="" src="/image-47@2x.png" />
          </div>
          <div className="rectangle-parent46">
            <div className="group-child50" />
            <img className="image-56-icon" alt="" src="/image-56@2x.png" />
            <img className="image-54-icon" alt="" src="/image-54@2x.png" />
            <img className="image-55-icon" alt="" src="/image-55@2x.png" />
            <img className="image-50-icon" alt="" src="/image-50@2x.png" />
            <img className="image-51-icon" alt="" src="/image-51@2x.png" />
            <img className="image-52-icon" alt="" src="/image-52@2x.png" />
            <img className="image-53-icon" alt="" src="/image-53@2x.png" />
            <img className="image-58-icon" alt="" src="/image-58@2x.png" />
            <img className="image-59-icon" alt="" src="/image-59@2x.png" />
          </div>
          <div className="rectangle-parent47">
            <div className="group-child51" />
            <img className="image-63-icon" alt="" src="/image-63@2x.png" />
            <img className="image-64-icon" alt="" src="/image-64@2x.png" />
            <img className="image-65-icon" alt="" src="/image-65@2x.png" />
            <img className="image-60-icon" alt="" src="/image-60@2x.png" />
            <img className="image-61-icon" alt="" src="/image-61@2x.png" />
            <img className="image-62-icon" alt="" src="/image-62@2x.png" />
            <img className="image-69-icon" alt="" src="/image-69@2x.png" />
            <img className="image-70-icon" alt="" src="/image-70@2x.png" />
          </div>
          <div className="rectangle-parent48">
            <div className="group-child52" />
            <img className="image-71-icon" alt="" src="/image-71@2x.png" />
            <img className="image-72-icon" alt="" src="/image-72@2x.png" />
            <img className="image-73-icon" alt="" src="/image-73@2x.png" />
            <img className="image-74-icon" alt="" src="/image-74@2x.png" />
            <img className="image-75-icon" alt="" src="/image-75@2x.png" />
            <img className="image-76-icon" alt="" src="/image-76@2x.png" />
            <img className="image-79-icon" alt="" src="/image-79@2x.png" />
            <img className="image-80-icon" alt="" src="/image-80@2x.png" />
          </div>
          <div className="rectangle-parent49">
            <div className="group-child53" />
            <img className="image-84-icon" alt="" src="/image-84@2x.png" />
            <img className="image-85-icon" alt="" src="/image-85@2x.png" />
            <img className="image-81-icon" alt="" src="/image-81@2x.png" />
            <img className="image-82-icon" alt="" src="/image-82@2x.png" />
            <img className="image-83-icon" alt="" src="/image-83@2x.png" />
            <img className="image-86-icon" alt="" src="/image-86@2x.png" />
            <img className="image-87-icon" alt="" src="/image-87@2x.png" />
            <img className="image-88-icon" alt="" src="/image-88@2x.png" />
          </div>
        </div>
      </div>
      <div className="footer-3716">
        <div className="footer-37-child77" />
        <b className="subscribe-to-newsletter22">Subscribe to Newsletter</b>
        <b className="follow-us22">Follow Us</b>
        <div className="footer-37-child78" />
        <div className="text24" />
        <div className="privacy-policy-parent20">
          <div className="privacy-policy23" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps24" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop24" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us25" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright22">
          <div className="all-rights-reserved22">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe44">
          <div className="subscribe-child20" />
          <div className="enter-your-email22">Enter your email Address</div>
          <div className="buttonstarted22">
            <div className="subscribe45">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent21">
          <img className="image-41-icon24" alt="" src="/image-414@2x.png" />
          <img className="image-42-icon24" alt="" src="/image-424@2x.png" />
          <img className="image-43-icon24" alt="" src="/image-434@2x.png" />
        </div>
        <img className="icon51" alt="" src="/-1-12@2x.png" />
        <div className="footer-37-child79" />
        <img className="footer-37-child80" alt="" src="/ellipse-181.svg" />
        <img className="footer-37-child81" alt="" src="/ellipse-191.svg" />
        <img className="image-135-icon22" alt="" src="/image-1351@2x.png" />
        <img className="image-136-icon22" alt="" src="/image-1361@2x.png" />
        <img className="image-137-icon22" alt="" src="/image-1371@2x.png" />
        <img className="image-134-icon22" alt="" src="/image-1341@2x.png" />
      </div>
      <div className="navbar20">
        <img
          className="icon52"
          alt=""
          src="/-1-13@2x.png"
          onClick={onImage2Click}
        />
        <img
          className="vector-icon23"
          alt=""
          src="/vector4.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart20"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery25" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites20" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map21" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat20" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events23" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani27" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed20"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Gallery;
