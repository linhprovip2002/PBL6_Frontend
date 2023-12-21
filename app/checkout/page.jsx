"use client";

import { FormShipping } from "@components/Form/FormShipping";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import { authSelector, cartSelector } from "@redux/reducers";
import { OrderApi } from "@services/api/order.api";
import arrayToSTring from "@utils/arrayToString";
import { toastError, toastSuccess } from "@utils/toastHelper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const checkout = () => {
  const { items } = useSelector(cartSelector);
  const { user } = useSelector(authSelector);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].price * items[i].quantityInCart);
    }
    setTotal(total);
  }, [items]);

  console.log(user);

  const [shippingForm, setShippingForm] = useState({
    address: user?.Address,
    phone: user?.phone,
    description: "",
  });

  const [order, setOrder] = useState([]);

  useEffect(() => {
    const productIDs = [];
    for (let i = 0; i < items.length; i++) {
      productIDs.push(items[i]._id);
    }
    const newProduct = {
      IDProducts: productIDs,
      ShipAddress: shippingForm.address,
      ShipPhone: shippingForm.phone,
      description: shippingForm.description,
    };
    setOrder(newProduct);
  }, [shippingForm, items]);

  const handleChange = (field, value) => {
    setShippingForm((prevShippingForm) => ({
      ...prevShippingForm,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    OrderApi.createOrder(order)
      .then(() => {
        toastSuccess("Tạo order thành công");
      })
      .catch((err) => {
        toastError("Tạo order thấ t bại");
      });
  };
  return (
    <PaymentLayout>
      <section className="w-full flex">
        <section className="w-3/5 flex flex-col gap-5 pr-10">
          <FormShipping
            shippingForm={shippingForm}
            handleChange={(field, value) => handleChange(field, value)}
          />
          {/* <FormPaymentMethod /> */}
          <button
            type="submit"
            class="text-white bg-black py-3 rounded-lg hover:bg-gray-800"
            onClick={handleSubmit}
          >
            Đặt hàng
          </button>
        </section>

        <section className="w-2/5">
          <div className="border-2 border-black bg-white rounded-md">
            <div className="w-full h-11">
              <div className="w-full font-semibold text-3xl px-5 mt-3 gap-4">
                Order summary
              </div>
            </div>

            {items?.map((item) => (
              <div
                id={item?.id}
                className="flex px-5 mx-2 mb-9 gap-4 pb-4 border-b"
              >
                <div className="border border-black">
                  <img
                    className="object-cover w-40 h-40"
                    src={item?.pictureLinks[0]}
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
                        Size: {arrayToSTring(item?.size)}
                      </p>
                      <div className="custom-number-input h-8  w-32">
                        <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent mt-1">
                          <div className="outline-none focus:outline-none text-center w-full text-md md:text-base cursor-default flex items-center outline-none">
                            X {item?.quantityInCart}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end	">
                        <p className="text-lg font-medium  leading-none">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-light">Discount</div>
                </div>
                <div className="absolute -top-px left-[300px] font-body-2-semi ">
                  No
                </div>
              </div>
            </div>
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-light">Sub total</div>
                </div>
                <div className="absolute -top-px left-[300px] font-body-2-semi ">
                  {total}
                </div>
              </div>
            </div>
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-bold text-xl">Total</div>
                </div>
                <div className="absolute -top-px left-[300px] text-xl ">
                  {total}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PaymentLayout>
  );
};

export default checkout;
