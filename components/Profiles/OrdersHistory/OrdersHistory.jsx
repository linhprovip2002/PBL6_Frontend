import { STATUS_ORDER } from "@constants/status";
import {
  getOrderListSuccess,
  orderSelector,
  setOrderCurrent,
} from "@redux/reducers/order.reducer";
import { OrderApi } from "@services/api/order.api";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OrdersHistory.module.scss";

export const OrdersHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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
  const handlePayment = (order) => {
    dispatch(setOrderCurrent(order));
    router.push("/payment");
  };
  useEffect(() => {
    handelGetAll();
  }, [router]);

  const { orderList } = useSelector(orderSelector);

  return (
    <div className="flex gap-10 flex-col items-start pl-16">
      <div
        className={classNames(styles.form, "inline-flex flex-col gap-6 w-full")}
      >
        <div className={styles["text-wrapper"]}>Orders History</div>
        <table className="table-auto h-[528px]">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Ngày mua</th>
              <th>Trạng thái</th>
              {/* <th>Địa chỉ</th> */}
              <th>Phản hồi</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody style={{ overflowX: "unset", overflowY: "scroll" }}>
            {orderList.map((orderListItem) => (
              <tr key={orderListItem._id}>
                <td>{orderListItem?._id.substring(19, 24)}</td>
                <td>{orderListItem?.orderDate.substring(0, 10)}</td>
                <td
                  className={`${[STATUS_ORDER.ACCEPTED, STATUS_ORDER.PAYMENT_SUCCESS].includes(orderListItem?.statusOrder)
                    ? "text-green-500"
                    : [STATUS_ORDER.REJECTED, STATUS_ORDER.PENDING].includes(orderListItem?.statusOrder)
                      ? "text-red-500"
                      : ""
                    }`}
                >
                  {orderListItem?.statusOrder}
                </td>
                {/* <td>{orderListItem.ShipAddress}</td> */}
                <td>{orderListItem?.feedbackSupplier}</td>
                <td className="flex justify-around">
                  <button
                    type="button"
                    className={`w-[6.25rem] ${[STATUS_ORDER.ACCEPTED, STATUS_ORDER.PAYMENT_SUCCESS].includes(orderListItem?.statusOrder)
                      ? "bg-green-600"
                      : [STATUS_ORDER.REJECTED, STATUS_ORDER.PENDING].includes(orderListItem?.statusOrder) ? "bg-yellow-600" : ""} px-2 py-2 text-white rounded-md`}
                    onClick={() => orderListItem?.statusOrder === STATUS_ORDER.ACCEPTED && handlePayment(orderListItem)}
                  >
                    {orderListItem?.statusOrder === STATUS_ORDER.ACCEPTED
                      ? "Thanh toán"
                      : orderListItem?.statusOrder === STATUS_ORDER.REJECTED
                        ? "Đã hủy"
                        : orderListItem?.statusOrder === STATUS_ORDER.PENDING ? "Đang chờ"
                          : orderListItem?.statusOrder === STATUS_ORDER.PAYMENT_SUCCESS ? "Xem" : ""
                    }
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 px-2 py-2 text-white rounded-md"
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersHistory;
