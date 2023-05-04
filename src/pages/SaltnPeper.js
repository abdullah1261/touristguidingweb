import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SaltnPeper.css";
const SaltnPeper = () => {
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

  const onVectorIcon1Click = useCallback(() => {
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
    navigate("/butt");
  }, [navigate]);

  return (
    <div className="saltn-peper">
      <div className="commercial-zone-liberty-market-parent">
        <div className="commercial-zone-liberty">
          48 - Commercial Zone Liberty Market Gulberg Iii, Lahore Pakistan
        </div>
        <img
          className="material-symbolslocation-on-r-icon16"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div18">42357528934</div>
        <a
          className="menu16"
          href="https://restaurant.saltnpepper.com.pk/menu"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website16"
          href="https://restaurant.saltnpepper.com.pk/"
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
      <div className="s3-1-parent">
        <img className="s3-1-icon" alt="" src="/s3-1@2x.png" />
        <img className="s1-2-icon" alt="" src="/s1-2@2x.png" />
        <div className="save32">
          <p className="save33">Save</p>
        </div>
        <div className="saltn-pepper1">Salt’n Pepper</div>
        <img className="like-1-icon16" alt="" src="/like-1.svg" />
        <div className="review16">Review</div>
        <img className="vector-icon39" alt="" src="/vector9.svg" />
      </div>
      <div className="food-gallery16">Food Gallery</div>
      <div className="saltn-peper-child" />
      <div className="about-saltn-pepper">About Salt’n Pepper</div>
      <div className="you-may-also16">You may also be interested in</div>
      <div className="saltn-peper-item" />
      <div className="features-and-facilities-parent14">
        <div className="features-and-facilities16">Features and facilities</div>
        <div className="social-networks16">Social Networks</div>
        <div className="area16">Area</div>
        <a
          className="facebook16"
          href="https://www.facebook.com/TheSaltnPepperRestaurants/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram16"
          href="https://www.instagram.com/saltnpepper_official/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon16" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon16"
          alt=""
          src="/riinstagramfill3.svg"
        />
        <b className="accepts-credit-cards16">Accepts Credit Cards</b>
        <b className="dine-in7">Dine in</b>
        <b className="pakistani-cuisineasianintern">
          Pakistani Cuisine,Asian,International
        </b>
        <b className="liberty">Liberty</b>
        <img
          className="material-symbolscredit-card-icon16"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="vector-icon40" alt="" src="/vector10.svg" />
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
      <div className="saltn-peper-inner" />
      <div className="footer-43">
        <div className="footer-43-child" />
        <b className="subscribe-to-newsletter19">Subscribe to Newsletter</b>
        <b className="follow-us19">Follow Us</b>
        <div className="footer-43-item" />
        <div className="text19" />
        <div className="privacy-policy-parent16">
          <div className="privacy-policy19" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps19" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop19" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us19" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright19">
          <div className="all-rights-reserved19">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe38">
          <div className="subscribe-child17" />
          <div className="enter-your-email19">Enter your email Address</div>
          <div className="buttonstarted19">
            <div className="subscribe39">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent17">
          <img className="image-41-icon19" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon19" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon19" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon44" alt="" src="/-1-11@2x.png" />
        <div className="footer-43-inner" />
        <img className="footer-43-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-43-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon19" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon19" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon19" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon19" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar19">
        <img
          className="icon45"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon41"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart19"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery22" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites19" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map19" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat19" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events22" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani19" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed19"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent78">
        <div className="frame-parent79" onClick={onFrameContainer3Click}>
          <img className="frame-child67" alt="" src="/frame-2669.svg" />
          <div className="haveli-restaurant2">Haveli Restaurant</div>
          <div className="y2-158" />
          <div className="barbecuepakistani2">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon69"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent80" onClick={onFrameContainer4Click}>
          <img className="frame-child68" alt="" src="/frame-2670.svg" />
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
        <div className="b2-1-container" onClick={onFrameContainer5Click}>
          <img className="b2-1-icon2" alt="" src="/b2-1@2x.png" />
          <img className="frame-child69" alt="" src="/frame-2671.svg" />
          <div className="junoon-heritage2">Butt Karahi Tikka</div>
          <div className="y2-159" />
          <div className="middle-easternpakistani2">Asian,Pakistani</div>
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

export default SaltnPeper;
