import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// se face cautarea  prin slash
import { DailyObject } from '../../../Ui/molecules/DailyObject/DailyObject';
// import { DailyObject } from 'Ui/molecules/DailyObject/DailyObject';
import { DailyHour } from '../../../Ui/molecules/DailyHour/DailyHour';

import { ForecastData } from '../../../interfaces';
import './App.css';

export const App: React.FC = () => {
  const [forecastData] = useState<ForecastData[]>([]);
  // preea constanta .get<{ list: ForecastData[] }>(
        // `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau,md&cnt=5&units=metric&appid=${API_KEY}`,
  const [dailyData] = useState<ForecastData[]>([]);


  return (
    <Router>
      <Switch>
        <>
          <div className="container">
            <h1 className="weather_title">Daily Weather Application</h1>
            <Route path="/" comp={DailyObject} exact>
              <Link className="link" to="/hour">
                 Click here for Hour-Temperature
              </Link>
              {/* pleaca spre ore */}
              <DailyObject dataEnter={forecastData} />
            </Route>
            <Route path="/hour" comp={DailyHour}>
              <Link className="link" to="/">
                 Back to daily
              </Link>
              {/* revine  inapoi la zile */}
              <DailyHour dataEnter={dailyData} />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
};
