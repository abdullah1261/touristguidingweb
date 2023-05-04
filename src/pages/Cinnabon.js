import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cinnabon.css";
const Cinnabon = () => {
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
          className="material-symbolslocation-on-r-icon11"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div57">042111176557</div>
        <a
          className="menu11"
          href="http://www.cinnabon.pk/menu/"
          target="_blank"
        >
          Menu
        </a>
        <a className="website11" href="http://www.cinnabon.pk/" target="_blank">
          Website
        </a>
        <img
          className="material-symbolscall-icon11"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site11"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon11"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="c2-1-parent">
        <img className="c2-1-icon" alt="" src="/c2-1@2x.png" />
        <div className="save22">
          <p className="save23">Save</p>
        </div>
        <div className="cinnabon2">Cinnabon</div>
        <img className="like-1-icon11" alt="" src="/like-1.svg" />
        <div className="review11">Review</div>
        <img className="vector-icon42" alt="" src="/vector6.svg" />
        <img className="c1-2-icon" alt="" src="/c1-2@2x.png" />
      </div>
      <div className="food-gallery11">Food Gallery</div>
      <div className="cinnabon-child" />
      <div className="about-cinnabon">About Cinnabon</div>
      <div className="you-may-also11">You may also be interested in</div>
      <div className="cinnabon-item" />
      <div className="features-and-facilities-parent9">
        <div className="features-and-facilities11">Features and facilities</div>
        <div className="social-networks11">Social Networks</div>
        <div className="area13">Area</div>
        <a
          className="facebook11"
          href="https://www.facebook.com/Cinnabon/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram11"
          href="https://www.instagram.com/cinnabon/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon11" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon11"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards11">Accepts Credit Cards</b>
        <b className="dine-in4">Dine in</b>
        <b className="coffeeteacafebreakfast">Coffee,Tea,Cafe,Breakfast</b>
        <b className="gulberg-iii2">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon11"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon11"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area11"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location11">Location</div>
      <div className="cinnabon-inner" />
      <div className="footer-449">
        <div className="footer-44-child43" />
        <b className="subscribe-to-newsletter31">Subscribe to Newsletter</b>
        <b className="follow-us31">Follow Us</b>
        <div className="footer-44-child44" />
        <div className="text33" />
        <div className="privacy-policy-parent29">
          <div className="privacy-policy32" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps33" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop33" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us34" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright31">
          <div className="all-rights-reserved31">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe62">
          <div className="subscribe-child29" />
          <div className="enter-your-email31">Enter your email Address</div>
          <div className="buttonstarted31">
            <div className="subscribe63">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent30">
          <img className="image-41-icon33" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon33" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon33" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon69" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child45" />
        <img className="footer-44-child46" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child47" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon31" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon31" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon31" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon31" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar29">
        <img
          className="icon70"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon43"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart29"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery34" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites29" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map30" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat29" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events32" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani36" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed29"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <img className="vector-icon44" alt="" src="/vector8.svg" />
      <div className="frame-parent61">
        <div className="frame-parent62" onClick={onFrameContainer3Click}>
          <img className="frame-child54" alt="" src="/frame-2648.svg" />
          <div className="mocca-coffee5">Mocca Coffee</div>
          <div className="y2-146" />
          <div className="coffee-teacafe5">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon54"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent63" onClick={onFrameContainer4Click}>
          <img className="frame-child55" alt="" src="/frame-2649.svg" />
          <div className="butlers-chocolate-cafe2">Butler’s Chocolate Cafe</div>
          <div className="y2-147" />
          <div className="desertcafe3">Desert,Cafe</div>
          <img
            className="rating-component-icon55"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="k2-1-container" onClick={onFrameContainer5Click}>
          <img className="k2-1-icon2" alt="" src="/k2-1@2x.png" />
          <img className="frame-child56" alt="" src="/frame-2650.svg" />
          <div className="butlers-chocolate-cafe2">Karak Khel</div>
          <div className="y2-147" />
          <div className="cafe11">Cafe</div>
          <img
            className="rating-component-icon55"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cinnabon;
