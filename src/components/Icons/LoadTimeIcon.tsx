import classes from "./IconStyle.module.scss";

import React from "react";
import { IconTypes } from "./iconTypes";
import clsx from "clsx";

const LoadTimeIcon = ({
  className,
  color = "primary",
  width = 24,
  height = 24,
}: IconTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={width}
      height={height}
      className={clsx(className, {
        [classes.primaryColor]: color === "primary",
        [classes.secondaryColor]: color === "secondary",
        [classes.whiteColor]: color === "white",
        [classes.warningColor]: color === "warning",
      })}
    >
      <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
    </svg>
  );
};

export default LoadTimeIcon;
