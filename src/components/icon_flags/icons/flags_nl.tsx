import * as React from "react";
import { SVGProps } from "react";

const FlagsNl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#21468b" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v320H0z" />
    <path fill="#ae1c28" d="M0 0h640v160H0z" />
  </svg>
);

export default FlagsNl;
