import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Karak.css";
const Karak = () => {
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
    navigate("/gloria");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/cinnabon");
  }, [navigate]);

  return (
    <div className="karak">
      <div className="lahore-ring-road-kamahan-exit-parent">
        <div className="lahore-ring-road">{`Lahore Ring Road Kamahan Exit Near Sui Gas Society, Lahore `}</div>
        <img
          className="material-symbolslocation-on-r-icon14"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div60">03003333867</div>
        <a
          className="menu14"
          href="https://www.foodpanda.pk/restaurant/h8ab/karak-khel"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website14"
          href="https://www.facebook.com/karakkhel/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon14"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site14"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon14"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="k2-1-parent1">
        <img className="k2-1-icon3" alt="" src="/k2-11@2x.png" />
        <div className="save28">
          <p className="save29">Save</p>
        </div>
        <div className="karak-khel3">Karak Khel</div>
        <img className="like-1-icon14" alt="" src="/like-1.svg" />
        <div className="review14">Review</div>
        <img className="vector-icon49" alt="" src="/vector3.svg" />
        <img className="k-2-icon" alt="" src="/k-2@2x.png" />
      </div>
      <div className="food-gallery14">Food Gallery</div>
      <div className="karak-child" />
      <div className="about-karak-khel">About Karak Khel</div>
      <div className="you-may-also14">You may also be interested in</div>
      <div className="karak-item" />
      <div className="features-and-facilities-parent12">
        <div className="features-and-facilities14">Features and facilities</div>
        <div className="social-networks14">Social Networks</div>
        <div className="area16">Area</div>
        <a
          className="facebook14"
          href="https://www.facebook.com/karakkhel/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram14"
          href="https://www.instagram.com/karakkhelgulberg/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon14" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon14"
          alt=""
          src="/riinstagramfill1.svg"
        />
        <b className="accepts-credit-cards14">Accepts Credit Cards</b>
        <b className="dine-in6">Dine in</b>
        <b className="teacoffeecafe">Tea,Coffee,Cafe</b>
        <b className="ring-road">Ring Road</b>
        <img
          className="material-symbolscredit-card-icon14"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img
          className="material-symbolsbookmark-outl-icon14"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area14"
          alt=""
          src="/majesticonsmapmarkerarea1.svg"
        />
        <img className="vector-icon50" alt="" src="/vector8.svg" />
      </div>
      <div className="location14">Location</div>
      <div className="karak-inner" />
      <div className="footer-4412">
        <div className="footer-44-child58" />
        <b className="subscribe-to-newsletter34">Subscribe to Newsletter</b>
        <b className="follow-us34">Follow Us</b>
        <div className="footer-44-child59" />
        <div className="text36" />
        <div className="privacy-policy-parent32">
          <div className="privacy-policy35" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps36" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop36" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us37" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright34">
          <div className="all-rights-reserved34">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe68">
          <div className="subscribe-child32" />
          <div className="enter-your-email34">Enter your email Address</div>
          <div className="buttonstarted34">
            <div className="subscribe69">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent33">
          <img className="image-41-icon36" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon36" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon36" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon75" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child60" />
        <img className="footer-44-child61" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child62" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon34" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon34" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon34" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon34" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar32">
        <img
          className="icon76"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon51"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className="icon-cart32"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery37" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites32" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map33" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat32" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events35" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani39" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed32"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent72">
        <div className="frame-parent73" onClick={onFrameContainer3Click}>
          <img className="frame-child63" alt="" src="/frame-2660.svg" />
          <div className="gloria-jeans4">Gloria Jeans</div>
          <div className="y2-153" />
          <div className="coffee-tea-container3">
            <p className="save29">{`Coffee & Tea, Cafe`}</p>
          </div>
          <img
            className="rating-component-icon63"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent74" onClick={onFrameContainer4Click}>
          <img className="frame-child64" alt="" src="/frame-2661.svg" />
          <div className="jade-cafe6">Jade Cafe</div>
          <div className="y2-154" />
          <div className="cafe14">Cafe</div>
          <img
            className="rating-component-icon64"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent75" onClick={onFrameContainer5Click}>
          <img className="frame-child65" alt="" src="/frame-2662.svg" />
          <div className="gloria-jeans4">Cinnabon</div>
          <div className="y2-153" />
          <div className="coffee-teacafe7">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon63"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Karak;
