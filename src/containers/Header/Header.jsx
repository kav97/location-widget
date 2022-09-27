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
    <div className="header">
      <div className="header__info">
        <img src={greetingImg} className="header__img" alt={greetingTime} />
        <p className="header__greeting">Good {greetingTime}!</p>
        <p className="header__date">{date.toLocaleDateString('en-GB')}</p>
        <p className="header__location">
          {location.name}, {location.region}, {location.country}
        </p>
      </div>
    </div>
  );
};

export default Header;