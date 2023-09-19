/* eslint-disable react/prop-types */
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Colors } from "../../constants/colors";

const DoubleRangeSlider = ({
  value,
  setValue,
  step = 1,
  maxValue = 60,
  minValue = 18,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-6">
      {title && (
        <label className="text-left mb-4 text-gray-500 font-bold block">
          {title}
        </label>
      )}
      <InputRange
        draggableTrack
        step={step}
        maxValue={maxValue}
        minValue={minValue}
        onChange={(value) => setValue(value)}
        onChangeComplete={(value) => console.log(value)}
        value={value}
      />
      {subtitle && (
        <p
          style={{ color: Colors.pncPrimaryColor }}
          className="text-left text-gray-500 font-bold my-5 block"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default DoubleRangeSlider;
