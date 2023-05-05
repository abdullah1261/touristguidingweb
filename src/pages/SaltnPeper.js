import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SaltnPeper.css";
const SaltnPeper = () => {
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

  const onVectorIcon1Click = useCallback(() => {
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
          className="material-symbolslocation-on-r-icon17"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div63">42357528934</div>
        <a
          className="menu17"
          href="https://restaurant.saltnpepper.com.pk/menu"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website17"
          href="https://restaurant.saltnpepper.com.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon17"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site17"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon17"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="s3-1-parent">
        <img className="s3-1-icon" alt="" src="/s3-1@2x.png" />
        <img className="s1-2-icon" alt="" src="/s1-2@2x.png" />
        <div className="save34">
          <p className="save35">Save</p>
        </div>
        <div className="saltn-pepper1">Salt’n Pepper</div>
        <img className="like-1-icon17" alt="" src="/like-1.svg" />
        <div className="review17">Review</div>
        <img className="vector-icon56" alt="" src="/vector9.svg" />
      </div>
      <div className="food-gallery17">Food Gallery</div>
      <div className="saltn-peper-child" />
      <div className="about-saltn-pepper">About Salt’n Pepper</div>
      <div className="you-may-also17">You may also be interested in</div>
      <div className="saltn-peper-item" />
      <div className="features-and-facilities-parent15">
        <div className="features-and-facilities17">Features and facilities</div>
        <div className="social-networks17">Social Networks</div>
        <div className="area19">Area</div>
        <a
          className="facebook17"
          href="https://www.facebook.com/TheSaltnPepperRestaurants/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram17"
          href="https://www.instagram.com/saltnpepper_official/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon17" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon17"
          alt=""
          src="/riinstagramfill3.svg"
        />
        <b className="accepts-credit-cards17">Accepts Credit Cards</b>
        <b className="dine-in7">Dine in</b>
        <b className="pakistani-cuisineasianintern">
          Pakistani Cuisine,Asian,International
        </b>
        <b className="liberty1">Liberty</b>
        <img
          className="material-symbolscredit-card-icon17"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="vector-icon57" alt="" src="/vector10.svg" />
        <img
          className="material-symbolsbookmark-outl-icon17"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area17"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location17">Location</div>
      <div className="saltn-peper-inner" />
      <div className="footer-43">
        <div className="footer-43-child" />
        <b className="subscribe-to-newsletter37">Subscribe to Newsletter</b>
        <b className="follow-us37">Follow Us</b>
        <div className="footer-43-item" />
        <div className="text39" />
        <div className="privacy-policy-parent35">
          <div className="privacy-policy38" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps39" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop39" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us40" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright37">
          <div className="all-rights-reserved37">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe74">
          <div className="subscribe-child35" />
          <div className="enter-your-email37">Enter your email Address</div>
          <div className="buttonstarted37">
            <div className="subscribe75">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent36">
          <img className="image-41-icon39" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon39" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon39" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon81" alt="" src="/-1-11@2x.png" />
        <div className="footer-43-inner" />
        <img className="footer-43-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-43-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon37" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon37" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon37" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon37" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar35">
        <img
          className="icon82"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon58"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart35"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery40" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites35" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map36" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat35" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events38" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani42" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed35"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent84">
        <div className="frame-parent85" onClick={onFrameContainer3Click}>
          <img className="frame-child72" alt="" src="/frame-2669.svg" />
          <div className="haveli-restaurant3">Haveli Restaurant</div>
          <div className="y2-161" />
          <div className="barbecuepakistani3">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon72"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent86" onClick={onFrameContainer4Click}>
          <img className="frame-child73" alt="" src="/frame-2670.svg" />
          <div className="junoon-heritage3">Junoon Heritage</div>
          <div className="y2-162" />
          <div className="middle-easternpakistani3">
            Middle eastern,Pakistani
          </div>
          <img
            className="rating-component-icon73"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
        <div className="b2-1-container" onClick={onFrameContainer5Click}>
          <img className="b2-1-icon2" alt="" src="/b2-1@2x.png" />
          <img className="frame-child74" alt="" src="/frame-2671.svg" />
          <div className="junoon-heritage3">Butt Karahi Tikka</div>
          <div className="y2-162" />
          <div className="middle-easternpakistani3">Asian,Pakistani</div>
          <img
            className="rating-component-icon73"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SaltnPeper;
