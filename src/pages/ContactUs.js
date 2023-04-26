import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import PopUp1 from "../components/PopUp1";
import PortalPopup from "../components/PortalPopup";
import "./ContactUs.css";
const ContactUs = () => {
  const [isPopUp1Open, setPopUp1Open] = useState(false);
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

  return (
    <>
      <div className="contact-us" data-animate-on-scroll>
        <div className="heading-and-supporting-text">
          <div className="supporting-text">
            Our friendly team would love to hear from you.
          </div>
        </div>
        <div className="input-with-label">
          <div className="label">First name</div>
          <div className="input">
            <img className="help-icon" alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className="hint-text">This is a hint text to help user.</div>
        <div className="input-with-label-2">
          <div className="label">Last name</div>
          <div className="input">
            <img className="help-icon" alt="" src="/help-icon.svg" />
          </div>
        </div>
        <div className="hint-text1">This is a hint text to help user.</div>
        <div className="label-3">Email</div>
        <div className="input-3">
          <div className="content-5">
            <img className="mail-icon" alt="" src="/mail.svg" />
          </div>
          <img className="help-icon" alt="" src="/help-icon1.svg" />
        </div>
        <div className="hint-text2">This is a hint text to help user.</div>
        <div className="label-4">Phone number</div>
        <div className="input-4">
          <div className="text-input">
            <img className="help-icon" alt="" src="/help-icon1.svg" />
          </div>
        </div>
        <div className="hint-text3">This is a hint text to help user.</div>
        <div className="label-5">Message</div>
        <div className="input-5">
          <div className="text">Include a message...</div>
        </div>
        <div className="hint-text4">This is a hint text to help user.</div>
        <div className="text-6">Send message</div>
        <div className="contact-us1">Contact Us</div>
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
        <img className="navbar-icon2" alt="" src="/navbar2.svg" />
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
