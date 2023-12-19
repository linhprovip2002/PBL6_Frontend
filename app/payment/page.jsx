"use client";

import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { orderSelector } from "@redux/reducers/order.reducer";
import { useSelector } from "react-redux";
import { OrderApi } from "@services/api/order.api";
import { useRouter } from "next/navigation";
const checkout = () => {
  const router = useRouter();

  const { currentOrder } = useSelector(orderSelector);
  const handleSubmit = async () => {
    await OrderApi.createPayment(currentOrder?._id).then((res) => {
      router.push(`${res?.data.links[1]?.href}`);
    });
  };
  return (
    <PaymentLayout>
      <section className="w-full flex flex-col gap-3 ">
        <FormPaymentMethod />
        <button
          type="submit"
          class="text-white h-12 flex-1 bg-black py-3 rounded-lg hover:bg-gray-800"
          onClick={handleSubmit}
        >
          Thanh toán
        </button>
      </section>
    </PaymentLayout>
  );
};

export default checkout;
