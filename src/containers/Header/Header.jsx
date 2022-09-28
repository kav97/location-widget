import "./Header.scss";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png"

const Header = ({ location }) => {
  const date = new Date();
  const currentHour = date.getHours();

  let greetingTime = "Morning";
  let greetingImg = sunrise;

  if (currentHour > 18) {
    greetingTime = "Evening";
    greetingImg = moon;
  } else if (currentHour > 12) {
    greetingTime = "Afternoon";
    greetingImg = sun;
  }

  return (
    <header className="header">
      <div className="header-greeting">
        <img src={greetingImg} className="header-greeting__img" alt={greetingTime} />
        <h1 className="header-greeting__message">Good {greetingTime}!</h1>
      </div>  
      <div className="header-info">
        <p className="header-info__date">{date.toLocaleDateString('en-GB')}</p>
        <p className="header-info__location">
          {location.name}, {location.region}, {location.country}
        </p>
      </div>
    </header>
  );
};

export default Header;