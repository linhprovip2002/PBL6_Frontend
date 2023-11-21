import { paymentStatus } from "@utils/data";
import classNames from "classnames";
import styles from "./PaymentStatus.module.scss";

const PaymentStatus = ({ statusActive }) => {
  return (
    <section className=" mt-32">
      <div className={styles.psContainer}>
        <p className={styles.psTitle}>{statusActive.title}</p>
        <div className={styles.psProgress}>
          {paymentStatus.map((item) => (
            <div id={item.id} className={styles.psItem}>
              <div
                className={classNames(styles.item, {
                  [styles.itemActive]: item.id === statusActive.id,
                })}
              >
                <div
                  className={classNames(styles.statusNum, {
                    [styles.active]: item.id === statusActive.id,
                    [styles.inActive]: item.id !== statusActive.id,
                    [styles.done]: item.id < statusActive.id,
                  })}
                >
                  <p>
                    {item.id < statusActive.id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      item.id
                    )}
                  </p>
                </div>
                <p
                  className={classNames({
                    [styles.descriptionActive]: item.id === statusActive.id,
                    [styles.descriptionInActive]: item.id !== statusActive.id,
                    [styles.descriptionDone]: item.id < statusActive.id,
                  })}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentStatus;
