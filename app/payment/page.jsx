"use client";
import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import PaymentModal from "@components/Modals/PaymentModal";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { cartSelector, setLinkPayment, togglePaymentModal } from "@redux/reducers";
import { modalSelector } from "@redux/reducers/modal.reducer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VnpayPage from "./vnpay";

import { orderSelector } from "@redux/reducers/order.reducer";
import { OrderApi } from "@services/api/order.api";
import { useDispatch, useSelector } from "react-redux";
const checkout = () => {
  const router = useRouter();
  const { currentOrder } = useSelector(orderSelector);
  const { isLoading } = useSelector(cartSelector);
  const { openPaymentModal } = useSelector(modalSelector);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const dispatch = useDispatch();
  const [payment, setPayment] = useState({
    amount: currentOrder?.total,
    bankCode: '',
    language: '',
    paymentUrl: '',
  });
  const handleInputChange = (inputName, inputValue) => {
    setPayment((payment) => ({
      ...payment,
      [inputName]: inputValue,
    }));
  };


  const handlePaymentChange = (paymentOption) => {
    setSelectedPaymentOption(paymentOption);

    // Fetch order details immediately when payment option is changed
  };

  const handleSubmit = async () => {
    try {
      if (selectedPaymentOption === "PayPal") {
        await OrderApi.createPayment({ ...currentOrder, total: (currentOrder?.total / 24400)?.toFixed(2) }).then((res) => {
          console.log(currentOrder);
          dispatch(setLinkPayment(res?.data.links[1]?.href))
          dispatch(togglePaymentModal());
        });
      } else {
        await OrderApi.createPaymentVNPAY(currentOrder?._id, payment).then((res) => {
          setPayment((payment) => ({
            ...payment,
            paymentUrl: res?.data.vnpUrl,
          }));
          router.push(`${res?.data.vnpUrl}`);
        }
        );
      }
    } catch (error) {
      dispatch(setLinkPayment(""))
      toastError(err.response.data.error)
    }
  };
  return (
    currentOrder?._id ?
      <>
        <PaymentLayout>
          <section className="w-full flex flex-col gap-3 ">
            <FormPaymentMethod onPaymentChange={handlePaymentChange} />

            {/* Conditionally render VnpayPage based on the selectedPaymentOption */}
            {selectedPaymentOption === "VNPay" ? <VnpayPage order={currentOrder} payment={payment} onInputChange={handleInputChange} /> :
              selectedPaymentOption === "PayPal" ?
                <div className="container mx-auto mt-8">
                  <h1 className="text-3xl font-bold mb-4">PAYPAL Checkout</h1>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Amount:</label>
                    <input
                      disabled
                      type="text"
                      defaultValue={`${(currentOrder?.total / 24400)?.toFixed(2)} $`}
                      className="border p-2 w-full"
                    />
                  </div>
                </div> : <></>
            }

            <button
              type="submit"
              className="text-white h-12 flex-1 bg-black py-3 rounded-lg hover:bg-gray-800"
              onClick={handleSubmit}
            >
              {isLoading ? "......" : "Thanh toán"}
            </button>
          </section>
        </PaymentLayout>
        {openPaymentModal && <PaymentModal />}
      </> : <></>
  );
};

export default checkout;