import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Junoon.css";
const Junoon = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/haveli");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/qabail");
  }, [navigate]);

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

  const onFrameContainer6Click = useCallback(() => {
    navigate("/monal");
  }, [navigate]);

  return (
    <div className="junoon">
      <div className="plot-1-c-1-gulberg-iii-laho-parent">
        <div className="plot-1-c-1-gulberg">
          Plot-1, C-1, Gulberg III, Lahore, Lahore 54000
        </div>
        <img
          className="material-symbolslocation-on-r-icon18"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div20">03001363996</div>
        <a
          className="menu18"
          href="https://www.junoonrestaurant.pk/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website18"
          href="https://www.junoonrestaurant.pk/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon18"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site18"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon18"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="j-1-parent">
        <img className="j-1-icon" alt="" src="/j-1@2x.png" />
        <img className="j2-2-icon" alt="" src="/j2-2@2x.png" />
        <div className="save36">
          <p className="save37">Save</p>
        </div>
        <div className="junoon-heritage3">Junoon Heritage</div>
        <img className="like-1-icon18" alt="" src="/like-1.svg" />
        <div className="review18">Review</div>
        <img className="vector-icon45" alt="" src="/vector13.svg" />
      </div>
      <div className="food-gallery18">Food Gallery</div>
      <div className="junoon-child" />
      <div className="about-junoon-heritage">About Junoon Heritage</div>
      <div className="you-may-also18">You may also be interested in</div>
      <div className="junoon-item" />
      <div className="features-and-facilities-parent16">
        <div className="features-and-facilities18">Features and facilities</div>
        <div className="social-networks18">Social Networks</div>
        <div className="area18">Area</div>
        <a
          className="facebook18"
          href="https://www.facebook.com/junoonrestaurantpk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram17"
          href="https://www.instagram.com/junoonrestaurant/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon18" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon17"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards18">Accepts Credit Cards</b>
        <b className="pakistani-cuisine1">Pakistani Cuisine</b>
        <b className="gulberg">Gulberg</b>
        <img
          className="material-symbolscredit-card-icon18"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon18"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area18"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
        <img className="vector-icon46" alt="" src="/vector14.svg" />
        <b className="pickup">Pickup</b>
        <img
          className="material-symbolstable-bar-rou-icon"
          alt=""
          src="/materialsymbolstablebarrounded.svg"
        />
        <b className="table-reservation">Table reservation</b>
      </div>
      <div className="location18">Location</div>
      <div className="junoon-inner" />
      <div className="frame-parent85">
        <div className="frame-parent86" onClick={onFrameContainer3Click}>
          <img className="frame-child73" alt="" src="/frame-2675.svg" />
          <div className="haveli-restaurant4">Haveli Restaurant</div>
          <div className="y2-163" />
          <div className="barbecuepakistani4">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon75"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent87" onClick={onFrameContainer4Click}>
          <img className="frame-child74" alt="" src="/frame-2676.svg" />
          <div className="qabail-tribes3">Qabail Tribes</div>
          <div className="y2-164" />
          <div className="barbecueasian4">Barbecue,Asian</div>
          <img
            className="rating-component-icon76"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
      <div className="footer-41">
        <div className="footer-41-child" />
        <b className="subscribe-to-newsletter21">Subscribe to Newsletter</b>
        <b className="follow-us21">Follow Us</b>
        <div className="footer-41-item" />
        <div className="text21" />
        <div className="privacy-policy-parent18">
          <div className="privacy-policy21" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps21" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop21" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us21" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright21">
          <div className="all-rights-reserved21">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe42">
          <div className="subscribe-child19" />
          <div className="enter-your-email21">Enter your email Address</div>
          <div className="buttonstarted21">
            <div className="subscribe43">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent19">
          <img className="image-41-icon21" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon21" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon21" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon49" alt="" src="/-1-11@2x.png" />
        <div className="footer-41-inner" />
        <img className="footer-41-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-41-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon21" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon21" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon21" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon21" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar21">
        <img
          className="icon50"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon47"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart21"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery24" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites21" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map21" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat21" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events24" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani21" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed21"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent88" onClick={onFrameContainer6Click}>
        <img className="frame-child73" alt="" src="/frame-2677.svg" />
        <img className="icon51" alt="" src="/4-3@2x.png" />
        <div className="monal2">Monal</div>
        <div className="barbecueasian5">{`Barbecue,Asian `}</div>
        <img
          className="rating-component-icon77"
          alt=""
          src="/rating-component.svg"
        />
      </div>
    </div>
  );
};

export default Junoon;
