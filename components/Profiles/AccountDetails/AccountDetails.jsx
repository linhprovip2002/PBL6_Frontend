import { authSelector } from "@redux/reducers";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./AccountDetails.module.scss";

const AccountDetails = () => {
  const userProfile = useSelector(authSelector);
  return (
    <form className="flex gap-10 flex-col items-start px-16">
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
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-2">
            LAST NAME *
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-2"
              placeholder="Last name"
              type="text"
            />
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles["display-name"]}>DISPLAY NAME *</div>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              placeholder="Display name"
              type="text"
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
              className={styles["icon-input"]}
              id="input-3"
              placeholder="Email"
              type="email"
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles.form, "inline-flex flex-col gap-6")}>
        <div className={styles["text-wrapper"]}>Password</div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-4">
            OLD PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-4"
              placeholder="Old password"
              type="text"
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-5">
            NEW PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-5"
              placeholder="New password"
              type="text"
            />
          </div>
        </div>
        <div className={styles.name}>
          <label className={styles.div} htmlFor="input-6">
            REPEAT NEW PASSWORD
          </label>
          <div className={styles.input}>
            <input
              className={styles["icon-input"]}
              id="input-6"
              placeholder="Repeat new password"
              type="text"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-fit text-white my-2 bg-[#141718] hover:-translate-y-1 hover:scale-110 rounded-md py-3 px-10 text-center cursor-pointer transition ease-out duration-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AccountDetails;
