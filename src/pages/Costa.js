import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Costa.css";
const Costa = () => {
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
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/buttler");
  }, [navigate]);

  return (
    <div className="costa">
      <div className="block-b3-gulberg-iii-lahore-parent">
        <div className="block-b3-gulberg">
          Block B3, Gulberg III, Lahore 54000 Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon7"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div53">03204440112</div>
        <a
          className="menu7"
          href="https://menuprices.pk/cafe-costa-lahore-menu-prices/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website7"
          href="https://www.facebook.com/cafecosta.lhr/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon7"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site7"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon7"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="cc2-1-parent">
        <img className="cc2-1-icon" alt="" src="/cc2-1@2x.png" />
        <div className="save14">
          <p className="save15">Save</p>
        </div>
        <div className="cafe-costa1">Cafe Costa</div>
        <img className="like-1-icon7" alt="" src="/like-1.svg" />
        <div className="review7">Review</div>
        <img className="vector-icon33" alt="" src="/vector6.svg" />
        <img className="cc-3-icon" alt="" src="/cc-3@2x.png" />
      </div>
      <div className="food-gallery7">Food Gallery</div>
      <div className="costa-child" />
      <div className="about-cafe-costa">About Cafe Costa</div>
      <div className="you-may-also7">You may also be interested in</div>
      <div className="costa-item" />
      <div className="features-and-facilities-parent5">
        <div className="features-and-facilities7">Features and facilities</div>
        <div className="social-networks7">Social Networks</div>
        <div className="area9">Area</div>
        <a
          className="facebook7"
          href="https://www.facebook.com/cafecosta.lhr/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram7"
          href="https://www.instagram.com/cafecostaeindhoven/"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon7" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon7"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards7">Accepts Credit Cards</b>
        <b className="dine-in">Dine in</b>
        <b className="italianchinese2">Italian,Chinese</b>
        <b className="gulberg-iii1">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon7"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon7" alt="" src="/mdismoking1.svg" />
        <img
          className="material-symbolsbookmark-outl-icon7"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area7"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location7">Location</div>
      <div className="costa-inner" />
      <div className="footer-445">
        <div className="footer-44-child23" />
        <b className="subscribe-to-newsletter27">Subscribe to Newsletter</b>
        <b className="follow-us27">Follow Us</b>
        <div className="footer-44-child24" />
        <div className="text29" />
        <div className="privacy-policy-parent25">
          <div className="privacy-policy28" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps29" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop29" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us30" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright27">
          <div className="all-rights-reserved27">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe54">
          <div className="subscribe-child25" />
          <div className="enter-your-email27">Enter your email Address</div>
          <div className="buttonstarted27">
            <div className="subscribe55">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent26">
          <img className="image-41-icon29" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon29" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon29" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon61" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child25" />
        <img className="footer-44-child26" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child27" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon27" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon27" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon27" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon27" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar25">
        <img
          className="icon62"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon34"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart25"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery30" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites25" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map26" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat25" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events28" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani32" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed25"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent46">
        <div className="frame-parent47" onClick={onFrameContainer3Click}>
          <img className="frame-child42" alt="" src="/frame-2636.svg" />
          <div className="mocca-coffee1">Mocca Coffee</div>
          <div className="y2-135" />
          <div className="coffee-teacafe2">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon42"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent48" onClick={onFrameContainer4Click}>
          <img className="frame-child43" alt="" src="/frame-2637.svg" />
          <img className="u-1-icon2" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious2">Urban Cafe Yoglicious</div>
          <div className="y2-136" />
          <div className="cafe6">Cafe</div>
          <img
            className="rating-component-icon43"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent49" onClick={onFrameContainer5Click}>
          <img className="frame-child44" alt="" src="/frame-2638.svg" />
          <div className="urban-cafe-yoglicious2">Butler’s Chocolate Cafe</div>
          <div className="y2-136" />
          <div className="desertcafe1">Desert,Cafe</div>
          <img
            className="rating-component-icon43"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Costa;
