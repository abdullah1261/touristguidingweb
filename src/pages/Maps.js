import { Player } from "@lottiefiles/react-lottie-player";
import "./Maps.css";
const Maps = () => {
  return (
    <div className="maps">
      <div className="map">Map</div>
      <img className="image-116-icon" alt="" src="/image-116@2x.png" />
      <img className="image-117-icon" alt="" src="/image-116@2x.png" />
      <iframe
        className="maps-child"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13604.856722883613!2d74.2531461!3d31.5182769!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681730484582!5m2!1sen!2s"
      />
      <Player className="maps-item" autoplay src="" />
      <img className="navbar-icon1" alt="" src="/navbar1.svg" />
    </div>
  );
};

export default Maps;
