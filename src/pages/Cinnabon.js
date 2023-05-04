import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cinnabon.css";
const Cinnabon = () => {
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
    navigate("/mocca");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/buttler");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/karak");
  }, [navigate]);

  return (
    <div className="cinnabon1">
      <div className="b3-gulberg-3-mian-mehmood-al-parent">
        <div className="b3-gulberg-3">
          2B/3 Gulberg 3, Mian Mehmood Ali Kasuri Rd, Lahore 54660 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon9"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div11">042111176557</div>
        <a
          className="menu9"
          href="http://www.cinnabon.pk/menu/"
          target="_blank"
        >
          Menu
        </a>
        <a className="website9" href="http://www.cinnabon.pk/" target="_blank">
          Website
        </a>
        <img
          className="material-symbolscall-icon9"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site9"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon9"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="c2-1-parent">
        <img className="c2-1-icon" alt="" src="/c2-1@2x.png" />
        <div className="save18">
          <p className="save19">Save</p>
        </div>
        <div className="cinnabon2">Cinnabon</div>
        <img className="like-1-icon9" alt="" src="/like-1.svg" />
        <div className="review9">Review</div>
        <img className="vector-icon23" alt="" src="/vector6.svg" />
        <img className="c1-2-icon" alt="" src="/c1-2@2x.png" />
      </div>
      <div className="food-gallery9">Food Gallery</div>
      <div className="cinnabon-child" />
      <div className="about-cinnabon">About Cinnabon</div>
      <div className="you-may-also9">You may also be interested in</div>
      <div className="cinnabon-item" />
      <div className="features-and-facilities-parent7">
        <div className="features-and-facilities9">Features and facilities</div>
        <div className="social-networks9">Social Networks</div>
        <div className="area9">Area</div>
        <a
          className="facebook9"
          href="https://www.facebook.com/Cinnabon/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram9"
          href="https://www.instagram.com/cinnabon/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon9" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon9"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards9">Accepts Credit Cards</b>
        <b className="dine-in4">Dine in</b>
        <b className="coffeeteacafebreakfast">Coffee,Tea,Cafe,Breakfast</b>
        <b className="gulberg-iii2">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon9"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon9"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area9"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location9">Location</div>
      <div className="cinnabon-inner" />
      <div className="footer-448">
        <div className="footer-44-child38" />
        <b className="subscribe-to-newsletter12">Subscribe to Newsletter</b>
        <b className="follow-us12">Follow Us</b>
        <div className="footer-44-child39" />
        <div className="text12" />
        <div className="privacy-policy-parent9">
          <div className="privacy-policy12" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps12" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop12" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us12" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright12">
          <div className="all-rights-reserved12">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe24">
          <div className="subscribe-child10" />
          <div className="enter-your-email12">Enter your email Address</div>
          <div className="buttonstarted12">
            <div className="subscribe25">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent10">
          <img className="image-41-icon12" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon12" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon12" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon30" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child40" />
        <img className="footer-44-child41" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child42" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon12" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon12" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon12" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon12" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar12">
        <img
          className="icon31"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon24"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart12"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery15" onClick={onGalleryTextClick}>
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
        <div className="kahani12" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed12"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="vector-icon25" alt="" src="/vector8.svg" />
      <div className="frame-parent51">
        <div className="frame-parent52" onClick={onFrameContainer3Click}>
          <img className="frame-child46" alt="" src="/frame-2648.svg" />
          <div className="mocca-coffee5">Mocca Coffee</div>
          <div className="y2-140" />
          <div className="coffee-teacafe5">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon48"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent53" onClick={onFrameContainer4Click}>
          <img className="frame-child47" alt="" src="/frame-2649.svg" />
          <div className="butlers-chocolate-cafe2">Butler’s Chocolate Cafe</div>
          <div className="y2-141" />
          <div className="desertcafe3">Desert,Cafe</div>
          <img
            className="rating-component-icon49"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="k2-1-container" onClick={onFrameContainer5Click}>
          <img className="k2-1-icon2" alt="" src="/k2-1@2x.png" />
          <img className="frame-child48" alt="" src="/frame-2650.svg" />
          <div className="butlers-chocolate-cafe2">Karak Khel</div>
          <div className="y2-141" />
          <div className="cafe9">Cafe</div>
          <img
            className="rating-component-icon49"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cinnabon;
