import { STATUS_ORDER } from "@constants/status";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import {
  getOrderListSuccess,
  orderSelector,
  setOrderCurrent,
} from "@redux/reducers/order.reducer";
import { OrderApi } from "@services/api/order.api";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OrdersHistory.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const OrdersHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const [productImage, setProductImage] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = (orderNew, productNew, productImageNew) => {
    setOpen(true);
    setOrder(orderNew);
    setProduct(productNew[0]);
    setProductImage(productImageNew[0]);
  };
  const handleClose = () => {
    setOpen(false);
    setOrder(null);
    setProduct(null);
    setProductImage(null);
  };

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
                  className={`${[
                      STATUS_ORDER.ACCEPTED,
                      STATUS_ORDER.PAYMENT_SUCCESS,
                    ].includes(orderListItem?.statusOrder)
                      ? "text-green-500"
                      : [
                        STATUS_ORDER.REJECTED,
                        STATUS_ORDER.PENDING,
                      ].includes(orderListItem?.statusOrder)
                        ? "text-red-500"
                        : ""
                    }`}
                >
                  {orderListItem?.statusOrder}
                </td>
                <td>{orderListItem?.feedbackSupplier}</td>
                <td className="flex justify-around">
                  <button
                    type="button"
                    className={`w-[6.25rem] ${[
                        STATUS_ORDER.ACCEPTED,
                        STATUS_ORDER.PAYMENT_SUCCESS,
                      ].includes(orderListItem?.statusOrder)
                        ? "bg-green-600"
                        : [
                          STATUS_ORDER.REJECTED,
                          STATUS_ORDER.PENDING,
                        ].includes(orderListItem?.statusOrder)
                          ? "bg-yellow-600"
                          : ""
                      } px-2 py-2 text-white rounded-md`}
                    onClick={() =>
                      orderListItem?.statusOrder === STATUS_ORDER.ACCEPTED
                        ? handlePayment(orderListItem)
                        : orderListItem.statusOrder === "PAYMENT_SUCCESS"
                          ? handleOpen(
                            orderListItem,
                            orderListItem?.IDProduct,
                            orderListItem?.IDProduct[0]?.pictureLinks
                          )
                          : null
                    }
                    disabled={[
                      STATUS_ORDER.REJECTED,
                      STATUS_ORDER.PENDING,
                    ].includes(orderListItem?.statusOrder)}
                  >
                    {orderListItem?.statusOrder === STATUS_ORDER.ACCEPTED
                      ? "Thanh toán"
                      : orderListItem?.statusOrder === STATUS_ORDER.REJECTED
                        ? "Đã hủy"
                        : orderListItem?.statusOrder === STATUS_ORDER.PENDING
                          ? "Đang chờ"
                          : orderListItem?.statusOrder ===
                            STATUS_ORDER.PAYMENT_SUCCESS
                            ? "Xem"
                            : ""}
                  </button>
                </td>
              </tr>
            ))}
            <>
              <div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h3"
                    >
                      Sản phẩm đã thanh toán
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                      {JSON.stringify(product) != {} && (
                        <>
                          <div className="flex">
                            <img src={productImage} width={160} height={70} />
                            <div className="ml-5">
                              <p className="text-lg font-semibold">
                                {product?.nameProduct}
                              </p>
                              <p className="flex mt-2">
                                <p className="font-semibold">Loại: </p> &nbsp;
                                {product?.type}
                              </p>
                              <p className="flex mt-2">
                                <p className="font-semibold">Giá: </p> &nbsp;
                                {product?.price}
                              </p>
                              <p className="flex mt-2">
                                <p className="font-semibold">Điểm đến: </p>{" "}
                                &nbsp;
                                {order?.ShipAddress}
                              </p>
                              <p className="flex mt-2">
                                <p className="font-semibold">Mô tả: </p> &nbsp;
                                {order?.description}
                              </p>
                              <p className="flex mt-2">
                                <p className="font-semibold">Ngày mua: </p>{" "}
                                &nbsp;
                                {order?.createdAt?.substring(0, 10)}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersHistory;
