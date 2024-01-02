"use client";

import Card from "@components/Card/Card";
import { getProductByCategorySuccess } from "@redux/reducers/product.reducer";
import { ProductApi } from "@services/api/product.api";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Products = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const dispatch = useDispatch();
  const urlEncoded = paths[paths.length - 1];
  const categoryName = decodeURIComponent(urlEncoded);

  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [prices, setPrices] = useState("Tất cả mức giá");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    router.push(selectedValue);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setPrices(price);
  };

  const getProductsByCategory = useCallback(async (categoryName, prices) => {
    try {
      const res = await ProductApi.getListProduct();
      if (categoryName === "all") {
        const productCategory1 = res?.data;
        if (prices === "Nhỏ hơn 200000") {
          const productLessThan1000 = productCategory1.filter(
            (product) => product.price < 200000
          );
          dispatch(
            getProductByCategorySuccess({ products: productLessThan1000 })
          );
        } else if (prices === "200000 - 500000") {
          const productLessThan10000 = productCategory1.filter(
            (product) => product.price < 500000 && product.price > 200000
          );
          dispatch(
            getProductByCategorySuccess({ products: productLessThan10000 })
          );
        } else if (prices === "Lớn hơn 500000") {
          const productMoreThan10000 = productCategory1.filter(
            (product) => product.price > 500000
          );
          dispatch(
            getProductByCategorySuccess({ products: productMoreThan10000 })
          );
        } else {
          dispatch(getProductByCategorySuccess({ products: productCategory1 }));
        }
      } else {
        const productCategory2 = res?.data.filter((item) =>
          item.IDCategory?.some(
            (category) => category.CategoryName === categoryName
          )
        );
        if (prices === "Nhỏ hơn 200000") {
          const productLessThan1000 = productCategory2.filter(
            (product) => product.price < 200000
          );
          dispatch(
            getProductByCategorySuccess({ products: productLessThan1000 })
          );
        } else if (prices === "200000 - 500000") {
          const productLessThan10000 = productCategory2.filter(
            (product) => product.price < 500000 && product.price > 200000
          );
          dispatch(
            getProductByCategorySuccess({ products: productLessThan10000 })
          );
        } else if (prices === "Lớn hơn 500000") {
          const productMoreThan10000 = productCategory2.filter(
            (product) => product.price > 500000
          );
          dispatch(
            getProductByCategorySuccess({ products: productMoreThan10000 })
          );
        } else {
          dispatch(getProductByCategorySuccess({ products: productCategory2 }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProductsByCategory(categoryName, prices);
    console.log(categoryName);
  }, [categoryName, prices]);

  return (
    <>
      <section className="w-full flex-center flex-col mt-[130px] mb-[80px]">
        <h1 className="head_text text-center">
          Sunny Watch
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            Website bán đồng hồ
          </span>
        </h1>
        <p className="desc text-center">
          Website bán đồng hồ là trang web bán đồng hồ đến từ Châu Âu, uy tín
          hàng đầu Việt Nam, mua bán sỉ lẻ các loại đồng hồ.
        </p>
      </section>

      <section className="app-max-width w-full h-full flex flex-col justify-center">
        <div className="flex justify-end">
          <div className="flex-col">
            <div className="w-[200px] text-gray-700">
              <p>CATEGORIES</p>
            </div>
            <select
              className="w-[200px] bg-white border border-gray-300 text-gray-900 text-md rounded-lg px-4 py-2 mb-[30px] shadow-md"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="" selected disabled>Chọn loại đồng hồ</option>
              <option value="/products/all">Tất cả</option>
              <option value="/products/Men's Watches">Đồng hồ nam</option>
              <option value="/products/Women's Watches">Đồng hồ nữ</option>
              <option value="/products/Children's Watches">
                Đồng hồ trẻ em
              </option>
              <option value="/products/Luxury Watches">Đồng hồ cao cấp</option>
              <option value="/products/Smart Watches">
                Đồng hồ thông minh
              </option>
            </select>
          </div>

          <div className="flex-col ml-5">
            <div className="w-[200px] text-gray-700">
              <p>PRICES</p>
            </div>
            <select
              className="w-[200px] bg-white border border-gray-300 text-gray-900 text-md rounded-lg px-4 py-2 mb-[30px] shadow-md"
              value={prices}
              onChange={handlePriceChange}
            >
              <option value="Tất cả mức giá">Tất cả mức giá</option>
              <option value="Nhỏ hơn 200000">Nhỏ hơn 200000</option>
              <option value="200000 - 500000">Từ 200000 tới 500000</option>
              <option value="Lớn hơn 500000">Lớn hơn 500000</option>
            </select>
          </div>
        </div>

        <p className="text-2xl mb-5 font-bold underline">
          {categoryName === "all"
            ? `Tất cả loại đồng hồ`
            : categoryName === "Men's Watches"
            ? `Đồng hồ nam`
            : categoryName === "Women's Watches"
            ? `Đồng hồ nữ`
            : categoryName === "Children's Watches"
            ? `Đồng hồ trẻ em`
            : categoryName === "Luxury Watches"
            ? `Đồng hồ cao cấp`
            : categoryName === "Smart Watches"
            ? `Đồng hồ thông minh`
            : ""}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Products;
