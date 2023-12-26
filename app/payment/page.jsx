"use client";
import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import PaymentModal from "@components/Modals/PaymentModal";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { cartSelector, setLinkPayment, setLoading, togglePaymentModal } from "@redux/reducers";
import { modalSelector } from "@redux/reducers/modal.reducer";
import { orderSelector } from "@redux/reducers/order.reducer";
import { OrderApi } from "@services/api/order.api";
import { toastError } from "@utils/toastHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VnpayPage from "./vnpay";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const checkout = () => {
  const router = useRouter();
  const { currentOrder } = useSelector(orderSelector);
  const { isLoading } = useSelector(cartSelector);
  const { openPaymentModal } = useSelector(modalSelector);
  const [order, setOrder] = useState(currentOrder);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [amount] = useState(order.IDProduct[0].price * order.IDProduct[0].quantity);
  // const [bankCode, setBankCode] = useState('');
  // const [language, setLanguage] = useState('vn');
  // const [paymentUrl, setPaymentUrl] = useState('');

  const [ payment, setPayment ] = useState({
    amount: order.IDProduct[0].price * order.IDProduct[0].quantity,
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

  async function getOrderDetail(orderId) {
    try {
      const res = await OrderApi.getOrderDetail(orderId);
      console.log(res);
      if (res?.data) {
        setOrder(res.data); 
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  }

  const handlePaymentChange = (paymentOption) => {
    setSelectedPaymentOption(paymentOption);

    // Fetch order details immediately when payment option is changed
    if (currentOrder?._id) {
      getOrderDetail(currentOrder._id);
    }
  };

  const handleSubmit = async () => {
    console.log("Selected Payment Option:", selectedPaymentOption);

    if (selectedPaymentOption === "PayPal") {
      await OrderApi.createPayment(currentOrder?._id).then((res) => {
        router.push(`${res?.data.links[1]?.href}`);
        dispatch(togglePaymentModal());
      });
    } else {
      await OrderApi.createPaymentVNPAY(currentOrder?._id, payment).then((res) => {
        setPayment((payment) => ({
          ...payment,
          paymentUrl: res?.data.vnpUrl,
        }));
        console.log('aaaaaaaaaaa+ ' + res?.data.vnpUrl);
        router.push(`${res?.data.vnpUrl}`);
      }
      );
    }
  };

  return (
       currentOrder?._id ?
    <>
    <PaymentLayout>
      <section className="w-full flex flex-col gap-3 ">
        <FormPaymentMethod onPaymentChange={handlePaymentChange} />

        {/* Conditionally render VnpayPage based on the selectedPaymentOption */}
        {selectedPaymentOption === "VNPay" && <VnpayPage order={order} payment= {payment} onInputChange={handleInputChange}/>}

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
    </>: <></>
  );
};

export default Checkout;