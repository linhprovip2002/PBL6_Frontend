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

        <table className="table-auto">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Ngày mua</th>
              <th>Trạng thái</th>
              <th>Địa chỉ</th>
              <th>Phản hồi từ nhà cung cấp</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((orderListItem) => (
              <tr key={orderListItem._id}>
                <td>{orderListItem._id.substring(19,24)}</td>
                <td>{orderListItem.orderDate.substring(0, 10)}</td>
                <td>{orderListItem.statusOrder}</td>
                <td>{orderListItem.ShipAddress}</td>
                <td></td>
                <td><button type="button" className="bg-red-600 px-2 py-2 text-white rounded-md">Hủy</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersHistory;
