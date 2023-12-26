import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SupplierApi } from "@services/api/supplier.api";
import { toastSuccess } from "@utils/toastHelper";

const schema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  contactEmail: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  contactPhone: yup
    .string()
    .required("Phone is required")
    .matches(/[0-9]{10}/, "Phone number has to have 10 numbers"),
  address: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
  imageLink: yup.string(),
});

const SupplierChanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    data.imageLink = imageLink;
    try {
      SupplierApi.registerSupplier(data);
      toastSuccess("Bạn đã đăng ký supplier thành công");
    } catch (error) {
      console.log(error);
      toastError("Có gì đó sai, hãy nhập lại");
    }

    reset();
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setImageLink(res.url);
      if(!!supplier) {
        handleChange("logoImage", res.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [imageLink, setImageLink] = useState("");

  const [supplier, setSupplier] = useState({});

  const handleChange = (field, value) => {
    setSupplier((prevSupplier) => ({
      ...prevSupplier,
      [field]: value,
    }));
  };

  const handelGetAll = useCallback(async () => {
    try {
      const res = await SupplierApi.getSupplierByUserId();
      setSupplier(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handelGetAll();
  }, []);

  return (
    <form className="px-16" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="">
        <div className="font-bold text-2xl">Supplier chanel</div>
        {supplier.logoImage ? (
          <>
            <div className="flex justify-center">
              <div className="w-20 h-20">
                <div className="relative w-full h-full">
                  <img
                    src={supplier.logoImage}
                    className="absolute border border-black rounded-full w-full h-full"
                  />
                  <label
                    htmlFor="file-input"
                    className="group w-full h-full p-5 hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
                  >
                    <img
                      className="invisible group-hover:visible"
                      src="https://www.svgrepo.com/show/33565/upload.svg"
                      alt=""
                    />
                    <input
                      type="file"
                      id="file-input"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {/* Company name */}
        <div className="w-full mb-3 mt-5">
          <label className="text-xs font-sans">COMPANY NAME *</label>
          <div className="w-full my-1">
            <input
              className="w-full px-2 py-2 rounded-lg border border-gray-800"
              placeholder="Company Name"
              {...register("companyName")}
              value={supplier.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              type="text"
            />
            <p className="text-red-700">{errors.companyName?.message}</p>
          </div>
        </div>
        {/* Contact Email */}
        <div className="w-full my-4">
          <label className="text-xs font-sans">CONTACT EMAIL *</label>
          <div className="w-full my-1">
            <input
              className="w-full px-2 py-2 rounded-lg border border-gray-800"
              placeholder="Contact Email"
              {...register("contactEmail")}
              value={supplier.contactEmail}
              onChange={(e) => handleChange("contactEmail", e.target.value)}
              type="email"
            />
            <p className="text-red-700">{errors.contactEmail?.message}</p>
          </div>
        </div>
        {/* Contact Phone */}
        <div className="w-full my-4">
          <label className="text-xs font-sans">CONTACT PHONE *</label>
          <div className="w-full my-1">
            <input
              className="w-full px-2 py-2 rounded-lg border border-gray-800"
              placeholder="Contact Phone"
              {...register("contactPhone")}
              value={supplier.contactPhone}
              onChange={(e) => handleChange("contactPhone", e.target.value)}
              type="text"
            />
            <p className="text-red-700">{errors.contactPhone?.message}</p>
          </div>
        </div>
        {/* Address */}
        <div className="w-full my-4">
          <label className="text-xs font-sans">ADDRESS *</label>
          <div className="w-full my-1">
            <input
              className="w-full px-2 py-2 rounded-lg border border-gray-800"
              placeholder="Address"
              {...register("address")}
              value={supplier.address}
              onChange={(e) => handleChange("address", e.target.value)}
              type="text"
            />
          </div>
          <p className="text-red-700">{errors.address?.message}</p>
        </div>
        {/* Description */}
        <div className="w-full my-4">
          <label className="text-xs font-sans">DESCRIPTION*</label>
          <div className="w-full my-1">
            <input
              className="w-full px-2 py-2 rounded-lg border border-gray-800"
              placeholder="Description"
              {...register("description")}
              value={supplier.description}
              onChange={(e) => handleChange("description", e.target.value)}
              type="text"
            />
          </div>
          <p className="text-red-700">{errors.description?.message}</p>
        </div>

        {!supplier ? (
          <>
            <div className="w-full my-4">
              <label className="text-xs font-sans">LOGO IMAGE *</label>
              <input
                class="block w-full text-md text-gray-400 border border-gray-800 py-1 px-1
                        rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                type="file"
                onChange={uploadImage}
              />
            </div>
          </>
        ) : (
          <></>
        )}

        {supplier ? (
          <>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="rounded-lg py-2 px-4 bg-orange-400 hover:bg-orange-500 text-white"
              >
                Lưu thay đổi
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="rounded-lg py-2 px-4 bg-black hover:bg-gray-700 text-white"
              >
                Đăng ký
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default SupplierChanel;
