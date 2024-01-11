import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux';
import { State } from '../../state';
// https://mui.com/material-ui/react-slider/
import '@mui/material/styles/createPalette';
import { createTheme, ThemeProvider } from '@mui/material/styles';
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    brown: PaletteColor;
  }
  interface PaletteOptions {
    brown: PaletteColorOptions;
  }
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    brown: true;
  }
}

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    brown: defaultTheme.palette.augmentColor({
      color: {
        main: '#ADD8E6',
      },
      name: 'brown',
    }),
  },
});

interface TimeSliderProps {
  handleSliderChange: (values: number[]) => void;
}

const TimeSlider = ({ handleSliderChange }: TimeSliderProps) => {
  const minDistance = 3;
  const formData = useSelector((state: State) => state.formData);
  const [value, setValue] = useState<number[]>(formData?.slider || [0, 23]);

  function valuetext(value: number) {
    return `${value}`;
  }

  useEffect(() => {
    handleSliderChange(value);
  }, [value]);
  
  /*
    The handleChange function is a handler for the onChange event of a slider component.
    It ensures that the selected time range on the slider adheres to a minimum distance constraint.

    The function takes the event, newValue (slider values), and activeThumb (index of the active thumb) as parameters.
    If newValue is not an array, the function returns early. Otherwise, it checks if the difference between
    the selected range is less than the specified minDistance.

    If the range is too small, the function adjusts the values to maintain the minimum distance constraint.
    It clamps the values based on the activeThumb and updates the slider accordingly.
  */
  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
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
    <div className="slider-container">
      <ThemeProvider theme={theme}>
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
          color="brown"
        />
      </ThemeProvider>
    </div>
  );
};

export default TimeSlider;
