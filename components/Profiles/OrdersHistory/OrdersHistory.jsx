import classNames from "classnames";
import styles from "./OrdersHistory.module.scss";

export const OrdersHistory = () => {
  const user = "user";

  return (
    <div className="flex gap-10 flex-col items-start px-16">
      <div className={classNames(styles.form, "inline-flex flex-col gap-6")}>
        <div className={styles["text-wrapper"]}>Orders History</div>
        {user === "supplier" ? (
          <>
            <table className="table-fixed">
              <thead>
                <tr>
                  <th>Mã số đặt hàng</th>
                  <th>Ngày</th>
                  <th>Sản phẩm</th>
                  <th>Tổng giá</th>
                  <th>Chấp nhận</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#3456_768</td>
                  <td>October 17, 2023</td>
                  <td>A12, B13, C14</td>
                  <td>$1234.00</td>
                  <td><button type="button" className="bg-blue-800 text-white hover:bg-blue-900 px-2 py-2 rounded-md">Chấp nhận</button></td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table className="table-fixed">
              <thead>
                <tr>
                  <th>Mã số đặt hàng</th>
                  <th>Ngày mua</th>
                  <th>Trạng thái</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#3456_768</td>
                  <td>October 17, 2023</td>
                  <td>Delivered</td>
                  <td>$1234.00</td>
                </tr>
                <tr>
                  <td>#3456_768</td>
                  <td>October 17, 2023</td>
                  <td>Delivered</td>
                  <td>$1234.00</td>
                </tr>
                <tr>
                  <td>#3456_768</td>
                  <td>October 17, 2023</td>
                  <td>Delivered</td>
                  <td>$1234.00</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {/* <div className="content">
        <div className="navbar">
          <div className="div">Number ID</div>
          <div className="text-wrapper-2">Dates</div>
          <div className="text-wrapper-2">Status</div>
          <div className="text-wrapper-3">Price</div>
        </div>
        <div className="navbar-2">
          <div className="text-wrapper-4">#3456_768</div>
          <div className="text-wrapper-5">October 17, 2023</div>
          <div className="text-wrapper-5">Delivered</div>
          <div className="text-wrapper-6">$1234.00</div>
        </div>
        <div className="navbar-2">
          <div className="text-wrapper-4">#3456_980</div>
          <div className="text-wrapper-5">October 11, 2023</div>
          <div className="text-wrapper-5">Delivered</div>
          <div className="text-wrapper-6">$345.00</div>
        </div>
        <div className="navbar-2">
          <div className="text-wrapper-4">#3456_120</div>
          <div className="text-wrapper-5">August 24, 2023</div>
          <div className="text-wrapper-5">Delivered</div>
          <div className="text-wrapper-6">$2345.00</div>
        </div>
        <div className="navbar-2">
          <div className="text-wrapper-4">#3456_030</div>
          <div className="text-wrapper-5">August 12, 2023</div>
          <div className="text-wrapper-5">Delivered</div>
          <div className="text-wrapper-6">$845.00</div>
        </div>
      </div> */}
      </div>
    </div>
  );
};
export default OrdersHistory;
