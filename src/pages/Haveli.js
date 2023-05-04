import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Haveli.css";
const Haveli = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
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
          className="material-symbolslocation-on-r-icon19"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div21">03214651051</div>
        <a
          className="menu19"
          href="https://www.haveli.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website19"
          href="https://www.haveli.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon19"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site19"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon19"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="h2-2-parent">
        <img className="h2-2-icon" alt="" src="/h2-2@2x.png" />
        <div className="save38">
          <p className="save39">Save</p>
        </div>
        <div className="haveli-restaurant5">Haveli Restaurant</div>
        <img className="like-1-icon19" alt="" src="/like-1.svg" />
        <div className="review19">Review</div>
        <img className="vector-icon48" alt="" src="/vector13.svg" />
        <img className="h-4-icon" alt="" src="/h-4@2x.png" />
      </div>
      <div className="food-gallery19">Food Gallery</div>
      <div className="haveli-child" />
      <div className="about-haveli-restaurant">{`About Haveli Restaurant `}</div>
      <div className="you-may-also19">You may also be interested in</div>
      <div className="haveli-item" />
      <div className="features-and-facilities-parent17">
        <div className="features-and-facilities19">Features and facilities</div>
        <div className="social-networks19">Social Networks</div>
        <div className="area19">Area</div>
        <a
          className="facebook19"
          href="https://www.facebook.com/HaveliRestaurantLahore/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram18"
          href="https://www.instagram.com/havelirestaurantrooftop/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon19" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon18"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards19">Accepts Credit Cards</b>
        <b className="smoking-area9">Smoking Area</b>
        <b className="pakistani-cuisine2">Pakistani Cuisine</b>
        <b className="food-street-lahore">Food Street Lahore</b>
        <img
          className="material-symbolscredit-card-icon19"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon13" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon19"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area19"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location19">Location</div>
      <div className="haveli-inner" />
      <div className="navbar22">
        <img
          className="icon52"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon49"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart22"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery25" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites22" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map22" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat22" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events25" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani22" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed22"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="footer-40">
        <div className="footer-40-child" />
        <b className="subscribe-to-newsletter22">Subscribe to Newsletter</b>
        <b className="follow-us22">Follow Us</b>
        <div className="footer-40-item" />
        <div className="text22" />
        <div className="privacy-policy-parent19">
          <div className="privacy-policy22" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps22" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop22" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us22" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright22">
          <div className="all-rights-reserved22">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe44">
          <div className="subscribe-child20" />
          <div className="enter-your-email22">Enter your email Address</div>
          <div className="buttonstarted22">
            <div className="subscribe45">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent20">
          <img className="image-41-icon22" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon22" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon22" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon53" alt="" src="/-1-11@2x.png" />
        <div className="footer-40-inner" />
        <img className="footer-40-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-40-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon22" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon22" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon22" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon22" alt="" src="/image-134@2x.png" />
      </div>
      <div className="frame-parent89">
        <div className="frame-parent90" onClick={onFrameContainer3Click}>
          <img className="frame-child76" alt="" src="/frame-2678.svg" />
          <div className="junoon-heritage4">Junoon Heritage</div>
          <div className="y2-165" />
          <div className="middle-easternpakistani3">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon78"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent91" onClick={onFrameContainer4Click}>
          <img className="frame-child77" alt="" src="/frame-2679.svg" />
          <div className="junoon-heritage4">Qabail Tribes</div>
          <div className="y2-165" />
          <div className="barbecueasian6">Barbecue,Asian</div>
          <img
            className="rating-component-icon78"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="frame-parent92" onClick={onFrameContainer5Click}>
          <img className="frame-child78" alt="" src="/frame-2680.svg" />
          <img className="icon54" alt="" src="/4-3@2x.png" />
          <div className="monal3">Monal</div>
          <div className="barbecueasian7">{`Barbecue,Asian `}</div>
          <img
            className="rating-component-icon80"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Haveli;
