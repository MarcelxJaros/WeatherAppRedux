import { useDispatch, useSelector } from "react-redux";
import { State, actionCreators } from "../../state";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useRef, useState } from "react";
import { bindActionCreators } from "redux";
import getOpenWeatherIcon from "../services/GetWeatherIcon";
import useWindowSize from "../services/GetWindowSize";

const WeatherChart = () => {
  const labelRef = useRef<SVGElement>(null);

  const dispatch = useDispatch()

  const { setHoveredPoint } = bindActionCreators(actionCreators, dispatch)

  const formData = useSelector((state: State) => state.formData)
  const weatherdata = useSelector((state: State) => state.weatherdata)
  console.log(weatherdata?.timeUnits);

  const chartRef = useRef(null);

  const [chartWidth, setChartWidth] = useState(800);
  
  const handleMouseOver = () => {
    console.log('Mouse over the chart!');
    // Add custom logic here for when the mouse pointer enters the chart area
  };

  const handleMouseOut = () => {
    if (labelRef.current !== null && labelRef.current.getAttribute('opacity') === '0') {
      console.log('Mouse left the chart.');
      setHoveredPoint({index: -1, time: ''});
    }
  };

  const dataHovered = (hoveredPoint: number) => {
    // console.log("hovered over:", hoveredPoint);
    setHoveredPoint({index: hoveredPoint, time: weatherdata?.timeUnits[hoveredPoint]});
    // setHoveredPoint(-1);
  }

  // console.log(time);
  const getOptions = (type: any, forecast: any, today: any, timeUnits: any, meta: string, chartWidth: number) => ({
    chart: {
      type,
      width: chartWidth,
      height: 400,
      borderRadius: 10,
      backgroundColor: {
        linearGradient: [-100, -100, -100, 700],
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(173, 216, 230)']
        ]
    },
    },
    title: {
      text: formData.city,
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
        id: meta,
        name: meta,
        data: forecast,
        color: '#FFB6C1',
        marker: {
          symbol: 'circle',
        },
        point: {
          events: {
            mouseOver: function (this: any) {
              dataHovered(this.x)
            },
          },
        },
      },
      {
        id: 'today',
        name: 'today',
        data: today,
        color: '#000000',
        marker: {
          symbol: 'diamond',
        },
        point: {
          events: {
            mouseOver: function (this: any) {
              dataHovered(this.x)
            },
          },
        },
      },
    ],
  });

  const size = useWindowSize();
  console.log(size)
  useEffect(() => {
    console.log(chartWidth);
    if (typeof size.width === 'number' && size.width < 820 && size.width > 0) {
      setChartWidth(size.width - 20)
    } else {
      setChartWidth(800)
    }
  }, [size])

  if (weatherdata !== undefined) {
    return (
      <div
        // onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <HighchartsReact
          ref={chartRef}
          highcharts={Highcharts}
          options={getOptions(
            'spline',
            weatherdata?.forecast?.apparent_temperature?.slice(formData?.slider[0], formData?.slider[1] + 1),
            weatherdata?.today?.apparent_temperature?.slice(formData.slider[0], formData.slider[1] + 1),
            weatherdata?.timeUnits?.slice(formData.slider[0], formData.slider[1] + 1),
            weatherdata?.meta,
            chartWidth
          )}
        />
      </div>
    )
  } else {
    return <></>
  }


}

export default WeatherChart;