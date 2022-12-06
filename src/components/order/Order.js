import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import "./order.css";

export const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="order">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName", {
            required: "Length minimum 3 letter",
            pattern: /[A-Za-zА-Яа-я]{3}/,
          })}
          type="text"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName && "Length minimum 3 letter"}
        />
        <TextField
          {...register("lastName", {
            required: "Length minimum 3 letter",
            pattern: /[A-Za-zА-Яа-я]{3}/,
          })}
          type="text"
          label="Last Name"
          error={!!errors?.lastName}
          helperText={!!errors?.lastName && "Length minimum 3 letter"}
        />
        <div>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};
