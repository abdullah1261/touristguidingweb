import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kahani1.css";
const Kahani1 = () => {
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
    <div className="kahani10">
      <div className="footer-373">
        <div className="footer-37-child12" />
        <b className="subscribe-to-newsletter9">Subscribe to Newsletter</b>
        <b className="follow-us9">Follow Us</b>
        <div className="footer-37-child13" />
        <div className="text9" />
        <div className="privacy-policy-parent7">
          <div className="privacy-policy9" onClick={onPrivacyPolicyTextClick}>
            Privacy Policy
          </div>
          <div className="maps10" onClick={onMapsTextClick}>
            Maps
          </div>
          <div className="shop9" onClick={onShopTextClick}>
            Shop
          </div>
          <div className="contact-us10" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="copyright9">
          <div className="all-rights-reserved9">© 2023 All Rights Reserved</div>
        </div>
        <div className="subscribe18">
          <div className="subscribe-child7" />
          <div className="enter-your-email9">Enter your email Address</div>
          <div className="buttonstarted9">
            <div className="subscribe19">Subscribe</div>
          </div>
        </div>
        <div className="image-41-parent7">
          <img className="image-41-icon9" alt="" src="/image-41@2x.png" />
          <img className="image-42-icon9" alt="" src="/image-42@2x.png" />
          <img className="image-43-icon9" alt="" src="/image-43@2x.png" />
        </div>
        <img className="icon25" alt="" src="/-1-11@2x.png" />
        <div className="footer-37-child14" />
        <img className="footer-37-child15" alt="" src="/ellipse-18.svg" />
        <img className="footer-37-child16" alt="" src="/ellipse-19.svg" />
        <img className="image-135-icon9" alt="" src="/image-135@2x.png" />
        <img className="image-136-icon9" alt="" src="/image-136@2x.png" />
        <img className="image-137-icon9" alt="" src="/image-137@2x.png" />
        <img className="image-134-icon9" alt="" src="/image-134@2x.png" />
      </div>
      <div className="legends-of-lahore1">Legends of Lahore</div>
      <div className="a-defeated-king-container">
        <span className="a-defeated-king-container1">
          <p className="a-defeated-king">A defeated king</p>
          <p className="a-funeral-pyre">A funeral pyre</p>
        </span>
      </div>
      <div className="welcome-to-a1">
        Welcome to a city steeped in history, where every street has a story to
        tell…
      </div>
      <div className="then-there-are-container">
        <span className="a-defeated-king-container1">
          <p className="a-funeral-pyre">
            Then there are those tales that have no landmarks to pay them mute
            testimony; that are
          </p>
          <p className="a-funeral-pyre">
            remembered only distantly, if at all. One such tale is that of Raja
            Jaipal.
          </p>
          <p className="a-funeral-pyre">
            The next time you find yourself between Bhaati Gate and Mori Gate on
            the circular road,
          </p>
          <p className="a-funeral-pyre">
            transport yourself over a thousand years into the past and imagine a
            scene of despair
          </p>
          <p className="a-funeral-pyre">
            and defeat. There stood the Hindushahi King Raja Jaipal, in full
            military regalia. Hiding
          </p>
          <p className="a-funeral-pyre">
            great shame and sorrow behind a stoic face, he lit a pyre and
            climbed onto it,
          </p>
          <p className="a-funeral-pyre">
            immolating himself in full view of a crowd of onlookers. This was
            Jauhar, an act of self-
          </p>
          <p className="a-funeral-pyre">
            immolation usually committed by the women of the martial Rajputs in
            order to avoid the
          </p>
          <p className="a-funeral-pyre">
            shame of being captured by an invading army. What drove a king to do
            such a thing?
          </p>
          <p className="a-funeral-pyre">
            The answer is: defeat. This proud king had fought war after war
            against the Afghan
          </p>
          <p className="a-funeral-pyre">
            invader Subuktagin, only to suffer incredible losses every time.
            Even the death of his
          </p>
          <p className="a-funeral-pyre">
            great rival did not deliver him, as on November 27, 1001, Jaipal was
            thoroughly beaten
          </p>
          <p className="a-funeral-pyre">
            by Subuktagin’s son, Mahmud of Ghazni. Though he won his freedom
            after paying a
          </p>
          <p className="a-funeral-pyre">
            huge ransom, this proud Punjabi king could not bear the loss and
            ended his life on a
          </p>
          <p className="a-funeral-pyre">
            flaming pyre. Until not too long ago, there stood a Pipal tree at
            the spot that was known
          </p>
          <p className="a-funeral-pyre">
            as the Jauhar tree. Did those who had sheltered beneath its branches
            know the
          </p>
          <p className="a-funeral-pyre">sacrifice it marked?</p>
        </span>
      </div>
      <img className="image-139-icon1" alt="" src="/image-1391@2x.png" />
      <div className="navbar8">
        <img
          className="icon26"
          alt=""
          src="/-1-1@2x.png"
          onClick={onImage1Click}
        />
        <img
          className="vector-icon11"
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <img
          className="icon-cart8"
          alt=""
          src="/-icon-cart1.svg"
          onClick={onIconCartClick}
        />
        <div className="gallery12" onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className="activites8" onClick={onActivitesTextClick}>
          Activites
        </div>
        <div className="map8" onClick={onMapTextClick}>
          Map
        </div>
        <div className="eat8" onClick={onEatTextClick}>
          Eat
        </div>
        <div className="events11" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="kahani11" onClick={onKahaniTextClick}>
          Kahani
        </div>
        <img
          className="icon-envelope-closed8"
          alt=""
          src="/-icon-envelope-closed1.svg"
          onClick={onIconEnvelopeClosedClick}
        />
      </div>
    </div>
  );
};

export default Kahani1;
