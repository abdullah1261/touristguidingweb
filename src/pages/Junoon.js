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
          className="material-symbolslocation-on-r-icon19"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div65">03001363996</div>
        <a
          className="menu19"
          href="https://www.junoonrestaurant.pk/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website19"
          href="https://www.junoonrestaurant.pk/"
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
      <div className="j-1-parent">
        <img className="j-1-icon" alt="" src="/j-1@2x.png" />
        <img className="j2-2-icon" alt="" src="/j2-2@2x.png" />
        <div className="save38">
          <p className="save39">Save</p>
        </div>
        <div className="junoon-heritage4">Junoon Heritage</div>
        <img className="like-1-icon19" alt="" src="/like-1.svg" />
        <div className="review19">Review</div>
        <img className="vector-icon62" alt="" src="/vector13.svg" />
      </div>
      <div className="food-gallery19">Food Gallery</div>
      <div className="junoon-child" />
      <div className="about-junoon-heritage">About Junoon Heritage</div>
      <div className="you-may-also19">You may also be interested in</div>
      <div className="junoon-item" />
      <div className="features-and-facilities-parent17">
        <div className="features-and-facilities19">Features and facilities</div>
        <div className="social-networks19">Social Networks</div>
        <div className="area21">Area</div>
        <a
          className="facebook19"
          href="https://www.facebook.com/junoonrestaurantpk/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram18"
          href="https://www.instagram.com/junoonrestaurant/?hl=en"
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
        <b className="pakistani-cuisine1">Pakistani Cuisine</b>
        <b className="gulberg">Gulberg</b>
        <img
          className="material-symbolscredit-card-icon19"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
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
        <img className="vector-icon63" alt="" src="/vector14.svg" />
        <b className="pickup">Pickup</b>
        <img
          className="material-symbolstable-bar-rou-icon"
          alt=""
          src="/materialsymbolstablebarrounded.svg"
        />
        <b className="table-reservation">Table reservation</b>
      </div>
      <div className="location19">Location</div>
      <div className="junoon-inner" />
      <div className="frame-parent91">
        <div className="frame-parent92" onClick={onFrameContainer3Click}>
          <img className="frame-child78" alt="" src="/frame-2675.svg" />
          <div className="haveli-restaurant5">Haveli Restaurant</div>
          <div className="y2-166" />
          <div className="barbecuepakistani5">Barbecue,Pakistani</div>
          <img
            className="rating-component-icon78"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent93" onClick={onFrameContainer4Click}>
          <img className="frame-child79" alt="" src="/frame-2676.svg" />
          <div className="qabail-tribes4">Qabail Tribes</div>
          <div className="y2-167" />
          <div className="barbecueasian5">Barbecue,Asian</div>
          <img
            className="rating-component-icon79"
            alt=""
            src="/rating-component1.svg"
          />
        </div>
      </div>
      <div className="footer-41">
        <div className="footer-41-child" />
        <b className="subscribe-to-newsletter39">Subscribe to Newsletter</b>
        <b className="follow-us39">Follow Us</b>
        <div className="footer-41-item" />
        <div className="text41" />
        <div className="privacy-policy-parent37">
          <div className="privacy-policy40" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps41" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop41" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us42" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright39">
          <div className="all-rights-reserved39">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe78">
          <div className="subscribe-child37" />
          <div className="enter-your-email39">Enter your email Address</div>
          <div className="buttonstarted39">
            <div className="subscribe79">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent38">
          <img className="image-41-icon41" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon41" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon41" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon86" alt="" src="/-1-11@2x.png" />
        <div className="footer-41-inner" />
        <img className="footer-41-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-41-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon39" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon39" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon39" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon39" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar37">
        <img
          className="icon87"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon64"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart37"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery42" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites37" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map38" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat37" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events40" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani44" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed37"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent94" onClick={onFrameContainer6Click}>
        <img className="frame-child78" alt="" src="/frame-2677.svg" />
        <img className="icon88" alt="" src="/4-3@2x.png" />
        <div className="monal4">Monal</div>
        <div className="barbecueasian6">{`Barbecue,Asian `}</div>
        <img
          className="rating-component-icon80"
          alt=""
          src="/rating-component.svg"
        />
      </div>
    </div>
  );
};

export default Junoon;
