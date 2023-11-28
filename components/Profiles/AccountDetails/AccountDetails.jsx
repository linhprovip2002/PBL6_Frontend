import { authSelector, setUser } from "@redux/reducers";
import { AuthApi } from "@services/api";
import { UpdateProfileSchema } from "@services/validators";
import { formatDate } from "@utils/getDateFromString";
import { toastError, toastSuccess } from "@utils/toastHelper";
import classNames from "classnames";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AccountDetails.module.scss";

const AccountDetails = () => {
  const { user } = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = useCallback(async (data) => {
    try {
      if (user._id) {
        setIsLoading(true);
        console.log(data);
        const res = await AuthApi.updateMe(user?._id, {
          firstName: data.firstName,
          lastName: data.lastName,
          Address: data.Address,
          phone: data.phone,
          gender: data.gender,
          dayOfBirth: data.dayOfBirth,
        }).then(async () => {
          const user = await AuthApi.getProfile();
          dispatch(setUser(user?.data));
        });
        toastSuccess("Cập nhật tài khoản thành công");
        // router.push("/login", { scroll: true });
        // }
      }
    } catch (error) {
      toastError("Có gì đó sai. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      // username: user?.account?.userName,
      // email: user?.account?.email,
      // password: "",
      // re_password: "",
      Address: user?.Address || "",
      phone: user?.phone || "",
      gender: user?.gender,
      dayOfBirth: user?.dayOfBirth,
    },
    onSubmit: handleSubmit,
    validationSchema: UpdateProfileSchema,
  });
  console.log(formik.values.dayOfBirth);
  console.log(formatDate(formik.values.dayOfBirth));

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex gap-10 flex-col items-start px-16"
    >
      <div className={classNames(styles.form, "inline-flex flex-col gap-6")}>
        <div className={styles["text-wrapper"]}>Account Details</div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-1">
            FIRST NAME *
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-1"
              placeholder="First name"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onBlur={formik.handleBlur("firstName")}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <span
                className="text-red-500	
"
              >
                {formik.errors.firstName}
              </span>
            )}
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-2">
            LAST NAME *
          </label>
          <div className={styles.input}>
            <input
              name="lastName"
              className={styles["icon-input"]}
              id="input-2"
              placeholder="Last name"
              type="text"
              value={formik.values.lastName}
              onBlur={formik.handleBlur("lastName")}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && (
              <span
                className="text-red-500	
"
              >
                {formik.errors.lastName}
              </span>
            )}
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles["display-name"]}>DISPLAY NAME *</div>
          <div className={styles.input}>
            <input
              className={classNames(styles["icon-input"], styles["disabled"])}
              placeholder="Display name"
              type="text"
              value={user?.account?.userName}
              disabled
            />
          </div>
          <p className={styles.p}>
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-3">
            EMAIL *
          </label>
          <div className={styles.input}>
            <input
              className={classNames(styles["icon-input"], styles["disabled"])}
              id="input-3"
              placeholder="Email"
              type="email"
              value={user?.account?.email}
              disabled
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-4">
            PHONE NUMBER *
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-4"
              placeholder="Phone Number"
              type="number"
              name="phone"
              value={formik.values.phone}
              onBlur={formik.handleBlur("phone")}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && (
              <span
                className="text-red-500	
"
              >
                {formik.errors.phone}
              </span>
            )}
          </div>
        </div>

        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-5">
            ADDRESS *
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-5"
              placeholder="Địa chỉ"
              name="Address"
              type="text"
              value={formik.values.Address}
              onBlur={formik.handleBlur("Address")}
              onChange={formik.handleChange}
            />
            {formik.errors.Address && (
              <span
                className="text-red-500	
"
              >
                {formik.errors.Address}
              </span>
            )}
          </div>
          <div
            className={styles.name}
            style={{ flexDirection: "row", gap: "5rem" }}
          >
            <div>
              <label className={styles.div} htmlFor="input-9">
                GIỚI TÍNH
              </label>
              <select
                name="gender"
                value={formik.values.gender}
                onBlur={formik.handleBlur("gender")}
                onChange={formik.handleChange}
                id="input-9"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" label="Select a color">
                  Select a color{" "}
                </option>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </select>
            </div>
            <div>
              <label className={styles.div} htmlFor="input-10">
                DATE OF BIRTH
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="input-10"
                  name="dayOfBirth"
                  type="date"
                  value={formatDate(formik.values.dayOfBirth)}
                  onBlur={formik.handleBlur("dayOfBirth")}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.form, "inline-flex flex-col gap-6")}>
        <div className={styles["text-wrapper"]}>Password</div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-6">
            OLD PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-6"
              placeholder="Old password"
              type="text"
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-7">
            NEW PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-7"
              placeholder="New password"
              type="text"
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-8">
            REPEAT NEW PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-8"
              placeholder="Repeat new password"
              type="text"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-fit text-white my-2 bg-[#141718] hover:-translate-y-1 hover:scale-110 rounded-md py-3 px-10 text-center cursor-pointer transition ease-out duration-500"
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
            "Save Changes"
          )}
        </button>
      </div>
    </form>
  );
};

export default AccountDetails;
