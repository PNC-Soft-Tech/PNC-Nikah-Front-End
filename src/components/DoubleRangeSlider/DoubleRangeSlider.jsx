/* eslint-disable react/prop-types */
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const DoubleRangeSlider = ({ value, setValue }) => {
  return (
    <div className="mb-6">
      <InputRange
        draggableTrack
        maxValue={60}
        minValue={18}
        onChange={(value) => setValue(value)}
        onChangeComplete={(value) => console.log(value)}
        value={value}
      />
    </div>
  );
};

export default DoubleRangeSlider;
