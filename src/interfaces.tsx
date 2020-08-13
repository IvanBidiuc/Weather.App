// Tipizarea
export interface Temp {
  max: number;
  min: number;
  temp: number;
}

interface Weather {
  main: string;
  icon: string;
}

interface Main {
  humidity: number;
  temp: number;
}
export interface dayData {
  day: ForecastData;
  index: number;
  temp: Temp;
}
export interface ForecastData {
  dt: number;
  humidity: number;
  temp: Temp;
  weather: Weather[];
  main: Main;
  dt_txt: string;
}
export interface Props {
  data: ForecastData[];
}
