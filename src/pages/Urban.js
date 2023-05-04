import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Urban.css";
const Urban = () => {
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
          className="material-symbolslocation-on-r-icon12"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div14">03052420000</div>
        <a
          className="menu12"
          href="https://www.facebook.com/TheUrbanCafeYoglicious"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website12"
          href="https://web.pakcheers.com/dumpukht-kada-lahore"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon12"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site12"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon12"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="u2-1-parent">
        <img className="u2-1-icon" alt="" src="/u2-1@2x.png" />
        <div className="save24">
          <p className="save25">Save</p>
        </div>
        <div className="urban-cafe-yoglicious5">Urban Cafe Yoglicious</div>
        <img className="like-1-icon12" alt="" src="/like-1.svg" />
        <div className="review12">Review</div>
        <img className="vector-icon30" alt="" src="/vector6.svg" />
        <img className="u-2-icon" alt="" src="/u-1@2x.png" />
      </div>
      <div className="food-gallery12">Food Gallery</div>
      <div className="urban-child" />
      <div className="about-dumpukht">About DumPukht</div>
      <div className="you-may-also12">You may also be interested in</div>
      <div className="urban-item" />
      <div className="features-and-facilities-parent10">
        <div className="features-and-facilities12">Features and facilities</div>
        <div className="social-networks12">Social Networks</div>
        <div className="area12">Area</div>
        <a
          className="facebook12"
          href="https://www.facebook.com/TheUrbanCafeYoglicious"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram12"
          href="https://www.instagram.com/urbancafeyoglicious/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon12" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon12"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards12">Accepts Credit Cards</b>
        <b className="smoking-area6">Smoking Area</b>
        <b className="breakfastlunchbrunch">Breakfast,Lunch,Brunch</b>
        <b className="gulberg-iii3">Gulberg III</b>
        <img
          className="material-symbolscredit-card-icon12"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon10" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon12"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area12"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
      </div>
      <div className="location12">Location</div>
      <div className="urban-inner" />
      <div className="footer-4411">
        <div className="footer-44-child53" />
        <b className="subscribe-to-newsletter15">Subscribe to Newsletter</b>
        <b className="follow-us15">Follow Us</b>
        <div className="footer-44-child54" />
        <div className="text15" />
        <div className="privacy-policy-parent12">
          <div className="privacy-policy15" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps15" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop15" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us15" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright15">
          <div className="all-rights-reserved15">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe30">
          <div className="subscribe-child13" />
          <div className="enter-your-email15">Enter your email Address</div>
          <div className="buttonstarted15">
            <div className="subscribe31">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent13">
          <img className="image-41-icon15" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon15" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon15" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon36" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child55" />
        <img className="footer-44-child56" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child57" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon15" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon15" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon15" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon15" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar15">
        <img
          className="icon37"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon31"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart15"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery18" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites15" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map15" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat15" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events18" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani15" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed15"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent62">
        <div className="frame-parent63" onClick={onFrameContainer3Click}>
          <img className="frame-child55" alt="" src="/frame-2657.svg" />
          <div className="gloria-jeans3">Gloria Jeans</div>
          <div className="y2-148" />
          <div className="coffee-tea-container2">
            <p className="save25">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon57"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent64" onClick={onFrameContainer4Click}>
          <img className="frame-child56" alt="" src="/frame-2658.svg" />
          <div className="jade-cafe5">Jade Cafe</div>
          <div className="y2-149" />
          <div className="cafe13">Cafe</div>
          <img
            className="rating-component-icon58"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent65" onClick={onFrameContainer5Click}>
          <img className="frame-child57" alt="" src="/frame-2659.svg" />
          <div className="arcadian-cafe4">Arcadian Cafe</div>
          <div className="cafefusion3">Cafe,Fusion</div>
          <img
            className="rating-component-icon58"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Urban;
