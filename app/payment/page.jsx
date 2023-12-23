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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const checkout = () => {
  const router = useRouter();

  const { currentOrder } = useSelector(orderSelector);
  const { isLoading } = useSelector(cartSelector);
  const { openPaymentModal } = useSelector(modalSelector);

  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      dispatch(setLoading())
      await OrderApi.createPayment(currentOrder?._id).then((res) => {
        dispatch(setLinkPayment(res?.data.links[1]?.href))
        // window.open(`${res?.data.links[1]?.href}`, '_blank');
        dispatch(togglePaymentModal());
      });
    } catch (err) {
      dispatch(setLinkPayment(""))
      toastError(err.response.data.error)
    }
  };
  useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, [])
  return (
    currentOrder?._id ?
      <>
        <PaymentLayout>
          <section className="w-full flex flex-col gap-3 ">
            <FormPaymentMethod />
            <button
              type="submit"
              class="text-white h-12 flex-1 bg-black py-3 rounded-lg hover:bg-gray-800"
              onClick={handleSubmit}
            >
              {isLoading ? "......" : "Thanh toán"}
            </button>
          </section>
        </PaymentLayout>
        {openPaymentModal && <PaymentModal />}


      </>
      : <></>
  );
};

export default checkout;
