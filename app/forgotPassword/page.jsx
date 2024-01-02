"use client";

import { logout } from "@redux/reducers";
import { AuthApi } from "@services/api";

import { ForgotPassSchema, RegisterSchema } from "@services/validators";
import { deleteToken } from "@utils/LocalStorageHandle";
import { toastError, toastSuccess } from "@utils/toastHelper";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = useCallback(async (data) => {
    try {
      setIsLoading(true);
      const res = await AuthApi.forgotPassword({
        email: data.email,
      });
      toastSuccess("Tin nhắn đã được gửi đến email, vui lòng kiểm tra");
      router.push("/newPassword", { scroll: true });
    } catch (error) {
      toastError("Nhập email sai, vui lòng nhập lại.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
    validationSchema: ForgotPassSchema,
  });

  useEffect(() => {
    dispatch(logout());
    deleteToken();
  }, []);

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community{" "}
          </p>
        </div>
        <img
          src={"assets/images/slide2.jpg"}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="w-1/2 h-full flex flex-col p-20 items-center gap-7  z-10">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col w-[500px]"
        >
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Quên mật khẩu</h3>
            <div className="flex flex-row gap-1 ">
              <p className="text-base mb-2">Điền email của bạn dưới đây để cấp lại mật khẩu</p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur("email")}
                onChange={formik.handleChange}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              {formik.errors.email && (
                <span className="text-red-500">{formik.errors.email}</span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full text-white my-2 font-semibold bg-[#141718] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Gửi"
              )}
            </button>
          </div>
        </form>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#141718]">
            <Link href="/signup">Chưa có tài khoản? </Link>
            <span className="font-semibold underline underline-offset"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
