import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cafes.css";
const Cafes = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/arcadian");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/jade");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/mocca");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/urban");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/costa");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/karak");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/cinnabon");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/buttler");
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/gloria");
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

  const onImage105Click = useCallback(() => {
    // Please sync "Gallery" to the project
  }, []);

  return (
    <div className="cafes">
      <div className="navbar">
        <img
          className="icon"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImageClick}
        />
        <img
          className="vector-icon"
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart"
          alt=""
          src="/-icon-cart.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed"
          alt=""
          src="/-icon-envelope-closed.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
      <div className="parent">
        <div className="div" />
        <img className="cafe-1-icon" alt="" src="/cafe-1@2x.png" />
      </div>
      <div className="discover-top-cafes">{`Discover top Cafes in Lahore `}</div>
      <div className="more-in-lahore">More in Lahore</div>
      <div className="cafes-in-lahore-wrapper">
        <div className="cafes-in-lahore">{`Cafes in Lahore `}</div>
      </div>
      <div className="frame-parent" onClick={onFrameContainer2Click}>
        <img className="frame-child" alt="" src="/frame-26.svg" />
        <div className="arcadian-cafe">Arcadian Cafe</div>
        <div className="cafefusion">Cafe,Fusion</div>
        <img
          className="rating-component-icon"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-group" onClick={onFrameContainer3Click}>
        <img className="frame-item" alt="" src="/frame-261.svg" />
        <div className="jade-cafe">Jade Cafe</div>
        <div className="y2-1" />
        <div className="cafe">Cafe</div>
        <img
          className="rating-component-icon"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-container" onClick={onFrameContainer4Click}>
        <img className="frame-inner" alt="" src="/frame-262.svg" />
        <div className="jade-cafe">Mocca Coffee</div>
        <div className="y2-1" />
        <div className="coffee-teacafe">{`Coffee & Tea,Cafe`}</div>
        <img
          className="rating-component-icon"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-div" onClick={onFrameContainer5Click}>
        <img className="frame-inner" alt="" src="/frame-263.svg" />
        <img className="u-1-icon" alt="" src="/u-1@2x.png" />
        <div className="urban-cafe-yoglicious">Urban Cafe Yoglicious</div>
        <div className="y2-12" />
        <div className="italianchinese">Cafe</div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent1" onClick={onFrameContainer6Click}>
        <img className="frame-child1" alt="" src="/frame-264.svg" />
        <div className="urban-cafe-yoglicious">Cafe Costa</div>
        <div className="y2-12" />
        <div className="italianchinese">
          <p className="coffee-tea">Italian,Chinese</p>
        </div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="k2-1-parent" onClick={onFrameContainer7Click}>
        <img className="k2-1-icon" alt="" src="/k2-1@2x.png" />
        <img className="frame-child2" alt="" src="/frame-265.svg" />
        <div className="urban-cafe-yoglicious">Karak Khel</div>
        <div className="y2-12" />
        <div className="cafe2">Cafe</div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent2" onClick={onFrameContainer8Click}>
        <img className="frame-child3" alt="" src="/frame-266.svg" />
        <div className="urban-cafe-yoglicious">Cinnabon</div>
        <div className="y2-12" />
        <div className="cafe2">{`Coffee & Tea,Cafe`}</div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="frame-parent3" onClick={onFrameContainer9Click}>
        <img className="frame-child4" alt="" src="/frame-267.svg" />
        <div className="urban-cafe-yoglicious">Butler’s Chocolate Cafe</div>
        <div className="y2-12" />
        <div className="desertcafe">Desert,Cafe</div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component1.svg"
        />
      </div>
      <div className="frame-parent4" onClick={onFrameContainer10Click}>
        <img className="frame-inner" alt="" src="/frame-268.svg" />
        <div className="urban-cafe-yoglicious">Gloria Jeans</div>
        <div className="y2-12" />
        <div className="italianchinese">
          <p className="coffee-tea">{`Coffee & Tea, Cafe`}</p>
        </div>
        <img
          className="rating-component-icon3"
          alt=""
          src="/rating-component.svg"
        />
      </div>
      <div className="footer-38">
        <div className="footer-38-child" />
        <b className="subscribe-to-newsletter">Subscribe to Newsletter</b>
        <b className="follow-us">Follow Us</b>
        <div className="footer-38-item" />
        <div className="text" />
        <div className="privacy-policy-parent">
          <div className="privacy-policy" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright">
          <div className="all-rights-reserved">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe">
          <div className="subscribe-child" />
          <div className="enter-your-email">Enter your email Address</div>
          <div className="buttonstarted">
            <div className="subscribe1">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent">
          <img className="image-41-icon" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon1" alt="" src="/-1-11@2x.png" />
        <div className="footer-38-inner" />
        <img className="ellipse-icon" alt="" src="/ellipse-18.svg" />
        <img className="footer-38-child1" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon" alt="" src="/image-134@2x.png" />
      </div>
      <div className="image-98-parent">
        <img className="image-98-icon" alt="" src="/image-98@2x.png" />
        <div className="activities">Activities</div>
        <img
          className="image-105-icon"
          alt=""
          src="/image-105@2x.png"
          onClick={onImage105Click}
        />
        <div className="gallery1">Gallery</div>
        <img className="image-106-icon" alt="" src="/image-106@2x.png" />
        <div className="events1">Events</div>
      </div>
    </div>
  );
};

export default Cafes;
