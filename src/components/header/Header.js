import React from "react";
import { CityChanger } from "./city-changer";
import { Logo } from "./logo";
import { WorkTime } from "./work-time/Work-Time";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <CityChanger />
      <WorkTime />
    </div>
  );
};
