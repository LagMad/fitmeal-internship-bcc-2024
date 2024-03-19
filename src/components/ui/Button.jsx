const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary-rectangle":
        return "py-2 md:py-2.5 px-3 md:px-8 bg-cust-orange-normal hover:bg-white rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold";
      case "secondary-rectangle":
        return "py-2 md:py-2.5 px-3 md:px-8 bg-white hover:bg-cust-orange-normal text-cust-orange-normal hover:text-white rounded-xl font-semibold";
      case "primary-round":
        return "bg-cust-green-normal hover:bg-white py-3 px-3 rounded-full text-white hover:text-cust-green-normal border-transparent border-2 hover:border-2 hover:border-white drop-shadow-lg";
      case "secondary-round":
        return "bg-white hover:bg-cust-green-normal py-3 px-3 text-cust-green-normal hover:text-white rounded-full";
      case "tertiary-white":
        return "bg-white text-cust-light-active hover:text-cust-orange-normal rounded-none hover:border-b-cust-orange-normal hover:border-b-2";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation)}
       font-medium text-sm md:text-sm transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
