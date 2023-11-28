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
