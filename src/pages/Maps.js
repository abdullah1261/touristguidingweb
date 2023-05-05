import { useCallback } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import "./Maps.css";
const Maps = () => {
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

  const onMapText1Click = useCallback(() => {
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
    <div className="maps21">
      <div className="map18">Map</div>
      <iframe
        className="maps-child"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13604.856722883613!2d74.2531461!3d31.5182769!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681730484582!5m2!1sen!2s"
      />
      <Player className="maps-item" autoplay src="" />
      <div className="footer-3714">
        <div className="footer-37-child67" />
        <b className="subscribe-to-newsletter20">Subscribe to Newsletter</b>
        <b className="follow-us20">Follow Us</b>
        <div className="footer-37-child68" />
        <div className="text21" />
        <div className="privacy-policy-parent18">
          <div className="privacy-policy21" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps22" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop22" onClick={onShopTextClick}>
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
        <img className="icon46" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child69" />
        <img className="footer-37-child70" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child71" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon20" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon20" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon20" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon20" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar18">
        <img
          className="icon47"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon21"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart18"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery22" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites18" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map19" onClick={onMapText1Click}>
          Map
        </div>
        <div className="eat18" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events21" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani25" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed18"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Maps;
