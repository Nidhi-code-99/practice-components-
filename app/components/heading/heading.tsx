"use client";

import React from "react";

export interface HeadingProps {
  size: "h0" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  color?:
    | "black"
    | "secondry-black"
    | "electric-green"
    | "white"
    | "equity-blue"
    | "rainy-blue"
    | "main-grey";
  weight?: "3" | "4" | "5" | "6" | "7";
  italic?: boolean;
  useH1TagInHtml?: boolean;
  useH2TagInHtml?: boolean;
}

const sizeMap: Record<HeadingProps["size"], string> = {
  h0: "text-5xl md:text-6xl",
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-base md:text-lg",
};

const colorMap: Record<NonNullable<HeadingProps["color"]>, string> = {
  black: "text-black",
  "secondry-black": "text-gray-800",
  "electric-green": "text-green-400",
  white: "text-white",
  "equity-blue": "text-blue-800",
  "rainy-blue": "text-blue-400",
  "main-grey": "text-gray-500",
};

const Heading = ({
  size,
  title,
  color = "black",
  weight = "5",
  italic = false,
  useH1TagInHtml,
  useH2TagInHtml,
}: HeadingProps) => {
  const HeadingTag = useH1TagInHtml ? "h1" : useH2TagInHtml ? "h2" : "p";

  const className = [
    sizeMap[size],
    colorMap[color],
    `font-${weight}`,
    italic && "italic",
  ]
    .filter(Boolean)
    .join(" ");

  return <HeadingTag className={className}>{title}</HeadingTag>;
};

export default Heading;
