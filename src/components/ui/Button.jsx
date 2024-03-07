const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  // STYLE LIST BUTTON
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "bg-white hover:bg-blue border rounded-xl border-blue text-blue hover:text-white";
      case "secondary":
        return "bg-dark-blue hover:bg-blue text-white";
      case "tertiary-blue":
        return " border border-blue hover:bg-dark-blue text-dark-blue hover:text-white";
      case "tertiary-red":
        return "border border-red-300 hover:bg-red-500 text-red-500 hover:text-white";
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
       font-medium rounded-lg py-2 md:py-2.5 px-3 md:px-4 text-sm md:text-base transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
