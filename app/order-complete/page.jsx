"use client";

import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { cartSelector } from "@redux/reducers";
import { orderSelector } from "@redux/reducers/order.reducer";
import { OrderApi } from "@services/api/order.api";
import { toastSuccess } from "@utils/toastHelper";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderComplete = () => {
  const { items } = useSelector(cartSelector);
  const { currentOrder } = useSelector(orderSelector);
  const dispatch = useDispatch();

  const handelGetAll = useCallback(async () => {
    try {
      await OrderApi.getOrderByID(currentOrder?._id).then((res) => {
        dispatch(setOrderCurrent(res?.data));
      })
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    handelGetAll();
    toastSuccess("Bạn đã thanh toán thành công!!!!!");
  }, [])
  return (
    <PaymentLayout>
      <section className="inline-flex w-full justify-center ">
        <div className="inline-flex flex-col w-3/5 items-center bg-white rounded-md shadow-xl border p-3 mb-10">
          <div className="flex flex-col relative items-center">
            <div className="w-96 mt-7 text-center text-zinc-500 text-3xl font-medium font-['Poppins'] leading-loose">
              Thank you! 🎉
            </div>
            <div className="w-96 text-center text-zinc-800 text-4xl bold font-medium font-['Poppins'] leading-10">
              Your order has been received
            </div>
            <div className="flex w-full justify-center space-x-4 my-5">
              {items?.map((item, idx) => (
                <div key={idx} className="relative border border-black">
                  <img
                    className="object-cover"
                    src={item?.pictureLinks[0]}
                    alt=""
                    style={{ width: "70px", height: "75px" }}
                  />
                  <div className="absolute flex justify-center top-[-6px] right-[-10px] rounded-[80px] bg-black w-5 h-5 text-white">
                    <div className="">{item?.quantityInCart}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-96 h-36 justify-center items-center mt-5 gap-8 inline-flex">
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Order code: {currentOrder?._id?.substring(19, 24)}
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Date: {currentOrder?.orderDate?.substring(0, 10)}
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Total: {currentOrder?.total}
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Payment method:
                  </div>
                </div>
              </div>
              {items?.map((item) => (
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item?.id}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item?.date}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item?.total}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item?.payment_method}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-10 py-2 mt-8 mb-10 bg-neutral-900 rounded-3xl justify-center items-center gap-2 inline-flex">
              <button
                type="submit"
                className="text-center text-white text-base font-medium font-['Inter'] leading-7"
              >
                Purchase history
              </button>
            </div>
          </div>
        </div>
      </section>
    </PaymentLayout>
  );
};

export default OrderComplete;
