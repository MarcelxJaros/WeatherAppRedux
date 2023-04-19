import { useDispatch, useSelector } from "react-redux";
import { State, actionCreators } from "../state";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useRef, useState } from "react";
import { bindActionCreators } from "redux";
import getOpenWeatherIcon from "./GetWeatherIcon";
const WeatherChart = () => {

  const formData = useSelector((state: State) => state.formData)

  const weatherdata = useSelector((state: State) => state.weatherdata)
  console.log("time:", weatherdata?.timeUnits);
  // console.log("weatherdata:", weatherdata?.timeUnits?.slice(formData.slider[0], formData.slider[1]));

  // const time = weatherdata?.timeUnits?.slice(formData.slider[0], (formData.slider[1] )).map((unit: any) => unit.slice(0, -1).split('T')[1].slice(0, 6))
  const time = weatherdata?.timeUnits?.slice(formData.slider[0], formData.slider[1] + 1).map((unit: any) => {
    const timeStr = unit.slice(0, -1).split('T')[1];
    const hour = timeStr.slice(0, 2);
    const minute = timeStr.slice(3, 5).padStart(2, '0');
    // return hour.Number
    return `${hour}:${minute}`;
  });
  console.log(time);
  const getOptions = (type: any, history: any, today: any, timeUnits: any) => ({
    chart: {
      type,
      width: 800,
      height: 400,
    },
    title: {
      text: `${type} chart`,
    },
    tooltip: {
      shared: true,
      crosshairs: { width: 1, color: "black" }
    },
    yAxis: {
      title: {
        text: 'Degrees °C',
      },
    },
    xAxis: {
      categories: timeUnits
    },
    series: [
      {
        id: 'history',
        name: 'history',
        data: history,
        point: {
          events: {
            mouseOver: function (this: any) {
              console.log('Hovered over history point:', this.y, this.x)
              console.log(getOpenWeatherIcon("1"))

            },
          },
        },
      },
      {
        id: 'today',
        name: 'today',
        data: today,
        point: {
          events: {
            mouseOver: function (this: any) {
              console.log('Hovered over today point:', this.y, this.x)
              console.log(getOpenWeatherIcon("1"))
              // console.log("timeUnits:", timeUnits);
            },
          },
        },
      },
    ],
  });

  if (weatherdata !== undefined) {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions(
          'spline',
          weatherdata?.history?.slice(formData.slider[0], formData.slider[1] + 1),
          weatherdata?.today?.slice(formData.slider[0], formData.slider[1] + 1),
          time
        )}
      />
    )
  } else {
    return <></>
  }


}

export default WeatherChart;