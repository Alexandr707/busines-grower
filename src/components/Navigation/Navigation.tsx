import clsx from "clsx";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import {
  ChatIcon,
  HouseIcon,
  PluseCircleIcon,
  ProfileIcon,
  SearchIcon,
} from "../svg";
import st from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const navLinkClassName = ({ isActive, isPending }: NavLinkRenderProps) =>
    st.navigationItem +
    " " +
    (isPending ? "pending" : isActive ? st.active : "");

  return (
    <div className={clsx(st.navigation, className)}>
      <div className={st.navigationContent}>
        <NavLink to={"/home"} className={navLinkClassName}>
          <HouseIcon className="icon icon-medium-2" />
        </NavLink>
        <NavLink to={"/search"} className={navLinkClassName}>
          <SearchIcon className="icon icon-medium-2" />
        </NavLink>
        <NavLink to={"/upload"} className={navLinkClassName}>
          <PluseCircleIcon className="icon icon-medium-2" />
        </NavLink>
        <NavLink to={"/chat"} className={navLinkClassName}>
          <ChatIcon className="icon icon-medium-2" />
        </NavLink>
        <NavLink to={"/profile"} className={navLinkClassName}>
          <ProfileIcon className="icon icon-medium-2" />
        </NavLink>
      </div>
    </div>
  );
}
