"use client";

import styles from "@app/product/[id]/page.module.css";
import Loading from "@components/Loading/Loading";
import { addToCart } from "@redux/reducers";
import {
  getProductDetailsSuccess,
  getProductPending,
  productSelector,
} from "@redux/reducers/product.reducer";
import { toastError, toastSuccess } from "@utils/toastHelper";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import Review from "@components/Review/Review";
import { ProductApi } from "@services/api/product.api";
import "@styles/swiper.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";

export default function Product() {
  const { productList, productDetailsCurrent, isLoading } =
    useSelector(productSelector);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const paths = pathname.split("/");
  const [sizePick, setSizePick] = useState();
  const [colorPick, setColorPick] = useState();
  const [discount, setDiscount] = useState(null);
  const id = paths[paths.length - 1];
  const getProductDetailPreView = useCallback(async (id) => {
    try {
      dispatch(getProductPending());
      const res = await Promise.all([
        ProductApi.getReviewProduct(id),
        ProductApi.getDiscountProduct(id),
      ]);

      dispatch(
        getProductDetailsSuccess({
          ...productList?.find((item) => item._id === id),
          review: res[0]?.data,
        })
      );
      if (res[1]?.data.length !== 0) {
        setDiscount(res[1]?.data[0]?.discount);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProductDetailPreView(id);
  }, [id]);

  const addProductToCart = () => {
    dispatch(
      addToCart({
        ...productDetailsCurrent,
        colorPick: colorPick,
        sizePick: sizePick,
      })
    );
    toastSuccess("Thêm 1 sản phẩm vào giỏ hàng thành công");
  };

  const [comment, setComment] = useState({
    rating: 0,
    comment: "",
  });

  const handleChange = (field, value) => {
    setComment((prevComment) => ({
      ...prevComment,
      [field]: value,
    }));
  };

  const submitComment = async () => {
    try {
      await ProductApi.createReview(id, comment);
      window.location.reload();
    } catch (error) {
      toastError("Bạn đã review sản phẩm này");
    }
  };

  useEffect(() => {
    if (productDetailsCurrent?._id) {
      setColorPick(productDetailsCurrent?.color[0]);
      setSizePick(productDetailsCurrent?.size[0]);
    }
  }, [productDetailsCurrent]);
  return (
    <div className="container">
      <div className="w-full max-w-full flex mt-32 justify-between">
        <div className={styles.imageContainer}>
          <>
            <Swiper
              effect={"cards"}
              // loop
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              className="mySwiper"
            >
              {productDetailsCurrent?.pictureLinks?.map((item) => (
                <SwiperSlide key={item?._id}>
                  <img
                    className="object-cover h-full w-full"
                    src={item}
                    layout="responsive"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
        {isLoading ? (
          <Loading size={20} />
        ) : (
          <div className={styles.details}>
            <span>{productDetailsCurrent?.type}</span>
            <div className={styles.nameProduct}>
              {productDetailsCurrent?.nameProduct}
            </div>
            <div className={styles.priceProduct}>
              {discount ? (
                <span>
                  <span
                    className="line-through"
                  >
                    {productDetailsCurrent?.price} VNĐ
                  </span>
                  {` ->`} {productDetailsCurrent?.price * (1 - discount)} $
                </span>
              ) : (
                <span>{productDetailsCurrent?.price} VNĐ</span>
              )}
            </div>
            <div className={styles.colors}>
              <span>Colors: </span>
              <select
                onChange={(e) => {
                  dispatch(setColorPick(e.target.value));
                }}
                defaultValue={colorPick}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4"
              >
                {(() => {
                  const options = [];
                  for (
                    let i = 0;
                    i < productDetailsCurrent?.color?.length;
                    i++
                  ) {
                    options.push(
                      <option key={i} value={productDetailsCurrent?.color[i]}>
                        {productDetailsCurrent?.color[i]}
                      </option>
                    );
                  }
                  return options;
                })()}
              </select>
              <br />
              <br />
              <span>Size: </span>
              <select
                onChange={(e) => {
                  dispatch(setSizePick(e.target.value));
                }}
                defaultValue={sizePick}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4 ml-5"
              >
                {(() => {
                  const options = [];
                  for (
                    let i = 0;
                    i < productDetailsCurrent?.size?.length;
                    i++
                  ) {
                    options.push(
                      <option key={i} value={productDetailsCurrent?.size[i]}>
                        {productDetailsCurrent?.size[i]}
                      </option>
                    );
                  }
                  return options;
                })()}
              </select>
            </div>
            <div className={styles.description}>
              <span>{productDetailsCurrent?.description}</span>
            </div>
            <button
              onClick={() => addProductToCart()}
              type="button"
              className={styles.addToBasket}
            >
              Thêm vào giỏ hàng
            </button>
            <button type="button" className={styles.favourite}>
              Ưa thích
            </button>
          </div>
        )}
      </div>
      <div>
        <Review
          review={productDetailsCurrent?.review || []}
          handleChange={(field, value) => handleChange(field, value)}
          submitComment={submitComment}
        />
      </div>
    </div>
  );
}
