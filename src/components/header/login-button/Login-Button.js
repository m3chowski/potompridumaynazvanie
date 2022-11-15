import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

import "./login-button.css";

export const LoginButton = () => {
  return (
    <div className="login-button">
      <Button>
        <span>Login</span>
        <LoginIcon />
      </Button>
    </div>
  );
};
