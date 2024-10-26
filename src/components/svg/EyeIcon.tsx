import { HTMLAttributes } from "react";

export function EyeIcon(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33319 3.9375C3.70819 3.9375 1.45819 9 1.45819 9C1.45819 9 3.70819 14.0625 9.33319 14.0625C14.9582 14.0625 17.2082 9 17.2082 9C17.2082 9 14.9582 3.9375 9.33319 3.9375Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33319 11.8125C10.8865 11.8125 12.1457 10.5533 12.1457 9C12.1457 7.4467 10.8865 6.1875 9.33319 6.1875C7.77989 6.1875 6.52069 7.4467 6.52069 9C6.52069 10.5533 7.77989 11.8125 9.33319 11.8125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
