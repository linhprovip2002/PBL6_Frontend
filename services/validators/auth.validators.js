import * as Yup from "yup";
import {
  Address,
  email,
  firstName,
  lastName,
  password,
  phone,
  re_password,
  username,
  access_token,
  new_password,
} from "./common";

export const LoginSchema = Yup.object().shape({
  username,
  password,
});

export const RegisterSchema = Yup.object().shape({
  username,
  email,
  password,
  re_password,
});

export const ForgotPassSchema = Yup.object().shape({
  email,
})

export const NewPasswordSchema = Yup.object().shape({
  access_token,
  new_password,
});

export const UpdateProfileSchema = Yup.object().shape({
  // username,
  // email,
  // password,
  // re_password,
  firstName,
  lastName,
  phone,
  Address,
  // dayOfBirth,
  // oldpassword,
});
