import { ImgHTMLAttributes } from "react";
import st from "./Avatar.module.css";
import clsx from "clsx";

interface AvatarProprs extends ImgHTMLAttributes<HTMLImageElement> {}

export function Avatar(props: AvatarProprs) {
  return <img {...props} className={clsx(st.avatar, props.className)} />;
}
