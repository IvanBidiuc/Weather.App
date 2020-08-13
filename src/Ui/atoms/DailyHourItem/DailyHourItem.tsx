import React from 'react';
import { ForecastData } from '../../../interfaces';
import './DailyHourItem.css';


interface DailyHourItem {
  day: ForecastData;
  index: number;
}

interface Props {
  dayData: DailyHourItem;
}

const mathC = (temp: number) => {
  return Math.round(temp);
};
// transforma datele in grade °C

export const DailyHourItem: React.FC<Props> = (props) => {
  return (
    <div className="weather-day--hour">
      <h1>Time:</h1>
      <h2>{props.dayData.day.dt_txt.substr(11, 17)}</h2>
      <div className="weather-day--temp">
        {`${mathC(props.dayData.day.main.temp)}`} °C
      </div>
    </div>
  );
};
