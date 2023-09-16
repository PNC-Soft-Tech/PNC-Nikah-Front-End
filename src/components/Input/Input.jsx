/* eslint-disable react/prop-types */

const Input = ({
  title,
  type = "text",
  required = false,
  value,
  setValue,
  placeholder = "",
}) => {
  return (
    <div>
      {title && (
        <label className="text-left text-gray-500 font-bold block">
          {title}
        </label>
      )}

      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-2 py-1 outline-none hover:border-blue-900 indent-2 border border-gray-500 rounded-sm"
      />
    </div>
  );
};

export default Input;
