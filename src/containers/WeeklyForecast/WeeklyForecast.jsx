import './WeeklyForecast.scss'
import ForecastElement from "../../components/ForecastElement/ForecastElement.jsx";

const WeeklyForecast = ({ forecastData }) => {
  return (
    <div className="weekly-forecast">
      {forecastData.forecastday.map((day, i) => (
        <ForecastElement key={i} data={day} />
      ))}
    </div>
  );
};

export default WeeklyForecast;