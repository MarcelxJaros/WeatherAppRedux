import { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';
import { useSelector } from "react-redux";
import { State } from "../../state";
// https://mui.com/material-ui/react-slider/

interface TimeSliderProps {
  handleSliderChange: (values: number[]) => void;
}

const TimeSlider = ({handleSliderChange}: TimeSliderProps) => {
  const minDistance = 3;
  const formData = useSelector((state: State) => state.formData)
  const [value, setValue] = useState<number[]>(formData?.slider || [0, 23]);
  // console.log(value);

  function valuetext(value: number) {
    return `${value}`;
  }

  useEffect(() => {
    handleSliderChange(value)
  }, [value])

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 23 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };
  return (
    <div style={{marginLeft: "24px", marginRight: "24px"}}>
      <Slider
        getAriaLabel={() => 'Choose time frame'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        step={1}
        marks
        min={0}
        max={23}
      />

    </div>
  )
}

export default TimeSlider;