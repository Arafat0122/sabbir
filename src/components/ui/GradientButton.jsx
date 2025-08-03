
import { cn } from "@/lib/utils";

export default function GradientButton({
  variant = "primary", 
  icon: Icon,          
  children,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary/70 text-white hover:opacity-90",
    secondary:
      "bg-gradient-to-r from-secondary to-secondary/70 text-white hover:opacity-90",
  };

  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-6 py-3 font-medium transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}
