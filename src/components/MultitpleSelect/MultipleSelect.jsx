/* eslint-disable react/prop-types */
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Colors } from "../../constants/colors";

const animatedComponents = makeAnimated();

export default function MultipleSelect({
  options,
  title,
  subtitle,
  value,
  setValue,
}) {
  console.log(value);
  return (
    <div className="text-left">
      {title && (
        <label className="text-left mb-2 text-gray-500 font-bold block">
          {title}
        </label>
      )}
      <Select
        closeMenuOnSelect={false}
        onChange={(val) => setValue(val)}
        value={value}
        components={animatedComponents}
        isMulti
        options={options}
        className="text-left"
      />
      {subtitle && (
        <p
          style={{ color: Colors.pncPrimaryColor }}
          className="text-left text-gray-500 font-bold my-2 block"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
