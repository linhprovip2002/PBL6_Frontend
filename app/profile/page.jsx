"use client";
import AccountDetails from "@components/Profiles/AccountDetails/AccountDetails";
import OrdersHistory from "@components/Profiles/OrdersHistory/OrdersHistory";
import { authSelector, setUser } from "@redux/reducers";
import { AuthApi } from "@services/api";
import { toastError, toastSuccess } from "@utils/toastHelper";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.scss";
import SupplierChanel from "@components/Profiles/SupplierChanel/SupplierChanel";
import { deleteToken } from "@utils/LocalStorageHandle";

const Profile = () => {
  const { user } = useSelector(authSelector);
  const dispatch = useDispatch();

  const [current, setCurrent] = useState("Supplier chanel");
  const navList = [
    "Account",
    "Address",
    "Orders",
    "Wishlist",
    "Supplier chanel",
    "Log out",
  ];
  const [isLoading, setIsLoading] = useState(false);
  const uploadImage = async (event) => {
    const file = event.target.files[0];
    setIsLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      await AuthApi.updateMe(user?._id, {
        profilePicture: res.url,
      }).then(async () => {
        const user = await AuthApi.getProfile();
        dispatch(setUser(user?.data));
        toastSuccess("Cập nhật avatar thành công");
      });
      setIsLoading(false);
    } catch (error) {
      toastError("Có gì đó sai. Vui lòng thử lại.");
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full pb-20 mt-32">
      <div className={styles.profileHeader}>
        <p className={styles.profileTitle}>My Account</p>
      </div>
      <div className="flex items-start gap-2">
        <div
          className={classNames(
            styles.userNav,
            "w-1/4 px-4 py-10 flex flex-col items-center gap-10"
          )}
        >
          <div className="flex flex-col gap-1.5">
            <div className="mx-auto w-20 h-20 text-center rounded">
              <div className="relative w-full h-full">
                {isLoading ? (
                  <div
                    className="absolute w-full h-full flex items-center justify-center"
                    role="status"
                  >
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
                  <img
                    className="w-full h-full absolute rounded-full"
                    src={
                      user?.profilePicture
                        ? user?.profilePicture
                        : "/assets/images/avatar-default-circle.png"
                    }
                    alt=""
                  />
                )}
                {!isLoading && (
                  <label
                    htmlFor="file-input"
                    className="group w-full h-full p-5 hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
                  >
                    <img
                      className="invisible group-hover:visible"
                      src="https://www.svgrepo.com/show/33565/upload.svg"
                      alt=""
                    />
                    <input
                      type="file"
                      id="file-input"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                )}
              </div>
            </div>
            <p className={styles.username}>{user?.account?.userName}</p>
          </div>
          <div className="flex flex-col items-start gap-3 w-full px-4">
            {navList.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrent(item);
                }}
                className={classNames(
                  styles.navItem,
                  "w-full flex flex-col py-2 items-start cursor-pointer",
                  {
                    [styles.active]: item === current,
                  }
                )}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4">
          {current === "Supplier chanel" ? (
            <SupplierChanel />
          ) : current === "Account" ? (
            <AccountDetails />
          ) : current === "Orders" ? (
            <OrdersHistory />
          ) : current === "Log out" ? (
            <>
              <div
                className="flex justify-center place-items-center bg-slate-200 rounded-lg border border-black shadow-lg"
                style={{ height: "550px" }}
              >
                <div>
                  <button
                    type="button"
                    className="bg-black rounded-lg py-5 px-5 text-white text-xl hover:bg-gray-600 shadow-lg"
                    onClick={() => {
                      deleteToken();
                      dispatch(logout());
                      dispatch(clearCartLogout());
                      handleLinkTo("/login");
                      setOpen(false);
                    }}
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
