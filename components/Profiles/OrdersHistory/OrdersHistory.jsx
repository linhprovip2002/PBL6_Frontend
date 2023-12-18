import classNames from "classnames";
import styles from "./OrdersHistory.module.scss";
import {
  getOrderListSuccess,
  orderSelector,
} from "@redux/reducers/order.reducer";
import { useDispatch, useSelector } from "react-redux";
import { OrderApi } from "@services/api/order.api";
import { useCallback, useEffect } from "react";

export const OrdersHistory = () => {
  const user = "user";

  const dispatch = useDispatch();

  const handelGetAll = useCallback(async () => {
    try {
      const res = await OrderApi.getOrderByUserID();
      dispatch(
        getOrderListSuccess({
          orders: res.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handelGetAll();
  }, []);

  const { orderList } = useSelector(orderSelector);

  console.log(orderList);

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
                  <td>
                    <button
                      type="button"
                      className="bg-blue-800 text-white hover:bg-blue-900 px-2 py-2 rounded-md"
                    >
                      Chấp nhận
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Ngày mua</th>
                  <th>Trạng thái</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((orderListItem) => (
                  <tr key={orderListItem._id}>
                    <td>{orderListItem._id}</td>
                    <td>{orderListItem.orderDate.substring(0, 10)}</td>
                    <td>{orderListItem.statusOrder}</td>
                    <td>{orderListItem.ShipAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
export default OrdersHistory;
