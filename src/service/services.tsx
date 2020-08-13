import axios from 'axios';
import { ForecastData } from '../interfaces';

const { CancelToken } = axios;

const API_KEY = '886705b4c1182eb1c69f28eb8c520e20';
// link pe 5 zile
export const for5day = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau,md&cnt=5&units=metric&appid=${API_KEY}`,
        {
          cancelToken: new CancelToken((c) => (for5day.cancel = c))
          // cand primeste datele,cancelToken le stocheaza in interiorul programului
          // asociați acea solicitare specifică acelei surse pe care primiți formular var source = CancelToken.source ();
        }
      )
      .then((res) => res.data)
};
// link din 3 in 3 ore
export const for3hour = {
  cancel: () => {},
  request: async () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast?q=Chisinau,md&cnt=8&units=metric&appid=${API_KEY}`,
        {
          cancelToken: new CancelToken((c) => (for3hour.cancel = c))
        }
      )
      .then((res) => res.data)
};
