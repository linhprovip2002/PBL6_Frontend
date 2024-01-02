import * as Yup from "yup";

const username = Yup.string().required("Vui lòng nhập tài khoản");

const email = Yup.string()
  .required("Vui lòng nhập Email")
  .email("Vui lòng nhập một email");

const password = Yup.string().required("Vui lòng nhập mật khẩu mới");

const re_password = Yup.string()
  .required("Vui lòng nhập lại mật khẩu mới")
  .oneOf([Yup.ref("password")], "Mật khẩu không khớp");
const firstName = Yup.string();
// .required("Vui lòng nhập họ và tên đệm");
const lastName = Yup.string();
// .required("Vui lòng nhập tên");
const oldpassword = Yup.string().required("Vui lòng nhập mật khẩu cũ");
const Address = Yup.string();
// .required("Vui lòng nhập địa chỉ");
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phone = Yup.string().matches(phoneRegExp, "Phone number is not valid");
// const dayOfBirth = Yup.date().min("1969-11-13", "Date is too early");
const access_token = Yup.string().required("Vui lòng nhập token");

const new_password = Yup.string().required("Vui lòng nhập mật khẩu mới");
export {
  Address,
  // dayOfBirth,
  email,
  firstName,
  lastName,
  oldpassword,
  password,
  phone,
  re_password,
  username,
  access_token,
  new_password,
};
