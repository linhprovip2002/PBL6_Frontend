"use client";

import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { orderSelector } from "@redux/reducers/order.reducer";
import { useSelector } from "react-redux";
import { OrderApi } from "@services/api/order.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VnpayPage from "./vnpay";


const Checkout = () => {
  const router = useRouter();
  const { currentOrder } = useSelector(orderSelector);
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
          Thanh toán
        </button>
      </section>
    </PaymentLayout>
  );
};

export default Checkout;