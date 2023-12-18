"use client";

import React from "react";

export const FormShipping = ({ shippingForm, handleChange }) => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        THÔNG TIN GIAO HÀNG
      </div>
      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2">ĐỊA CHỈ *</label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-1"
            placeholder="Địa chỉ giao hàng"
            type="text"
            value={shippingForm.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <label className="relative w-fit font-hairline-2">
          SỐ ĐIỆN THOẠI *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-1"
            placeholder="Số điện thoại"
            type="text"
            value={shippingForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <label className="relative w-fit font-hairline-2">THÔNG TIN THÊM</label>
        <div className="flex  w-full bg-white rounded-md border border-black-300">
          <textarea
            className="w-full mx-2 my-2"
            id="input-1"
            placeholder="Thêm thông tin cần thiết"
            value={shippingForm.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
