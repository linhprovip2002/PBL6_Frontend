"use client";
import { CONSTANTS } from "@constants/status";
import { TrashIcon } from "@heroicons/react/24/outline";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import {
  addToCart,
  cartSelector,
  decreaseQuantityProduct,
  deleteCartItem,
  toggleModal,
} from "@redux/reducers";
import { modalSelector } from "@redux/reducers/modal.reducer";
import arrayToSTring from "@utils/arrayToString";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const { items } = useSelector(cartSelector);
  const { open: openModal, modalID } = useSelector(modalSelector);
  const [productActive, setProductActive] = useState(null);
  const dispatch = useDispatch();

  const onClickAddQuantityProduct = (item) => {
    if (item.quantityInCart < item.quantity) {
      dispatch(addToCart(item));
    }
  };
  const deleteProductOutOfCart = (item) => {
    dispatch(
      toggleModal({
        status: CONSTANTS.status.WARNING,
        modalID: CONSTANTS.modalID.DELETE_PRODUCT,
        message: "Bạn có muốn xóa sản phẩm khỏi giỏ hàng ?",
      })
    );
    setProductActive(item);
  };
  const onClickDecreaseQuantityProduct = (item) => {
    if (item.quantityInCart == 1) {
      deleteProductOutOfCart(item);
    } else {
      dispatch(decreaseQuantityProduct(item));
    }
    if (!openModal) {
    }
  };
  useEffect(() => {
    if (
      modalID === CONSTANTS.modalID.DELETE_PRODUCT &&
      !openModal &&
      productActive
    ) {
      dispatch(deleteCartItem(productActive));
    }
  }, [modalID, openModal]);
  return (
    <PaymentLayout>
      <section className="w-full flex">
        <section className="w-3/5">
          <div>
            {items?.map((item) => (
              <div key={item.id} className="flex px-5 mb-12 gap-4">
                <div>
                  <Image
                    src="/assets/images/watch1.jpg"
                    width={150}
                    height={50}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-medium leading-none">
                      {item?.nameProduct}
                    </p>
                    <div>
                      <p className="m-0 text-gray-400 text-sm">
                        Color: {arrayToSTring(item?.color)}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        size: {arrayToSTring(item?.size)}
                      </p>
                      <div className="custom-number-input h-8  w-32">
                        <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent mt-1 border-solid border-2 border-neutral-500">
                          <button
                            data-action="decrement"
                            className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={() => onClickDecreaseQuantityProduct(item)}
                          >
                            <span className="m-auto text-2xl font-thin leading-none">
                              −
                            </span>
                          </button>

                          <input
                            type="text"
                            className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700  outline-none"
                            name="custom-input-number"
                            value={item?.quantityInCart}
                          ></input>
                          <button
                            data-action="increment"
                            className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            onClick={() => onClickAddQuantityProduct(item)}
                          >
                            <span className="m-auto text-2xl font-thin leading-none">
                              +
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end	">
                    <p className="text-lg font-medium  leading-none">
                      {item.price}
                    </p>
                    <div className="border-2 p-1 h-8 w-8">
                      <TrashIcon
                        onClick={() => deleteProductOutOfCart(item)}
                        className=" object-cover cursor-pointer transition-transform transform hover:scale-110 duration-5 hover:fill-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-2/5 flex justify-end">
          <div className="w-11/12 p-3 bg-zinc-100	 h-fit">
            {/* <p>Gift card or discount code</p> */}
            <div className="mb-6">
              <label
                htmlFor="gift-card"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gift card or discount code
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="gift-card"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Enter gift card or discount code"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Apply
                </button>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700"></hr>
            <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>
        </section>
      </section>
    </PaymentLayout>
  );
};

export default Home;
