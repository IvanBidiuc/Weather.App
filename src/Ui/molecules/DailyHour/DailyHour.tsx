import React, { useState, useEffect } from 'react';
import { DailyHourItem } from '../../../../src/Ui/atoms/DailyHourItem/DailyHourItem';

import { for3hour } from '../../../service/services';
import { ForecastData } from '../../../interfaces';
import './DailyHour.css';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyHour: React.FC<Props> = () => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const saveData = await for3hour.request();
        setDailyData(saveData.list);
        isLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
    return () => {
      for3hour.cancel();
    };
  }, []);

  return (
    <div className="weather-container-hour">
      {loading && <div className="loading">Loading...</div>}

      {dailyData &&
        dailyData.map((day: ForecastData, key: number) => (
          <DailyHourItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
