import React from "react";

const Input = ({
  type = "text",
  name,
  className,
  onChange,
  value,
  placeholder,
  required = false,
}) => {
  return (
    <div className="w-full group">
      <input
        type={type}
        name={name}
        id={name}
        className={`block py-3 px-3 w-full rounded-lg text-sm text-black focus:text-cust-orange-normal bg-transparent border-[1px] border-cust-orange-normal focus:border-cust-orange-normal focus:outline-none focus:bg-cust-orange-light-active ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;