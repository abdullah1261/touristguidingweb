import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Yum.css";
const Yum = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/andaaz");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/dynasty");
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
    <div className="yum">
      <div className="k-gulberg-ii-lahore-pakistan-parent">
        <div className="k-gulberg-ii">24-K, Gulberg II, Lahore Pakistan</div>
        <img
          className="material-symbolslocation-on-r-icon"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div2">03205715535</div>
        <a
          className="menu"
          href="https://www.facebook.com/YumChineseAndThai/menu"
          target="_blank"
        >
          Menu
        </a>
        <a className="website" href="http://yumpakistan.pk/" target="_blank">
          Website
        </a>
        <img
          className="material-symbolscall-icon"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="y-1-parent">
        <img className="y-1-icon" alt="" src="/y-1@2x.png" />
        <div className="save">
          <p className="save1">Save</p>
        </div>
        <div className="yum-chinese1">{`Yum Chinese & Thai Restaurant`}</div>
        <img className="like-1-icon" alt="" src="/like-1.svg" />
        <div className="review">Review</div>
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <img className="y2-2-icon" alt="" src="/y2-1@2x.png" />
      </div>
      <div className="food-gallery">Food Gallery</div>
      <div className="yum-child" />
      <div className="about-yum-chinese">{`About Yum Chinese & Thai Restuarant`}</div>
      <div className="you-may-also">You may also be interested in</div>
      <div className="yum-item" />
      <div className="features-and-facilities-parent">
        <div className="features-and-facilities">Features and facilities</div>
        <div className="social-networks">Social Networks</div>
        <div className="area1">Area</div>
        <a
          className="facebook"
          href="https://www.facebook.com/YumChineseAndThai/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/explore/locations/261086927/yum-chinese-thai-lahore/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards">Accepts Credit Cards</b>
        <b className="smoking-area">Smoking Area</b>
        <b className="chinesethaiasian">Chinese,Thai,Asian</b>
        <b className="gulberg-ii">Gulberg II</b>
        <img
          className="material-symbolscredit-card-icon"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location">Location</div>
      <div className="yum-inner" />
      <div className="frame-parent16">
        <div className="frame-parent17" onClick={onFrameContainer3Click}>
          <img className="frame-child19" alt="" src="/frame-2624.svg" />
          <div className="andaaz-restaurant1">{`Andaaz Restaurant `}</div>
          <div className="y2-118" />
          <div className="pakistani4">
            <p className="save1">Pakistani</p>
          </div>
          <img
            className="rating-component-icon21"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent18" onClick={onFrameContainer4Click}>
          <img className="frame-child19" alt="" src="/frame-2625.svg" />
          <div className="andaaz-restaurant1">Spice Bazaar</div>
          <div className="y2-118" />
          <div className="pakistani4">
            <p className="save1">Pakistani</p>
          </div>
          <img
            className="rating-component-icon21"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent19" onClick={onFrameContainer5Click}>
          <img className="frame-child19" alt="" src="/frame-2626.svg" />
          <div className="dynasty2">
            <p className="save1">Dynasty</p>
          </div>
          <div className="y2-120" />
          <div className="chineseasian2">Chinese,Asian</div>
          <img
            className="rating-component-icon23"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
      <div className="footer-44">
        <div className="footer-44-child" />
        <b className="subscribe-to-newsletter4">Subscribe to Newsletter</b>
        <b className="follow-us4">Follow Us</b>
        <div className="footer-44-item" />
        <div className="text4" />
        <div className="privacy-policy-parent2">
          <div className="privacy-policy4" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps5" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop4" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us5" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright4">
          <div className="all-rights-reserved4">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe8">
          <div className="subscribe-child2" />
          <div className="enter-your-email4">Enter your email Address</div>
          <div className="buttonstarted4">
            <div className="subscribe9">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent2">
          <img className="image-41-icon4" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon4" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon4" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon13" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-inner" />
        <img className="footer-44-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon4" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon4" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon4" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon4" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar3">
        <img
          className="icon14"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon4"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart3"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery7" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites3" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map3" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat3" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events6" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani4" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed3"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Yum;
