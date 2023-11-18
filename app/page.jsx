"use client";
import LinkButton from "@components/Buttons/LinkButton";
import Card from "@components/Card/Card";
import OverlayContainer from "@components/OverlayContainer/OverlayContainer";
import SliderCarousel from "@components/Slider/SliderComponent";
import { ProductApi } from "@services/api/product.api";
import { linkButtonList } from "@utils/data";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  const handelGetListProduct = useCallback(async () => {
    try {
      const res = await ProductApi.getListProduct();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handelGetListProduct();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <section className="w-full flex-center flex-col rounded-2xl overflow-hidden">
        <SliderCarousel autoSlide autoSlideInterval={1500} />
      </section>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Đồ án PBL6
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            Website bán đồng hồ
          </span>
        </h1>
        <p className="desc text-center">
          PBL6 - Website bán đồng hồ là trang web bán đồng hồ đến từ Châu Âu, uy
          tín hàng đầu Việt Nam, mua bán sỉ lẻ các loại đồng hồ.
        </p>
      </section>

      <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
        <p className="text-lg mb-5 font-bold underline">Bán chạy nhất</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
          <Card />
        </div>
      </section>

      <section className="w-full h-auto py-10">
        <p className="text-lg mb-5 font-bold underline">
          Chọn loại đồng hồ phù hợp
        </p>
        <div className="app-max-width app-x-padding h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {linkButtonList.map((item) => (
            <div className="w-full">
              <OverlayContainer imgSrc={item.image}>
                <LinkButton href="" extraClass="absolute bottom-2 z-20">
                  {item.name}
                </LinkButton>
              </OverlayContainer>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
