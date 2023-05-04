import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Arcadian.css";
const Arcadian = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/gloria");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/jade");
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
    <div className="arcadian">
      <div className="packages-mall-shop-g22-ground-parent">
        <div className="packages-mall-shop">
          Packages Mall Shop G22 Ground Floor Entrance Number 4, Lahore
        </div>
        <img
          className="material-symbolslocation-on-r-icon1"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div3">03056932222</div>
        <a
          className="menu1"
          href="https://arcadiancafe.com/menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website1"
          href="https://arcadiancafe.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon1"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site1"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon1"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="ac-1-parent">
        <img className="ac-1-icon" alt="" src="/ac-1@2x.png" />
        <div className="save2">
          <p className="save3">Save</p>
        </div>
        <div className="arcadian-cafe1">Arcadian Cafe</div>
        <img className="like-1-icon1" alt="" src="/like-1.svg" />
        <div className="review1">Review</div>
        <img className="vector-icon5" alt="" src="/vector3.svg" />
        <img className="ac2-2-icon" alt="" src="/ac2-2@2x.png" />
      </div>
      <div className="food-gallery1">Food Gallery</div>
      <div className="arcadian-child" />
      <div className="about-arcadian-cafe">About Arcadian Cafe</div>
      <div className="you-may-also1">You may also be interested in</div>
      <div className="arcadian-item" />
      <div className="features-and-facilities-group">
        <div className="features-and-facilities1">Features and facilities</div>
        <div className="social-networks1">Social Networks</div>
        <div className="area2">Area</div>
        <a
          className="facebook1"
          href="https://www.facebook.com/arcadiancafe/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram1"
          href="https://www.instagram.com/arcadiancafe/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon1" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon1"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards1">Accepts Credit Cards</b>
        <b className="smoking-area1">Smoking Area</b>
        <b className="breakfastslunch">Breakfasts,Lunch</b>
        <b className="packages-mall">Packages Mall</b>
        <img
          className="material-symbolscredit-card-icon1"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon1" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon1"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area1"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location1">Location</div>
      <div className="arcadian-inner" />
      <div className="frame-parent20">
        <div className="frame-parent21" onClick={onFrameContainer3Click}>
          <img className="frame-child22" alt="" src="/frame-2654.svg" />
          <img className="u-1-icon1" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious1">Urban Cafe Yoglicious</div>
          <div className="y2-121" />
          <div className="cafe4">Cafe</div>
          <img
            className="rating-component-icon24"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent22" onClick={onFrameContainer4Click}>
          <img className="frame-child22" alt="" src="/frame-2655.svg" />
          <div className="urban-cafe-yoglicious1">Gloria Jeans</div>
          <div className="y2-121" />
          <div className="cafe4">
            <p className="save3">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon24"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent23" onClick={onFrameContainer5Click}>
          <img className="frame-child24" alt="" src="/frame-2656.svg" />
          <div className="jade-cafe1">Jade Cafe</div>
          <div className="y2-123" />
          <div className="cafe5">Cafe</div>
          <img
            className="rating-component-icon26"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
      <div className="footer-441">
        <div className="footer-44-child3" />
        <b className="subscribe-to-newsletter5">Subscribe to Newsletter</b>
        <b className="follow-us5">Follow Us</b>
        <div className="footer-44-child4" />
        <div className="text5" />
        <div className="privacy-policy-parent3">
          <div className="privacy-policy5" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps6" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop5" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us6" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright5">
          <div className="all-rights-reserved5">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe10">
          <div className="subscribe-child3" />
          <div className="enter-your-email5">Enter your email Address</div>
          <div className="buttonstarted5">
            <div className="subscribe11">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent3">
          <img className="image-41-icon5" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon5" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon5" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon15" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child5" />
        <img className="footer-44-child6" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child7" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon5" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon5" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon5" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon5" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar4">
        <img
          className="icon16"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon6"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart4"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery8" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites4" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map4" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat4" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events7" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani5" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed4"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Arcadian;
