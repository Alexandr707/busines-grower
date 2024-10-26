import { ButtonHTMLAttributes } from "react";
import st from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "regular" | "accent";
}

export function Button({ variant = "regular", ...props }: ButtonProps) {
  const cn = clsx(
    st.button,
    {
      [st.regular]: variant === "regular",
      [st.accent]: variant === "accent",
    },
    props.className
  );
  return <button className={cn}>{props.children}</button>;
}

export default Button;
