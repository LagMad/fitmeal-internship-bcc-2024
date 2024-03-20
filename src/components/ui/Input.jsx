import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      children,
      type = "text",
      name,
      className,
      onChange,
      value,
      placeholder,
      readOnly,
      required = false,
      options = [],
    },
    ref
  ) => {
    if (type === "select") {
      return (
        <div className="flex relative w-full group">
          <select
            ref={ref}
            name={name}
            id={name}
            className={`block py-3 px-3 w-full rounded-lg text-sm text-black focus:text-cust-orange-normal bg-transparent border-[1px] border-cust-orange-normal focus:border-cust-orange-normal focus:outline-none focus:bg-cust-orange-light-active ${className}`}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
          >
            <option className="" value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                className="py-10 text-cust-orange-normal hover:text-white bg-cust-orange-light-active hover:bg-cust-orange-normal"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {children}
        </div>
      );
    } else {
      return (
        <div className="flex relative w-full group">
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            className={`block py-3 px-3 w-full rounded-lg text-sm text-black focus:text-cust-orange-normal bg-transparent border-[1px] border-cust-orange-normal focus:border-cust-orange-normal focus:outline-none focus:bg-cust-orange-light-active ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
          />
          {children}
        </div>
      );
    }
  }
);

export default Input;
