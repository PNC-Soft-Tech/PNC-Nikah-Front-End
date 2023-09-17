/* eslint-disable react/prop-types */
const Textarea = ({ placeholder, title, value, setValue, required }) => {
  return (
    <div className="my-2">
      {!placeholder && (
        <label
          htmlFor="message"
          className="text-left text-gray-500 font-bold block"
        >
          {title}
        </label>
      )}

      <textarea
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="message"
        name="message"
        rows="4"
        className="w-full px-4 py-2 bg-white border-[1px] border-gray-300 outline-none rounded-md hover:border-purple-700"
      >
        {placeholder}
      </textarea>
    </div>
  );
};

export default Textarea;
