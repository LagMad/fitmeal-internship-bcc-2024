import React from "react";

const TextArea = ({
  type = "text",
  name,
  className,
  label,
  onChange,
  value,
  required = false,
}) => {
  return (
    <div className="relative z-0 w-full mt-3 group">
      <textarea
        type={type}
        name={name}
        id={name}
        value={value}
        className={`block py-3 px-3 w-full rounded-lg text-sm text-black bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:border-blue-600 peer ${className}`}
        placeholder=""
        onChange={onChange}
        required={required}
      />
      <label
        htmlFor={name}
        className="w-fit px-1 bg-white mx-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
