import { HTMLAttributes } from "react";

export function HeartIcon(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3333 17.5C10.3333 17.5 2.20834 13.125 2.20834 7.96875C2.20834 6.84987 2.65281 5.77681 3.44398 4.98564C4.23515 4.19447 5.3082 3.75 6.42709 3.75C8.19193 3.75 9.70365 4.71172 10.3333 6.25C10.963 4.71172 12.4747 3.75 14.2396 3.75C15.3585 3.75 16.4315 4.19447 17.2227 4.98564C18.0139 5.77681 18.4583 6.84987 18.4583 7.96875C18.4583 13.125 10.3333 17.5 10.3333 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
