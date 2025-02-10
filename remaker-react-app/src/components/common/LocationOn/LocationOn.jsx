import React from "react";
import "./style.css";

export const LocationOn = ({
  className,
  locationOn = "https://c.animaapp.com/T2T9GUNe/img/location-on@2x.png",
}) => {
  return (
    <img
      className={`location-on ${className}`}
      alt="Location on"
      src={locationOn}
    />
  );
};
