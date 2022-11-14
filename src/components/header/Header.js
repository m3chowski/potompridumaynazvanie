import React from "react";
import { Logo } from "./logo";
import { Search } from "./search";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Logo />
        <Search />
      </div>
    </div>
  );
};
