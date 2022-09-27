import './ForecastElement.scss'

const ForecastElement = ({ data }) => {
  const date = new Date();
  let displayDate;
  if (date.toISOString().split("T")[0] === data.date) {
    displayDate = "Today";
  } else {
    displayDate = `${data.date.substring(8)}/${data.date.substring(5, 7)}`;
  }
  console.log(date.toISOString());
  console.log(data.date);

  return (
    <div className="forecast-element">
      <p className="forecast-element__info">{displayDate}</p>
      <p className="forecast-element__info">High: {data.day.maxtemp_c}°C</p>
      <p className="forecast-element__info">Low: {data.day.mintemp_c}°C</p>
      <img
        src={data.day.condition.icon}
        alt="the day's weather condition"
        className="forecast-element__info"
      />
    </div>
  );
};

export default ForecastElement;