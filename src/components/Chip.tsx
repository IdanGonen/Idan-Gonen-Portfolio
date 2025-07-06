type ChipProps = {
  label: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
};

const Chip = ({
  label,
  variant = "default",
  size = "medium",
  className = "",
  onClick,
}: ChipProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";

  const variantClasses = {
    default: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    error: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base",
  };

  const cursorClass = onClick ? "cursor-pointer" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${cursorClass} ${className}`;

  return (
    <span className={combinedClasses} onClick={onClick}>
      {label}
    </span>
  );
};

export default Chip;
