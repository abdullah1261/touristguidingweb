import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPolicy.css";
const LegalPolicy = () => {
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

  return (
    <div className="legal-policy">
      <div className="footer-379">
        <div className="footer-37-child42" />
        <b className="subscribe-to-newsletter15">Subscribe to Newsletter</b>
        <b className="follow-us15">Follow Us</b>
        <div className="footer-37-child43" />
        <div className="text15" />
        <div className="privacy-policy-parent13">
          <div className="privacy-policy15" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps16" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop17" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us16" onClick={onContactUsTextClick}>
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
          <img className="image-41-icon15" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon15" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon15" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon37" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child44" />
        <img className="footer-37-child45" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child46" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon15" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon15" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon15" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon15" alt="" src="/image-134@2x.png" />
      </div>
      <div className="welcome-to-visit-container">
        <span className="welcome-to-visit-container1">
          <p className="welcome-to-visit">
            Welcome to Visit Lahore, a tourism website dedicated to providing
            accurate and reliable information about the city of Lahore and its
            attractions. We take pride in being a verified organization by the
            Department of Tourist Services of Pakistan, which ensures our
            commitment to providing reliable information to our visitors.
          </p>
          <p className="welcome-to-visit">
            As a responsible and trustworthy organization, we understand the
            importance of providing accurate information to our users. We do not
            post any video or content without content review to ensure that all
            the information on our website is accurate and up-to-date.
          </p>
          <p className="welcome-to-visit">
            We are an approved business that is committed to posting no false
            texts or news. We understand the significance of maintaining
            transparency in our operations, and we take this responsibility very
            seriously. Therefore, we strive to provide reliable and authentic
            information to our users to make their visit to Lahore an
            unforgettable experience.
          </p>
          <p className="welcome-to-visit">
            We believe in providing the best possible experience to our
            visitors, and we are committed to providing high-quality content
            that is both informative and engaging. Our team of professionals
            works tirelessly to ensure that all the information on our website
            is up-to-date and accurate, so you can rely on us for your travel
            needs.
          </p>
          <p className="welcome-to-visit">
            By using our website, you agree to abide by the terms and conditions
            of our policies. We reserve the right to modify these policies at
            any time without notice, so we encourage you to review them
            periodically to stay informed.
          </p>
          <p className="welcome-to-visit">
            Thank you for choosing Visit Lahore as your travel guide, and we
            hope you have a pleasant and enjoyable experience in our beautiful
            city.
          </p>
        </span>
      </div>
      <div className="legal-policy1">Legal Policy</div>
      <div className="navbar14">
        <img
          className="icon38"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon17"
          alt=""
          src="/vector2.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart14"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery18" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites14" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map14" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat14" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events17" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani21" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed14"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default LegalPolicy;
