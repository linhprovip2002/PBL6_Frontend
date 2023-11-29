"use client";
import AccountDetails from "@components/Profiles/AccountDetails/AccountDetails";
import OrdersHistory from "@components/Profiles/OrdersHistory/OrdersHistory";
import { authSelector } from "@redux/reducers";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";

const Profile = () => {
  const { user } = useSelector(authSelector);
  const [current, setCurrent] = useState("Account");
  const navList = ["Account", "Address", "Orders", "Wishlist", "Log out"];
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

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
            <div className="mx-auto w-20 h-20 text-center ">
              <div className="relative w-full h-full">
                <img
                  className="rounded-full absolute"
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
                <label
                  htmlFor="file-input"
                  className="group w-full h-full p-5 hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
                >
                  <img
                    className="invisible group-hover:visible"
                    src="https://www.svgrepo.com/show/33565/upload.svg"
                    alt=""
                  />
                  <input type="file" id="file-input" />
                </label>
              </div>
            </div>
            <p className={styles.username}>{user?.userName}</p>
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
          {current === "Account" ? (
            <AccountDetails />
          ) : current === "Orders" ? (
            <OrdersHistory />
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
