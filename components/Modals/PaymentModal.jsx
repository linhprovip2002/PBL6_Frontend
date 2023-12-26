import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { cartSelector } from "@redux/reducers";
import { closePaymentModal, modalSelector } from "@redux/reducers/modal.reducer";
import { orderSelector } from "@redux/reducers/order.reducer";
import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaymentModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { openPaymentModal } = useSelector(modalSelector);
  const { linkPayment } = useSelector(cartSelector);
  const { currentOrder } = useSelector(orderSelector);

  // const onAccept = () => {
  //     if (modalID == CONSTANTS.modalID.MODAL_NOT_LOGIN) {
  //       router.push("/login", { scroll: true });
  //     } else if (modalID == CONSTANTS.modalID.NAVIGATE_TO_HOMEPAGE) {
  //       router.push("/", { scroll: true });
  //     }
  //     dispatch(closeModal());
  //   };

  const onResetModal = () => {
    dispatch(closePaymentModal());
  };
  const onPayment = () => {
    onResetModal();
    window.open(linkPayment, "_self");
  }
  // const interval = setInterval(() => {
  //   handelGetAll();
  // }, 5000);
  // const handelGetAll = useCallback(async () => {
  //   try {
  //     await OrderApi.getOrderByUserID().then((res) => {
  //       const orderComplete = res?.data.find(order => order?._id === currentOrder?._id);
  //       if (orderComplete?.statusOrder === STATUS_ORDER.PAYMENT_SUCCESS) {
  //         onResetModal();
  //         clearInterval(interval)
  //         // dispatch(setOrderCurrent(null));
  //         // router.push("/order-complete");
  //         toastSuccess("Bạn đã thanh toán thành công!!!!!");
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={openPaymentModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        style={{ zIndex: "1000" }}
        initialFocus={cancelButtonRef}
        onClose={onResetModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative min-h-[250px] flex  flex-col gap-1 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <XCircleIcon
                  onClick={() => {
                    onResetModal();
                  }}
                  className="absolute h-9 w-9 right-5 top-5 object-cover cursor-pointer transition-transform transform hover:scale-110 ease-out duration-500  "
                />
                <h3>{currentOrder?.feedbackSupplier}</h3>
                <button
                  // target="_blank"
                  type="submit"
                  onClick={onPayment}
                  className="font-medium border-slate-950 border-2 hover:text-white my-2 hover:bg-[#141718] hover:-translate-y-1 hover:scale-110 rounded-md py-3 px-10 text-center cursor-pointer transition ease-out duration-500"
                >
                  Thanh toán bằng Paypal
                </button >
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default PaymentModal;