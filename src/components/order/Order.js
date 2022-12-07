import React from "react";
import { OrderFields } from "./order-fields";
import { OrderItems } from "./order-items";

import "./order.css";

export const Order = () => {
  return (
    <div className="order">
      <OrderFields />
      <OrderItems />
    </div>
  );
};
