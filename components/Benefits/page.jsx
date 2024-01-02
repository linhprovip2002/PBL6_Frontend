import React from "react";

const Benefits = () => {
  return (
    <>
      <section className="w-full h-[240px] mb-[70px] mt-[100px]">
        <p className="text-2xl mb-5 font-bold underline">Lợi ích</p>
        <div className="flex-center w-full h-full mt-5">
          <div className="mr-4 bg-slate-200 w-1/4 h-full px-4">
            <div className="h-1/2 pt-5">
              <img
                src="/assets/icons/truck-fast-solid.svg"
                width={50}
                height={50}
                alt="shipping"
              />
            </div>
            <div className="h-1/2">
              <p className="text-lg font-semibold mb-3">Miễn phí giao hàng</p>
              <p>Cho đơn hàng trên $200</p>
            </div>
          </div>
          <div className="mx-4 bg-slate-200 w-1/4 h-full px-4 py-2">
            <div className="h-1/2 pt-3">
              <img
                src="/assets/icons/money-bill-solid.svg"
                width={50}
                height={50}
                alt="money"
              />
            </div>
            <div className="h-1/2">
              <p className="text-lg font-semibold mb-3">Hoàn tiền</p>
              <p>Trong vòng 30 ngày</p>
            </div>
          </div>
          <div className="mx-4 bg-slate-200 w-1/4 h-full px-4 py-2">
            <div className="h-1/2 pt-4">
              <img
                src="/assets/icons/lock-solid.svg"
                width={30}
                height={30}
                alt="secure"
              />
            </div>
            <div className="h-1/2">
              <p className="text-lg font-semibold mb-3">Thanh toán an toàn</p>
              <p>Bảo mật thông tin</p>
            </div>
          </div>
          <div className="ml-4 bg-slate-200 w-1/4 h-full px-4 py-2">
            <div className="h-1/2 pt-4">
              <img
                src="/assets/icons/phone-solid.svg"
                width={30}
                height={30}
                alt="phone"
              />
            </div>
            <div className="h-1/2">
              <p className="text-lg font-semibold mb-3">Hỗ trợ 24/7</p>
              <p>Hỗ trợ tận tâm</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex"
        style={{
          width: "98.9vw",
          marginTop: "150px",
          backgroundColor: "#F3F5F7",
          marginBottom: "-100px"
        }}
      >
        <div className="w-1/2">
          <img
            src="/assets/images/slide2.jpg"
            alt="saleUp"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "500px",
            }}
          />
        </div>
        <div className="w-1/2 pl-[72px]">
          <div style={{ marginTop: "100px" }}>
            <p className="text-blue-600 font-semibold">GIẢM GIÁ ĐẾN 35%</p>
            <p className="text-3xl font-semibold mt-5">HÀNG TRĂM</p>
            <p className="text-3xl font-semibold">Mặt hàng giảm giá mới!</p>
            <p className="mt-5">
              Cửa hàng cung cấp những mặt hàng giá cả phải chăng. Phù hợp{" "}
            </p>
            <p>từng nhu cầu của mỗi khách hàng</p>
            <div className="mt-5">
              <a href="/" className="hover:decoration-solid hover:underline">
                Mua sắm bây giờ!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
