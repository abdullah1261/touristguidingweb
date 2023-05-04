import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Andaaz.css";
const Andaaz = () => {
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

  const onFrameContainer5Click = useCallback(() => {
    navigate("/spice");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/dynasty");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/yum");
  }, [navigate]);

  return (
    <div className="andaaz">
      <div className="a-fort-road-historic-walled-ci-parent">
        <a
          className="a-fort-road"
          href="https://www.tripadvisor.com/Restaurant_Review-g295413-d1460604-Reviews-Andaaz_Restaurant-Lahore_Punjab_Province.html#MAPVIEW"
          target="_blank"
        >
          2189 A Fort Road Historic walled city Lahore, Lahore 54000 Pakistan
        </a>
        <img
          className="material-symbolslocation-on-r-icon3"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div49">03000263229</div>
        <a
          className="menu3"
          href="https://andaazrestaurant.com/contact-free-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website3"
          href="https://andaazrestaurant.com/"
          target="_blank"
        >
          Website
        </a>
        <img
          className="material-symbolscall-icon3"
          alt=""
          src="/materialsymbolscall.svg"
        />
        <img
          className="dashiconsadmin-site3"
          alt=""
          src="/dashiconsadminsite.svg"
        />
        <img
          className="material-symbolsmenu-book-rou-icon3"
          alt=""
          src="/materialsymbolsmenubookrounded.svg"
        />
      </div>
      <div className="a-1-parent">
        <img className="a-1-icon" alt="" src="/a-1@2x.png" />
        <div className="save6">
          <p className="save7">Save</p>
        </div>
        <img className="a2-1-icon" alt="" src="/a2-1@2x.png" />
        <div className="andaaz-restaurant2">Andaaz Restaurant</div>
        <img className="like-1-icon3" alt="" src="/like-1.svg" />
        <div className="review3">Review</div>
        <img className="vector-icon24" alt="" src="/vector21.svg" />
      </div>
      <div className="food-gallery3">Food Gallery</div>
      <div className="andaaz-inner">
        <div className="group-wrapper19">
          <div className="image-127-parent">
            <img className="image-127-icon" alt="" src="/image-127@2x.png" />
            <img className="image-128-icon" alt="" src="/image-128@2x.png" />
            <img className="image-129-icon" alt="" src="/image-129@2x.png" />
            <img className="image-130-icon" alt="" src="/image-130@2x.png" />
            <img className="image-131-icon" alt="" src="/image-131@2x.png" />
            <img className="image-132-icon" alt="" src="/image-132@2x.png" />
            <img className="image-133-icon" alt="" src="/image-133@2x.png" />
          </div>
        </div>
      </div>
      <div className="about-andaaz-restuarant">About Andaaz Restuarant</div>
      <div className="you-may-also3">You may also be interested in</div>
      <div className="andaaz-child" />
      <div className="features-and-facilities-parent1">
        <div className="features-and-facilities3">Features and facilities</div>
        <div className="social-networks3">Social Networks</div>
        <div className="area5">Area</div>
        <a
          className="facebook3"
          href="https://www.facebook.com/AndaazRestaurant/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram3"
          href="https://www.instagram.com/andaazrestaurantofficial/?hl=en"
          target="_blank"
        >
          Instagram
        </a>
        <img className="uiwfacebook-icon3" alt="" src="/uiwfacebook.svg" />
        <img
          className="riinstagram-fill-icon3"
          alt=""
          src="/riinstagramfill.svg"
        />
        <b className="accepts-credit-cards3">Accepts Credit Cards</b>
        <b className="smoking-area3">Smoking Area</b>
        <b className="pakistani-cuisine">Pakistani Cuisine</b>
        <b className="walled-city">Walled City</b>
        <img
          className="material-symbolscredit-card-icon3"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon3" alt="" src="/mdismoking.svg" />
        <img
          className="material-symbolsbookmark-outl-icon3"
          alt=""
          src="/materialsymbolsbookmarkoutline.svg"
        />
        <img
          className="majesticonsmap-marker-area3"
          alt=""
          src="/majesticonsmapmarkerarea.svg"
        />
      </div>
      <div className="location3">Location</div>
      <div className="andaaz-item" />
      <div className="footer-45">
        <div className="footer-45-child" />
        <b className="subscribe-to-newsletter23">Subscribe to Newsletter</b>
        <b className="follow-us23">Follow Us</b>
        <div className="footer-45-item" />
        <div className="text25" />
        <div className="privacy-policy-parent21">
          <div className="privacy-policy24" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps25" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop25" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us26" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright23">
          <div className="all-rights-reserved23">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe46">
          <div className="subscribe-child21" />
          <div className="enter-your-email23">Enter your email Address</div>
          <div className="buttonstarted23">
            <div className="subscribe47">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent22">
          <img className="image-41-icon25" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon25" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon25" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon53" alt="" src="/-1-11@2x.png" />
        <div className="footer-45-inner" />
        <img className="footer-45-child1" alt="" src="/ellipse-18.svg" />
        <img className="footer-45-child2" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon23" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon23" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon23" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon23" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar21">
        <img
          className="icon54"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon25"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart21"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery26" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites21" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map22" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat21" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events24" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani28" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed21"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent30">
        <div className="frame-parent31" onClick={onFrameContainer5Click}>
          <img className="frame-child30" alt="" src="/frame-2621.svg" />
          <div className="spice-bazaar2">Spice Bazaar</div>
          <div className="y2-127" />
          <div className="pakistani8">
            <p className="save7">Pakistani</p>
          </div>
          <img
            className="rating-component-icon30"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent32" onClick={onFrameContainer6Click}>
          <img className="frame-child30" alt="" src="/frame-2622.svg" />
          <div className="dynasty4">
            <p className="save7">Dynasty</p>
          </div>
          <div className="y2-128" />
          <div className="chineseasian3">Chinese,Asian</div>
          <img
            className="rating-component-icon31"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent33" onClick={onFrameContainer7Click}>
          <img className="frame-child30" alt="" src="/frame-2623.svg" />
          <div className="yum-chinese2">{`Yum Chinese & Thai restaurant`}</div>
          <img className="y2-1-icon1" alt="" src="/y2-1@2x.png" />
          <div className="chineseasian4">Chinese,Asian</div>
          <img
            className="rating-component-icon31"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Andaaz;
