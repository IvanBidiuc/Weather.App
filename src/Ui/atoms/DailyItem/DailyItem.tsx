import React from 'react';
import dayjs from 'dayjs';
// dayjs -schimba zilele
import { ForecastData } from '../../../interfaces';
import './DailyItem.css';

interface DailyItem {
  day: ForecastData;
  index: number;
}
interface Props {
  dayData: DailyItem;
}
const mathC = (temp: number) => {
  return Math.round(temp);
};

export const DailyItem: React.FC<Props> = (props) => {
  const { dt } = props.dayData.day;
// dayjs - librarie care lucreaza cu datele (zilele)
  const getDay = () => {
    const newDate = dayjs.unix(dt).date();
    const date = dayjs.unix(dt).day();
    let dayOfWeek = '';
    if (date === 0) dayOfWeek = 'Sun';
    if (date === 1) dayOfWeek = 'Mon';
    if (date === 2) dayOfWeek = 'Tue';
    if (date === 3) dayOfWeek = 'Wed';
    if (date === 4) dayOfWeek = 'Thu';
    if (date === 5) dayOfWeek = 'Fri';
    if (date === 6) dayOfWeek = 'Sat';
    return `${dayOfWeek} ${newDate} `;
  };

  return (
    <div className="weather-day--item">
      <h1>{getDay()}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${props.dayData.day.weather[0].icon}@2x.png`}
        // schimba icon
        alt=""
      />
      <div className="weather-day--text">
        Max_Temperature: {`${mathC(props.dayData.day.temp.max)}`} °С
      </div>
      <div className="weather-day--text">
        Min_Temperature: {`${mathC(props.dayData.day.temp.min)}`} °С
      </div>
    </div>
  );
};
