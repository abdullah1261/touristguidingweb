import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Costa.css";
const Costa = () => {
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
          className="material-symbolslocation-on-r-icon5"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div7">03204440112</div>
        <a
          className="menu5"
          href="https://menuprices.pk/cafe-costa-lahore-menu-prices/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website5"
          href="https://www.facebook.com/cafecosta.lhr/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon5"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site5"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon5"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="cc2-1-parent">
        <img className="cc2-1-icon" alt="" src="/cc2-1@2x.png" />
        <div className="save10">
          <p className="save11">Save</p>
        </div>
        <div className="cafe-costa1">Cafe Costa</div>
        <img className="like-1-icon5" alt="" src="/like-1.svg" />
        <div className="review5">Review</div>
        <img className="vector-icon14" alt="" src="/vector6.svg" />
        <img className="cc-3-icon" alt="" src="/cc-3@2x.png" />
      </div>
      <div className="food-gallery5">Food Gallery</div>
      <div className="costa-child" />
      <div className="about-cafe-costa">About Cafe Costa</div>
      <div className="you-may-also5">You may also be interested in</div>
      <div className="costa-item" />
      <div className="features-and-facilities-parent3">
        <div className="features-and-facilities5">Features and facilities</div>
        <div className="social-networks5">Social Networks</div>
        <div className="area5">Area</div>
        <a
          className="facebook5"
          href="https://www.facebook.com/cafecosta.lhr/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram5"
          href="https://www.instagram.com/cafecostaeindhoven/"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon5" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon5"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards5">Accepts Credit Cards</b>
        <b className="dine-in">Dine in</b>
        <b className="italianchinese2">Italian,Chinese</b>
        <b className="gulberg-iii1">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon5"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon5" alt="" src="/mdismoking1.svg" />
        <img
          className="material-symbolsbookmark-outl-icon5"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area5"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location5">Location</div>
      <div className="costa-inner" />
      <div className="footer-444">
        <div className="footer-44-child18" />
        <b className="subscribe-to-newsletter8">Subscribe to Newsletter</b>
        <b className="follow-us8">Follow Us</b>
        <div className="footer-44-child19" />
        <div className="text8" />
        <div className="privacy-policy-parent5">
          <div className="privacy-policy8" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps8" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop8" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us8" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright8">
          <div className="all-rights-reserved8">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe16">
          <div className="subscribe-child6" />
          <div className="enter-your-email8">Enter your email Address</div>
          <div className="buttonstarted8">
            <div className="subscribe17">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent6">
          <img className="image-41-icon8" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon8" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon8" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon22" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child20" />
        <img className="footer-44-child21" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child22" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon8" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon8" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon8" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon8" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar8">
        <img
          className="icon23"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon15"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart8"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery11" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites8" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map8" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat8" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events11" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani8" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed8"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent36">
        <div className="frame-parent37" onClick={onFrameContainer3Click}>
          <img className="frame-child34" alt="" src="/frame-2636.svg" />
          <div className="mocca-coffee1">Mocca Coffee</div>
          <div className="y2-129" />
          <div className="coffee-teacafe2">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon36"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent38" onClick={onFrameContainer4Click}>
          <img className="frame-child35" alt="" src="/frame-2637.svg" />
          <img className="u-1-icon1" alt="" src="/u-1@2x.png" />
          <div className="urban-cafe-yoglicious1">Urban Cafe Yoglicious</div>
          <div className="y2-130" />
          <div className="cafe4">Cafe</div>
          <img
            className="rating-component-icon37"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent39" onClick={onFrameContainer5Click}>
          <img className="frame-child36" alt="" src="/frame-2638.svg" />
          <div className="urban-cafe-yoglicious1">Butler’s Chocolate Cafe</div>
          <div className="y2-130" />
          <div className="desertcafe1">Desert,Cafe</div>
          <img
            className="rating-component-icon37"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Costa;
