import type { ButtonProps } from "./Button.type";
import './button.style.css'

export default function Button({ title, mode, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`btn ${mode === "Primary" ? "btn-primary" : "btn-secondary"}`}
    >
      {title}
    </button>
  );
}
