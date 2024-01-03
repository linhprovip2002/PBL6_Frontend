"use client";
import styles from "@app/cart/page.module.scss";
import { RadioButton } from "@components/RadioButton/RadioButton";
import { CONSTANTS } from "@constants/status";
import { TrashIcon } from "@heroicons/react/24/outline";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import {
  addToCart,
  authSelector,
  cartSelector,
  decreaseQuantityProduct,
  deleteCartItem,
  selectColorSize,
  toggleModal,
  updateCart,
} from "@redux/reducers";
import { modalSelector } from "@redux/reducers/modal.reducer";
import { ProductApi } from "@services/api/product.api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const { items } = useSelector(cartSelector);
  const { user, loggedin } = useSelector(authSelector);
  const { open: openModal, modalID } = useSelector(modalSelector);
  const [productActive, setProductActive] = useState(null);
  const [optionDiscount, setOptionDiscount] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const onClickAddQuantityProduct = (item) => {
    if (item.quantityInCart < item.quantity) {
      dispatch(addToCart(item));
    }
  };
  const deleteProductOutOfCart = (item) => {
    dispatch(
      toggleModal({
        status: CONSTANTS.status.WARNING,
        modalID: CONSTANTS.modalID.MODAL_DELETE_PRODUCT,
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
  const onClickPayment = () => {
    if (items?.length === 0) {
      return dispatch(
        toggleModal({
          status: CONSTANTS.status.WARNING,
          modalID: CONSTANTS.modalID.NAVIGATE_TO_HOMEPAGE,
          message: "Hình như bạn chưa chọn sản phẩm ?",
        })
      );
    }
    if (user?._id && loggedin) {
      router.push("/checkout");
    } else {
      dispatch(
        toggleModal({
          status: CONSTANTS.status.WARNING,
          modalID: CONSTANTS.modalID.MODAL_NOT_LOGIN,
          message: "Hình như bạn chưa đăng nhập ?",
        })
      );
    }
  };
  useEffect(() => {
    if (
      modalID === CONSTANTS.modalID.MODAL_DELETE_PRODUCT &&
      !openModal &&
      productActive
    ) {
      dispatch(deleteCartItem(productActive));
    }
  }, [modalID, openModal]);

  const fetchDiscount = async () => {
    let newItems = await Promise.all(
      items?.map(async (item) => {
        const discount = await ProductApi.getDiscountProduct(item?._id);
        if (discount?.data.length !== 0) {
          return { ...item, discount: discount?.data[0]?.discount };
        } else {
          return { ...item };
        }
      })
    );
    dispatch(updateCart(newItems));
  };
  useEffect(() => {
    if (items.lenght !== 0) {
      fetchDiscount();
    }
  }, [items.lenght]);
  return (
    <PaymentLayout>
      <section className="w-full flex">
        <section className="w-3/5">
          <div className="flex flex-col gap-5">
            {items?.map((item) => (
              <div key={item?.id} className="flex px-5 mb-12 gap-4">
                <div className="flex items-center">
                  <img
                    className="object-cover w-40 h-40"
                    src={item?.pictureLinks[0]}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="text-lg h-6 truncate w-64  font-medium leading-none">
                      {item?.nameProduct}
                    </p>
                    <div>
                      <div className="flex flex-col gap-2 my-3 w-28">
                        <select
                          onChange={(e) => {
                            dispatch(
                              selectColorSize({
                                ...item,
                                colorPick: e?.target.value,
                                sizePick: item?.colorPick,
                              })
                            );
                          }}
                          defaultValue={item?.colorPick}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4"
                        >
                          {(() => {
                            const options = [];
                            for (let i = 0; i < item?.color.length; i++) {
                              options.push(
                                <option key={i} value={item?.color[i]}>
                                  {item?.color[i]}
                                </option>
                              );
                            }
                            return options;
                          })()}
                        </select>
                        <select
                          onChange={(e) => {
                            dispatch(
                              selectColorSize({
                                ...item,
                                colorPick: item?.colorPick,
                                sizePick: e?.target.value,
                              })
                            );
                          }}
                          defaultValue={item?.sizePick}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4"
                        >
                          {(() => {
                            const options = [];
                            for (let i = 0; i < item?.size.length; i++) {
                              options.push(
                                <option key={i} value={item?.size[i]}>
                                  {item?.size[i]}
                                </option>
                              );
                            }
                            return options;
                          })()}
                        </select>
                      </div>
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
                      {item?.discount ? (
                        <div className="flex flex-col">
                          <span className="line-through text-slate-400">
                            {item.price * item?.quantityInCart}
                          </span>
                          <span>
                            {item.price *
                              item?.quantityInCart *
                              (1 - item?.discount)}
                          </span>
                        </div>
                      ) : (
                        item.price * item?.quantityInCart
                      )}
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
        <section className="w-2/5 flex flex-col ml-2">
          <div className="mb-6">
            <label
              htmlFor="gift-card"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bạn có mã giảm giá không ?
            </label>
            <div className="flex">
              <input
                type="text"
                id="gift-card"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Mã giảm giá"
                required
              />
              <button
                type="submit"
                className="text-white bg-black hover:bg-slate-900	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Áp dụng
              </button>
            </div>
          </div>
          <div className="rounded-[6px] border border-solid border-neutral-900 p-2 border-2	">
            <div className="w-11/12 ml-3 bg-zinc-100	 h-fit">
              <p className="font-bold mb-3">WatchWorld voucher</p>
              <div className="flex flex-col justify-center items-center gap-4">
                <div
                  className={`border ${optionDiscount === 1 ? `border-black ` : `border-neutral-300`} border-solid w-[100%] flex items-center gap-[395px] px-[16px] py-[13px] rounded-[4px] relative border-2`}
                >
                  <div className="grow flex-1 h-[26px] relative">
                    <div onClick={() => { setOptionDiscount(1) }} className="inline-flex left-0 items-center top-0 gap-[12px] absolute">
                      {optionDiscount === 1 && <RadioButton checked className="!ml-[-1.00px] !relative" />}

                      {optionDiscount !== 1 && (
                        <div className="relative w-[20px] h-[20px] ml-[-1.00px] rounded-[100px] border border-solid border-black" />
                      )}
                      <div className="font-text-16px-regular w-fit mt-[-1.00px] tracking-[var(--text-16px-regular-letter-spacing)] text-[length:var(--text-16px-regular-font-size)] [font-style:var(--text-16px-regular-font-style)] text-neutral-07100 font-[number:var(--text-16px-regular-font-weight)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap relative">
                        Miễn phí vận chuyển
                      </div>
                    </div>
                    {/* <div
                      className={`font-text-16px-regular left-[350px] tracking-[var(--text-16px-regular-letter-spacing)] [font-style:var(--text-16px-regular-font-style)] text-[length:var(--text-16px-regular-font-size)] -top-px text-neutral-07100 font-[number:var(--text-16px-regular-font-weight)] text-right whitespace-nowrap leading-[var(--text-16px-regular-line-height)] absolute`}
                    >
                      $0.00
                    </div> */}
                  </div>
                </div>
                <div
                  className={`border ${optionDiscount === 2 ? `border-black ` : `border-neutral-300`} border-solid w-[100%] flex items-center gap-[395px] px-[16px] py-[13px] rounded-[4px] relative border-2`}
                >
                  <div className="grow flex-1 h-[26px] relative">
                    <div onClick={() => { setOptionDiscount(2) }} className="inline-flex left-0 items-center top-0 gap-[12px] absolute">
                      {optionDiscount === 2 && <RadioButton checked className="!ml-[-1.00px] !relative" />}

                      {optionDiscount !== 2 && (
                        <div className="relative w-[20px] h-[20px] ml-[-1.00px] rounded-[100px] border border-solid border-black" />
                      )}
                      <div className="font-text-16px-regular w-fit mt-[-1.00px] tracking-[var(--text-16px-regular-letter-spacing)] text-[length:var(--text-16px-regular-font-size)] [font-style:var(--text-16px-regular-font-style)] text-neutral-07100 font-[number:var(--text-16px-regular-font-weight)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap relative">
                        Giảm 10% đơn hàng (tối đa 50k)
                      </div>
                    </div>
                    <div
                      className={`font-text-16px-regular left-[350px] tracking-[var(--text-16px-regular-letter-spacing)] [font-style:var(--text-16px-regular-font-style)] text-[length:var(--text-16px-regular-font-size)] -top-px text-neutral-07100 font-[number:var(--text-16px-regular-font-weight)] text-right whitespace-nowrap leading-[var(--text-16px-regular-line-height)] absolute`}
                    >
                      10%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => onClickPayment()}
              type="button"
              className={styles.addToBasket}
            >
              Thanh toán
            </button>
          </div>
        </section>
      </section>
    </PaymentLayout>
  );
};

export default Home;
