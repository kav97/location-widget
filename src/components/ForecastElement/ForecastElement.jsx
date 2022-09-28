import './ForecastElement.scss'

const ForecastElement = ({ data }) => {
  const date = new Date();
  let displayDate;
  if (date.toISOString().split("T")[0] === data.date) {
    displayDate = "Today";
  } else {
    displayDate = `${data.date.substring(8)}/${data.date.substring(5, 7)}`;
  }

  return (
    <div className="forecast-element">
      <p className="forecast-date">{displayDate}</p>
      <div className="forecast-info">
        <img
          src={data.day.condition.icon}
          alt="the day's weather condition"
          className="forecast-info__img"
        />
        <div className="forecast-info__temp">
          <p className="forecast-info__temp forecast-info__temp--high">{data.day.maxtemp_c}°C</p>
          <p className="forecast-info__temp forecast-info__temp--low">{data.day.mintemp_c}°C</p>
        </div>
      </div>
      <p className="forecast-condition">{data.day.condition.text}</p>
    </div>
  );
};

export default ForecastElement;