import { Dialog, Transition } from "@headlessui/react";
import { closeCartSideBar, modalSelector } from "@redux/reducers/modal.reducer";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const { openCartModal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const cancelButtonRef = useRef(null);
  const onCloseModal = () => {
    dispatch(closeCartSideBar());
  };
  return (
    openCartModal && (
      //   <div className="fixed top-0 bottom-0 right-0 left-0 bg-opacity-75 bg-gray-500 z-30">
      <Transition.Root show={openCartModal} as={Fragment}>
        <Dialog
          as="div"
          className="h-screen fixed  w-[413px] top-0 bottom-0 right-0 px-[24px] py-[40px] z-50 bg-white"
          initialFocus={cancelButtonRef}
          onClose={onCloseModal}
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
          <aside>ádasdasdasd</aside>
        </Dialog>
      </Transition.Root>
      //   </div>
    )
  );
}
