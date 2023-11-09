import * as Yup from 'yup';

const username = Yup.string().required('Vui lòng nhập tài khoản');

const email = Yup.string()
  .required('Vui lòng nhập Email')
  .email('Vui lòng nhập một email');

const password = Yup.string().required('Vui lòng nhập mật khẩu');

const re_password = Yup.string()
  .required('Vui lòng nhập lại mật khẩu')
  .oneOf([Yup.ref('password')], 'Mật khẩu không khớp');

export {email, password, username, re_password};
