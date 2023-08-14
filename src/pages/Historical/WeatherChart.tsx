import { useDispatch, useSelector } from "react-redux";
import { State, actionCreators } from "../../state";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {  useRef } from "react";
import { bindActionCreators } from "redux";

const WeatherChart = () => {
  const labelRef = useRef<SVGElement>(null);

  const dispatch = useDispatch()

  const { setHoveredPoint } = bindActionCreators(actionCreators, dispatch)

  const formData = useSelector((state: State) => state.formData)
  const weatherdata = useSelector((state: State) => state.weatherdata)
  console.log(weatherdata?.timeUnits);

  const chartRef = useRef(null);
  
  const handleMouseOut = () => {
    if (labelRef.current !== null && labelRef.current.getAttribute('opacity') === '0') {
      console.log('Mouse left the chart.');
      setHoveredPoint({index: -1, time: ''});
    }
  };

  const dataHovered = (hoveredPoint: number) => {
    console.log("actually hovered over:", hoveredPoint + formData.slider[0]);
    setHoveredPoint({index: hoveredPoint + formData.slider[0], time: weatherdata?.timeUnits[hoveredPoint + formData.slider[0]]});
    // setHoveredPoint(-1);
  }

  // console.log(time);
  const getOptions = (type: any, forecast: any, today: any, timeUnits: any, meta: string) => ({
    chart: {
      type,
      maxWidth: 800,
      // height: 400,
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
    responsive: {
      rules: [{
          condition: {
              maxWidth: 600
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
  });

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
            weatherdata?.meta
          )}
        />
      </div>
    )
  } else {
    return <></>
  }


}

export default WeatherChart;