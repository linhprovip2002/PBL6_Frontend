import * as Yup from 'yup';
import {password, username, email, re_password} from './common';

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
