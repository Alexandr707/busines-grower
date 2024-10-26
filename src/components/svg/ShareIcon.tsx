import { HTMLAttributes } from "react";

export function ShareIcon(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.89969 18.63C4.44281 16.9866 8.49375 13.5 14.25 13.5V18L21.75 10.5L14.25 3V7.5C9.3 7.5 2.95406 12.2297 2.25 18.3319C2.24025 18.4109 2.25591 18.491 2.2947 18.5605C2.3335 18.63 2.39341 18.6854 2.46578 18.7186C2.53814 18.7518 2.6192 18.7611 2.69721 18.7452C2.77522 18.7293 2.84613 18.6889 2.89969 18.63Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
