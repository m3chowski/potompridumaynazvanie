import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./order-fields.css";

export const OrderFields = () => {
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
    <div className="order-fields">
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
        <TextField
          {...register("country", {
            required: "Length minimum 3 letter",
            pattern: /[A-Za-zА-Яа-я]{3}/,
          })}
          type="text"
          label="Country"
          error={!!errors?.country}
          helperText={!!errors?.country && "Length minimum 3 letter"}
        />
        <TextField
          {...register("city", {
            required: "Length minimum 3 letter",
            pattern: /[A-Za-zА-Яа-я]{3}/,
          })}
          type="text"
          label="City"
          error={!!errors?.city}
          helperText={!!errors?.city && "Length minimum 3 letter"}
        />
        <TextField
          {...register("address", {
            required: "Length minimum 3 letter",
            pattern: /[A-Za-zА-Яа-я]{3}/,
          })}
          type="text"
          label="Address"
          error={!!errors?.address}
          helperText={!!errors?.address && "Length minimum 3 letter"}
        />
        <TextField
          {...register("email", {
            required: "Email format is x@xx.xx",
            pattern:
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
          })}
          type="text"
          label="Email"
          error={!!errors?.email}
          helperText={!!errors?.email && "Email format is x@xx.xx"}
        />
        <div>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};
