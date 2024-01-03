"use client";

import { SupplierApi } from "@services/api/supplier.api";
import { useCallback, useEffect, useState } from "react";

const SupplierPage = () => {
  const [suppliers, setSuppliers] = useState([]);

  const handelGetAll = useCallback(async () => {
    try {
      const resSupplier = await SupplierApi.getAllSuppliers();
      setSuppliers(resSupplier.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handelGetAll();
  }, []);

  return (
    <>
      <section className="w-full mt-[150px]">
        {suppliers?.map((supplier, idx) => (
          <div key={idx} className="w-full h-[300px] flex">
            <div className="w-1/2 h-[300px] flex justify-center">
              <img
                src={
                  supplier.logoImage
                    ? supplier.logoImage
                    : "/assets/images/avatar-default-circle.png"
                }
                className="bg-gray-200 px-5 py-5 rounded-2xl shadow-lg"
                style={{ width: "35%", height: "60%" }}
              />
            </div>

            <div className="w-1/2 ml-[-80px]">
              <h1 className="font-bold text-3xl">{supplier.companyName}</h1>
              <div className="mt-5 text-xl flex">
                <p className="font-semibold">Địa chỉ: &nbsp;</p>
                <span>{supplier.address}</span>
              </div>
              <div className="mt-5 text-xl flex">
                <p className="font-semibold">Email: &nbsp;</p>
                <span>{supplier.contactEmail}</span>
              </div>
              <div className="mt-5 text-xl flex">
                <p className="font-semibold">Mô tả: &nbsp;</p>
                <span>{supplier.description}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SupplierPage;
