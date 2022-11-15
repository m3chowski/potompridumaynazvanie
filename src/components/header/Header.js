import React from "react";
import { Logo } from "./logo";
import { Search } from "./search";
import { LoginButton } from "./login-button";
import { CartButton } from "./cart-button";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Logo />
        <Search />
      </div>
      <div className="header-right">
        <LoginButton />
        <CartButton />
      </div>
    </div>
  );
};
