import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Urban.css";
const Urban = () => {
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

  const onFrameContainer3Click = useCallback(() => {
    navigate("/gloria");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/arcadian");
  }, [navigate]);

  return (
    <div className="urban">
      <div className="a-48-ghalib-rd-block-c2-block-parent">
        <div className="a-48-ghalib">
          A 48 Ghalib Rd Block C2 Block C 2 Gulberg III, Lahore 54660 Pakistan+
        </div>
        <img
          className="material-symbolslocation-on-r-icon13"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div59">03052420000</div>
        <a
          className="menu13"
          href="https://www.facebook.com/TheUrbanCafeYoglicious"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website13"
          href="https://web.pakcheers.com/dumpukht-kada-lahore"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon13"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site13"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon13"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="u2-1-parent">
        <img className="u2-1-icon" alt="" src="/u2-1@2x.png" />
        <div className="save26">
          <p className="save27">Save</p>
        </div>
        <div className="urban-cafe-yoglicious5">Urban Cafe Yoglicious</div>
        <img className="like-1-icon13" alt="" src="/like-1.svg" />
        <div className="review13">Review</div>
        <img className="vector-icon47" alt="" src="/vector6.svg" />
        <img className="u-2-icon" alt="" src="/u-1@2x.png" />
      </div>
      <div className="food-gallery13">Food Gallery</div>
      <div className="urban-child" />
      <div className="about-dumpukht">About DumPukht</div>
      <div className="you-may-also13">You may also be interested in</div>
      <div className="urban-item" />
      <div className="features-and-facilities-parent11">
        <div className="features-and-facilities13">Features and facilities</div>
        <div className="social-networks13">Social Networks</div>
        <div className="area15">Area</div>
        <a
          className="facebook13"
          href="https://www.facebook.com/TheUrbanCafeYoglicious"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram13"
          href="https://www.instagram.com/urbancafeyoglicious/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon13" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon13"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards13">Accepts Credit Cards</b>
        <b className="smoking-area7">Smoking Area</b>
        <b className="breakfastlunchbrunch">Breakfast,Lunch,Brunch</b>
        <b className="gulberg-iii3">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon13"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon11" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon13"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area13"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location13">Location</div>
      <div className="urban-inner" />
      <div className="footer-4411">
        <div className="footer-44-child53" />
        <b className="subscribe-to-newsletter33">Subscribe to Newsletter</b>
        <b className="follow-us33">Follow Us</b>
        <div className="footer-44-child54" />
        <div className="text35" />
        <div className="privacy-policy-parent31">
          <div className="privacy-policy34" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps35" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop35" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us36" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright33">
          <div className="all-rights-reserved33">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe66">
          <div className="subscribe-child31" />
          <div className="enter-your-email33">Enter your email Address</div>
          <div className="buttonstarted33">
            <div className="subscribe67">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent32">
          <img className="image-41-icon35" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon35" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon35" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon73" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child55" />
        <img className="footer-44-child56" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child57" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon33" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon33" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon33" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon33" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar31">
        <img
          className="icon74"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon48"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart31"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery36" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites31" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map32" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat31" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events34" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani38" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed31"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent68">
        <div className="frame-parent69" onClick={onFrameContainer3Click}>
          <img className="frame-child60" alt="" src="/frame-2657.svg" />
          <div className="gloria-jeans3">Gloria Jeans</div>
          <div className="y2-151" />
          <div className="coffee-tea-container2">
            <p className="save27">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon60"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent70" onClick={onFrameContainer4Click}>
          <img className="frame-child61" alt="" src="/frame-2658.svg" />
          <div className="jade-cafe5">Jade Cafe</div>
          <div className="y2-152" />
          <div className="cafe13">Cafe</div>
          <img
            className="rating-component-icon61"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent71" onClick={onFrameContainer5Click}>
          <img className="frame-child62" alt="" src="/frame-2659.svg" />
          <div className="arcadian-cafe4">Arcadian Cafe</div>
          <div className="cafefusion3">Cafe,Fusion</div>
          <img
            className="rating-component-icon61"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Urban;
