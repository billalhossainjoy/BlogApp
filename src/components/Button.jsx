const Button = ({
  children,
  type,
  bgColor,
  color,
  hoverColor,
  hoverBg,
  className,
  ...props
}) => {
  return (
    <button
      className={`${className} ${bgColor} ${color} ${hoverColor} ${hoverBg} rounded py-2 px-4`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
