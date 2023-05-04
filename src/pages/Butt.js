import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Butt.css";
const Butt = () => {
  const navigate = useNavigate();

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

  const onImage1Click = useCallback(() => {
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
          className="material-symbolslocation-on-r-icon15"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div17">04237230353</div>
        <a
          className="menu15"
          href="https://buttkarahi.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website15"
          href="https://buttkarahi.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon15"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site15"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon15"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="b2-1-group">
        <img className="b2-1-icon1" alt="" src="/b2-11@2x.png" />
        <div className="save30">
          <p className="save31">Save</p>
        </div>
        <div className="butt-karahi-tikka1">Butt Karahi Tikka</div>
        <img className="like-1-icon15" alt="" src="/like-1.svg" />
        <div className="review15">Review</div>
        <img className="vector-icon37" alt="" src="/vector2.svg" />
        <img className="b-2-icon" alt="" src="/b-2@2x.png" />
      </div>
      <div className="food-gallery15">Food Gallery</div>
      <div className="butt-child" />
      <div className="about-butt-karahi">About Butt Karahi Tikka</div>
      <div className="you-may-also15">You may also be interested in</div>
      <div className="butt-item" />
      <div className="features-and-facilities-parent13">
        <div className="features-and-facilities15">Features and facilities</div>
        <div className="social-networks15">Social Networks</div>
        <div className="area15">Area</div>
        <a
          className="facebook15"
          href="https://www.facebook.com/OfficialButtKarahi/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram15"
          href="https://www.instagram.com/buttkarahiofficial/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon15" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon15"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards15">Accepts Credit Cards</b>
        <b className="smoking-area8">Smoking Area</b>
        <b className="pakistani-cuisineasian2">Pakistani Cuisine,Asian</b>
        <b className="lakshami-chowk">Lakshami Chowk</b>
        <img
          className="material-symbolscredit-card-icon15"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon12" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon15"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area15"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location15">Location</div>
      <div className="butt-inner" />
      <div className="footer-4414">
        <div className="footer-44-child68" />
        <b className="subscribe-to-newsletter18">Subscribe to Newsletter</b>
        <b className="follow-us18">Follow Us</b>
        <div className="footer-44-child69" />
        <div className="text18" />
        <div className="privacy-policy-parent15">
          <div className="privacy-policy18" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps18" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop18" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us18" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright18">
          <div className="all-rights-reserved18">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe36">
          <div className="subscribe-child16" />
          <div className="enter-your-email18">Enter your email Address</div>
          <div className="buttonstarted18">
            <div className="subscribe37">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent16">
          <img className="image-41-icon18" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon18" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon18" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon42" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child70" />
        <img className="footer-44-child71" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child72" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon18" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon18" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon18" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon18" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar18">
        <img
          className="icon43"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon38"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart18"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery21" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites18" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map18" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat18" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events21" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani18" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed18"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent74">
        <div className="frame-parent75" onClick={onFrameContainer3Click}>
          <img className="frame-child64" alt="" src="/frame-2666.svg" />
          <div className="haveli-restaurant1">Haveli Restaurant</div>
          <div className="y2-155" />
          <div className="barbecuepakistani1">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon66"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent76" onClick={onFrameContainer4Click}>
          <img className="frame-child65" alt="" src="/frame-2667.svg" />
          <div className="junoon-heritage1">Junoon Heritage</div>
          <div className="y2-156" />
          <div className="middle-easternpakistani1">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon67"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent77" onClick={onFrameContainer5Click}>
          <img className="frame-child66" alt="" src="/frame-2668.svg" />
          <div className="junoon-heritage1">Qabail Tribes</div>
          <div className="y2-156" />
          <div className="barbecueasian2">Barbecue,Asian</div>
          <img
            className="rating-component-icon67"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Butt;
