import { Link } from "react-router-dom";
import React from "react";

import "./logo.css";

export const Logo = () => {
  return (
    <Link to={"/"} className="logo">
      <div>
        <img
          src="https://play-lh.googleusercontent.com/vBQEUKhetnbbHC3_RxYZyM8-qKK7y-buAW-49HAj-zfU2jWD-UDvYvfk9CGwRy25dw"
          alt="logotext"
        />
      </div>
    </Link>
  );
};
