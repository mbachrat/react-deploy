import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 330"
    style={{
      enableBackground: "new 0 0 330.001 330.001",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M174 177a15 15 0 0 1-18 0L30 85 0 63v212c0 8 7 15 15 15h300c8 0 15-7 15-15V63l-30 22-126 92z" />
    <path d="M165 146 310 40H20z" />
  </svg>
)

export default SvgComponent