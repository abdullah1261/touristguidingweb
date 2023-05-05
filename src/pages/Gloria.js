import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Gloria.css";
const Gloria = () => {
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
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/arcadian");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/mocca");
  }, [navigate]);

  return (
    <div className="gloria">
      <div className="mm-alam-lahore-pakistan-parent">
        <div className="mm-alam-lahore">2 MM Alam, Lahore Pakistan</div>
        <img
          className="material-symbolslocation-on-r-icon12"
          alt=""
          src="/materialsymbolslocationonrounded.svg"
        />
        <div className="div58">0426565769</div>
        <a
          className="menu12"
          href="https://gloriajeanscoffees.com.pk/our-menu/"
          target="_blank"
        >
          Menu
        </a>
        <a
          className="website12"
          href="https://gloriajeanscoffees.com.pk/"
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
      <div className="g-1-parent">
        <img className="g-1-icon" alt="" src="/g-1@2x.png" />
        <img className="g3-2-icon" alt="" src="/g3-2@2x.png" />
        <div className="save24">
          <p className="save25">Save</p>
        </div>
        <div className="gloria-jeans2">Gloria Jeans</div>
        <img className="like-1-icon12" alt="" src="/like-1.svg" />
        <div className="review12">Review</div>
        <img className="vector-icon45" alt="" src="/vector6.svg" />
      </div>
      <div className="food-gallery12">Food Gallery</div>
      <div className="gloria-child" />
      <div className="about-gloria-jeans">About Gloria Jeans</div>
      <div className="you-may-also12">You may also be interested in</div>
      <div className="gloria-item" />
      <div className="features-and-facilities-parent10">
        <div className="features-and-facilities12">Features and facilities</div>
        <div className="social-networks12">Social Networks</div>
        <div className="area14">Area</div>
        <a
          className="facebook12"
          href="https://www.facebook.com/GloriaJeansCoffeesPakistan/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="instagram12"
          href="https://www.instagram.com/gloriajeanspakistan/"
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
        <b className="dine-in5">Dine in</b>
        <b className="coffeebreakfastlunch">Coffee,Breakfast,Lunch</b>
        <b className="mm-alam-road2">MM Alam Road</b>
        <img
          className="material-symbolscredit-card-icon12"
          alt=""
          src="/materialsymbolscreditcard.svg"
        />
        <img className="mdismoking-icon10" alt="" src="/mdismoking2.svg" />
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
      <div className="gloria-inner" />
      <div className="footer-4410">
        <div className="footer-44-child48" />
        <b className="subscribe-to-newsletter32">Subscribe to Newsletter</b>
        <b className="follow-us32">Follow Us</b>
        <div className="footer-44-child49" />
        <div className="text34" />
        <div className="privacy-policy-parent30">
          <div className="privacy-policy33" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps34" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop34" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us35" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright32">
          <div className="all-rights-reserved32">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className="subscribe64">
          <div className="subscribe-child30" />
          <div className="enter-your-email32">Enter your email Address</div>
          <div className="buttonstarted32">
            <div className="subscribe65">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent31">
          <img className="image-41-icon34" alt="" src="/image-411@2x.png" />
          <img className="image-42-icon34" alt="" src="/image-421@2x.png" />
          <img className="image-43-icon34" alt="" src="/image-431@2x.png" />
        </div>
        <img className="icon71" alt="" src="/-1-11@2x.png" />
        <div className="footer-44-child50" />
        <img className="footer-44-child51" alt="" src="/ellipse-18.svg" />
        <img className="footer-44-child52" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon32" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon32" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon32" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon32" alt="" src="/image-134@2x.png" />
      </div>
      <div className="navbar30">
        <img
          className="icon72"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon46"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart30"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery35" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites30" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map31" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat30" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events33" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani37" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed30"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="frame-parent64">
        <div className="frame-parent65" onClick={onFrameContainer3Click}>
          <img className="frame-child57" alt="" src="/frame-2651.svg" />
          <div className="jade-cafe4">Jade Cafe</div>
          <div className="y2-149" />
          <div className="cafe12">Cafe</div>
          <img
            className="rating-component-icon57"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent66" onClick={onFrameContainer4Click}>
          <img className="frame-child58" alt="" src="/frame-2652.svg" />
          <div className="arcadian-cafe3">Arcadian Cafe</div>
          <div className="cafefusion2">Cafe,Fusion</div>
          <img
            className="rating-component-icon57"
            alt=""
            src="/rating-component.svg"
          />
        </div>
        <div className="frame-parent67" onClick={onFrameContainer5Click}>
          <img className="frame-child59" alt="" src="/frame-2653.svg" />
          <div className="jade-cafe4">Mocca Coffee</div>
          <div className="y2-149" />
          <div className="coffee-teacafe6">{`Coffee & Tea,Cafe`}</div>
          <img
            className="rating-component-icon57"
            alt=""
            src="/rating-component.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gloria;
