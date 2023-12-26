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

import "@styles/swiper.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import Review from "@components/Review/Review";
import { ProductApi } from "@services/api/product.api";

export default function Product() {
  const { productList, productDetailsCurrent, isLoading } =
    useSelector(productSelector);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const paths = pathname.split("/");

  const id = paths[paths.length - 1];
  const getProductDetailPreView = useCallback(async (id) => {
    try {
      dispatch(getProductPending());
      const res = await ProductApi.getReviewProduct(id);
      dispatch(
        getProductDetailsSuccess({
          ...productList?.find((item) => item._id === id),
          review: res?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProductDetailPreView(id);
  }, [id]);

  const addProductToCart = () => {
    dispatch(addToCart(productDetailsCurrent));
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
    console.log(comment)
  }, [comment])

  console.log(productDetailsCurrent);
  console.log(productDetailsCurrent.review);
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
              {productDetailsCurrent?.price} $
            </div>
            <div className={styles.colors}>
              <span>Colors: </span>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4">
                <option selected>{productDetailsCurrent?.color[0]}</option>
                {(() => {
                  const options = [];
                  for (
                    let i = 1;
                    i < productDetailsCurrent?.color.length;
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
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg px-4 ml-5">
                <option value={productDetailsCurrent?.size[0]} selected>
                  {productDetailsCurrent?.size[0]}
                </option>
                {(() => {
                  const options = [];
                  for (let i = 1; i < productDetailsCurrent?.size.length; i++) {
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
