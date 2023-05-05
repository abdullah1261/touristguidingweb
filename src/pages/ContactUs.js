import { useState, useCallback, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PopUp1 from "../components/PopUp1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
const ContactUs = () => {
  const [isPopUp1Open, setPopUp1Open] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openPopUp1 = useCallback(() => {
    setPopUp1Open(true);
  }, []);

  const closePopUp1 = useCallback(() => {
    setPopUp1Open(false);
  }, []);

  const onPrivacyPolicyTextClick = useCallback(() => {
    navigate("/legal-policy");
  }, [navigate]);

  const onMapsTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onContactUsText1Click = useCallback(() => {
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
    <>
      <div className="contact-us22" data-animate-on-scroll>
        <div className="heading-and-supporting-text">
          <div className="supporting-text">
            Our friendly team would love to hear from you.
          </div>
        </div>
        <TextField
          className="input-with-label"
          sx={{ width: 224 }}
          color="primary"
          variant="outlined"
          type="text"
          label="First name"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <div className="hint-text10">This is a hint text to help user.</div>
        <div className="input-with-label-2">
          <div className="label-2">Last name</div>
          <div className="input-2">
            <img className="help-icon" alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className="hint-text11">This is a hint text to help user.</div>
        <div className="label-3">Email</div>
        <div className="input-3">
          <div className="content-5">
            <img className="mail-icon" alt="" src="/mail.svg" />
          </div>
          <img className="help-icon" alt="" src="/help-icon.svg" />
        </div>
        <div className="hint-text12">This is a hint text to help user.</div>
        <div className="label-4">Phone number</div>
        <div className="input-4">
          <div className="text-input">
            <img className="help-icon" alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className="hint-text13">This is a hint text to help user.</div>
        <div className="label-5">Message</div>
        <div className="input-5">
          <div className="text22">Include a message...</div>
        </div>
        <div className="hint-text14">This is a hint text to help user.</div>
        <div className="text-6">Send message</div>
        <div className="contact-us23">Contact Us</div>
        <div className="image-110-parent">
          <img className="image-110-icon" alt="" src="/image-110@2x.png" />
          <img className="image-112-icon" alt="" src="/image-112@2x.png" />
          <img className="image-111-icon" alt="" src="/image-111@2x.png" />
          <img className="image-113-icon" alt="" src="/image-113@2x.png" />
          <img className="image-115-icon" alt="" src="/image-115@2x.png" />
          <img className="image-114-icon" alt="" src="/image-114@2x.png" />
        </div>
        <Button
          className="contact-us-child"
          sx={{ width: 140 }}
          variant="contained"
          color="primary"
          onClick={openPopUp1}
        >
          Submit
        </Button>
        <div className="footer-37-wrapper">
          <div className="footer-3715">
            <div className="footer-37-child72" />
            <b className="subscribe-to-newsletter21">Subscribe to Newsletter</b>
            <b className="follow-us21">Follow Us</b>
            <div className="footer-37-child73" />
            <div className="text23" />
            <div className="privacy-policy-parent19">
              <div
                className="privacy-policy22"
                onClick={onPrivacyPolicyTextClick}
              >
                Privacy Policy
              </div>
              <div className="maps23" onClick={onMapsTextClick}>
                Maps
              </div>
              <div className="shop23" onClick={onShopTextClick}>
                Shop
              </div>
              <div className="contact-us24" onClick={onContactUsText1Click}>
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
              <img className="image-41-icon21" alt="" src="/image-41@2x.png" />
              <img className="image-42-icon21" alt="" src="/image-42@2x.png" />
              <img className="image-43-icon21" alt="" src="/image-43@2x.png" />
            </div>
            <img className="icon48" alt="" src="/-1-11@2x.png" />
            <div className="footer-37-child74" />
            <img className="footer-37-child75" alt="" src="/ellipse-18.svg" />
            <img className="footer-37-child76" alt="" src="/ellipse-19.svg" />
            <img className="image-135-icon21" alt="" src="/image-135@2x.png" />
            <img className="image-136-icon21" alt="" src="/image-136@2x.png" />
            <img className="image-137-icon21" alt="" src="/image-137@2x.png" />
            <img className="image-134-icon21" alt="" src="/image-134@2x.png" />
          </div>
        </div>
        <div className="navbar19">
          <img
            className="icon49"
            alt=""
            src="/-1-1@2x.png"
            onClick={onImage1Click}
          />
          <img
            className="vector-icon22"
            alt=""
            src="/vector2.svg"
            onClick={onVectorIconClick}
          />
          <img
            className="icon-cart19"
            alt=""
            src="/-icon-cart1.svg"
            onClick={onIconCartClick}
          />
          <div className="gallery23" onClick={onGalleryTextClick}>
            Gallery
          </div>
          <div className="activites19" onClick={onActivitesTextClick}>
            Activites
          </div>
          <div className="map20" onClick={onMapTextClick}>
            Map
          </div>
          <div className="eat19" onClick={onEatTextClick}>
            Eat
          </div>
          <div className="events22" onClick={onEventsTextClick}>
            Events
          </div>
          <div className="kahani26" onClick={onKahaniTextClick}>
            Kahani
          </div>
          <img
            className="icon-envelope-closed19"
            alt=""
            src="/-icon-envelope-closed1.svg"
            onClick={onIconEnvelopeClosedClick}
          />
        </div>
      </div>
      {isPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp1}
        >
          <PopUp1 onClose={closePopUp1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContactUs;
