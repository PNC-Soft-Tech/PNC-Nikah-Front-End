/* eslint-disable react/prop-types */

import { Colors } from "../../constants/colors";

const Select = ({
  title = "title",
  value,
  setValue,
  required = false,
  options = [],
  subtitle,
}) => {
  return (
    <div className="text-left my-3">
      <label className="text-gray-500  font-bold mb-2">
        {title} <span className="text-red-900">{required && "*"}</span>
      </label>
      <select
        className="w-full p-2 text-black mt-2 border rounded focus:border-blue-500 outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
        <option value="">নির্বাচন করুন</option>
        {options.map((option, index) => (
          <option className="text-black" key={index} value={option?.value}>
            {option?.value}
          </option>
        ))}
      </select>

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
};

export default Select;
