import { HTMLAttributes } from "react";
import st from "./Text.module.css";
import clsx from "clsx";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "glimmer" | "main";
}

export function Text({ variant = "glimmer", children, ...props }: TextProps) {
  const cn = variant === "glimmer" ? st.textGlimmer : st.textMain;

  return (
    <span {...props} className={clsx(st.text, cn, props.className)}>
      {children}
    </span>
  );
}
