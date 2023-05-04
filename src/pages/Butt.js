import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Butt.css";
const Butt = () => {
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
    navigate("/haveli");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/junoon");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/qabail");
  }, [navigate]);

  return (
    <div className="butt">
      <div className="lakshmi-chowk-mcleod-rd-laho-parent">
        <div className="lakshmi-chowk-mcleod">
          Lakshmi Chowk, McLeod Rd, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon16"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div62">04237230353</div>
        <a
          className="menu16"
          href="https://buttkarahi.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website16"
          href="https://buttkarahi.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon16"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site16"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon16"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="b2-1-group">
        <img className="b2-1-icon1" alt="" src="/b2-11@2x.png" />
        <div className="save32">
          <p className="save33">Save</p>
        </div>
        <div className="butt-karahi-tikka1">Butt Karahi Tikka</div>
        <img className="like-1-icon16" alt="" src="/like-1.svg" />
        <div className="review16">Review</div>
        <img className="vector-icon54" alt="" src="/vector21.svg" />
        <img className="b-2-icon" alt="" src="/b-2@2x.png" />
      </div>
      <div className="food-gallery16">Food Gallery</div>
      <div className="butt-child" />
      <div className="about-butt-karahi">About Butt Karahi Tikka</div>
      <div className="you-may-also16">You may also be interested in</div>
      <div className="butt-item" />
      <div className="features-and-facilities-parent14">
        <div className="features-and-facilities16">Features and facilities</div>
        <div className="social-networks16">Social Networks</div>
        <div className="area18">Area</div>
        <a
          className="facebook16"
          href="https://www.facebook.com/OfficialButtKarahi/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram16"
          href="https://www.instagram.com/buttkarahiofficial/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon16" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon16"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards16">Accepts Credit Cards</b>
        <b className="smoking-area9">Smoking Area</b>
        <b className="pakistani-cuisineasian2">Pakistani Cuisine,Asian</b>
        <b className="lakshami-chowk">Lakshami Chowk</b>
        <img
          className="material-symbolscredit-card-icon16"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon13" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon16"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area16"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location16">Location</div>
      <div className="butt-inner" />
      <div className="footer-4414">
        <div className="footer-44-child68" />
        <b className="subscribe-to-newsletter36">Subscribe to Newsletter</b>
        <b className="follow-us36">Follow Us</b>
        <div className="footer-44-child69" />
        <div className="text38" />
        <div className="privacy-policy-parent34">
          <div className="privacy-policy37" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps38" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop38" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us39" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright36">
          <div className="all-rights-reserved36">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe72">
          <div className="subscribe-child34" />
          <div className="enter-your-email36">Enter your email Address</div>
          <div className="buttonstarted36">
            <div className="subscribe73">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent35">
          <img className="image-41-icon38" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon38" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon38" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon79" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child70" />
        <img className="footer-44-child71" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child72" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon36" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon36" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon36" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon36" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar34">
        <img
          className="icon80"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon55"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart34"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery39" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites34" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map35" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat34" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events37" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani41" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed34"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent80">
        <div className="frame-parent81" onClick={onFrameContainer3Click}>
          <img className="frame-child69" alt="" src="/frame-2666.svg" />
          <div className="haveli-restaurant2">Haveli Restaurant</div>
          <div className="y2-158" />
          <div className="barbecuepakistani2">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon69"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent82" onClick={onFrameContainer4Click}>
          <img className="frame-child70" alt="" src="/frame-2667.svg" />
          <div className="junoon-heritage2">Junoon Heritage</div>
          <div className="y2-159" />
          <div className="middle-easternpakistani2">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon70"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent83" onClick={onFrameContainer5Click}>
          <img className="frame-child71" alt="" src="/frame-2668.svg" />
          <div className="junoon-heritage2">Qabail Tribes</div>
          <div className="y2-159" />
          <div className="barbecueasian3">Barbecue,Asian</div>
          <img
            className="rating-component-icon70"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Butt;
