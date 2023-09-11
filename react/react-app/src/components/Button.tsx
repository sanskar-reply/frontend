import { ReactNode } from "react";
import ".././App.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
  className?: string;
}

const Button = ({ children, onClick, color = "primary", className }: Props) => {
  return (
    <button
      type="button"
      className={{ className } + " btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
