import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Haveli.css";
const Haveli = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
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

  const onFrameContainer3Click = useCallback(() => {
    navigate("/junoon");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/qabail");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/monal");
  }, [navigate]);

  return (
    <div className="haveli">
      <div className="a-food-street-lahore-pakista-parent">
        <div className="a-food-street">
          2170-A, Food Street, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon20"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div66">03214651051</div>
        <a
          className="menu20"
          href="https://www.haveli.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website20"
          href="https://www.haveli.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon20"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site20"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon20"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="h2-2-parent">
        <img className="h2-2-icon" alt="" src="/h2-2@2x.png" />
        <div className="save40">
          <p className="save41">Save</p>
        </div>
        <div className="haveli-restaurant6">Haveli Restaurant</div>
        <img className="like-1-icon20" alt="" src="/like-1.svg" />
        <div className="review20">Review</div>
        <img className="vector-icon65" alt="" src="/vector13.svg" />
        <img className="h-4-icon" alt="" src="/h-4@2x.png" />
      </div>
      <div className="food-gallery20">Food Gallery</div>
      <div className="haveli-child" />
      <div className="about-haveli-restaurant">{`About Haveli Restaurant `}</div>
      <div className="you-may-also20">You may also be interested in</div>
      <div className="haveli-item" />
      <div className="features-and-facilities-parent18">
        <div className="features-and-facilities20">Features and facilities</div>
        <div className="social-networks20">Social Networks</div>
        <div className="area22">Area</div>
        <a
          className="facebook20"
          href="https://www.facebook.com/HaveliRestaurantLahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram19"
          href="https://www.instagram.com/havelirestaurantrooftop/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon20" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon19"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards20">Accepts Credit Cards</b>
        <b className="smoking-area10">Smoking Area</b>
        <b className="pakistani-cuisine2">Pakistani Cuisine</b>
        <b className="food-street-lahore">Food Street Lahore</b>
        <img
          className="material-symbolscredit-card-icon20"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon14" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon20"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area20"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location20">Location</div>
      <div className="haveli-inner" />
      <div className="navbar38">
        <img
          className="icon89"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon66"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart38"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery43" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites38" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map39" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat38" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events41" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani45" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed38"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="footer-40">
        <div className="footer-40-child" />
        <b className="subscribe-to-newsletter40">Subscribe to Newsletter</b>
        <b className="follow-us40">Follow Us</b>
        <div className="footer-40-item" />
        <div className="text42" />
        <div className="privacy-policy-parent38">
          <div className="privacy-policy41" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps42" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop42" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us43" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright40">
          <div className="all-rights-reserved40">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe80">
          <div className="subscribe-child38" />
          <div className="enter-your-email40">Enter your email Address</div>
          <div className="buttonstarted40">
            <div className="subscribe81">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent39">
          <img className="image-41-icon42" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon42" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon42" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon90" alt="" src="/-1-11@2x.png" />
        <div className="footer-40-inner" />
        <img className="footer-40-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-40-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon40" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon40" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon40" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon40" alt="" src="/image-134@2x.png" />
      </div>
      <div className="frame-parent95">
        <div className="frame-parent96" onClick={onFrameContainer3Click}>
          <img className="frame-child81" alt="" src="/frame-2678.svg" />
          <div className="junoon-heritage5">Junoon Heritage</div>
          <div className="y2-168" />
          <div className="middle-easternpakistani4">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon81"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent97" onClick={onFrameContainer4Click}>
          <img className="frame-child82" alt="" src="/frame-2679.svg" />
          <div className="junoon-heritage5">Qabail Tribes</div>
          <div className="y2-168" />
          <div className="barbecueasian7">Barbecue,Asian</div>
          <img
            className="rating-component-icon81"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent98" onClick={onFrameContainer5Click}>
          <img className="frame-child83" alt="" src="/frame-2680.svg" />
          <img className="icon91" alt="" src="/4-3@2x.png" />
          <div className="monal5">Monal</div>
          <div className="barbecueasian8">{`Barbecue,Asian `}</div>
          <img
            className="rating-component-icon83"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Haveli;
