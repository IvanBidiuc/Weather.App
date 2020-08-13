import React, { useState, useEffect } from 'react';
import { DailyItem } from '../../../Ui/atoms/DailyItem/DailyItem';

import { for5day } from '../../../service/services';
import { ForecastData } from '../../../interfaces';
import './DailyObject.css';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyObject: React.FC<Props> = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const saveData = await for5day.request();
        setForecastData(saveData.list);
        isLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      for5day.cancel();
    };
  }, []);

  return (
    <div className="weather_container">
      {loading && <div className="loading">Loading...</div>}

      {forecastData &&
        forecastData.map((day: ForecastData, key: number) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
