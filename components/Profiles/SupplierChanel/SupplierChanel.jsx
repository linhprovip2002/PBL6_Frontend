import { yupResolver } from "@hookform/resolvers/yup";
import { authSelector } from "@redux/reducers";
import { SupplierApi } from "@services/api/supplier.api";
import { toastError, toastSuccess } from "@utils/toastHelper";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";

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
  const [imageLink, setImageLink] = useState("");

  const [supplier, setSupplier] = useState({});

  const [isSupplier, setIsSupplier] = useState(false);
  const { user } = useSelector(authSelector);

  const handelGetAll = useCallback(async () => {
    try {
      if (user.Roles.some((role) => role.roleName === "Seller")) {
        const resSupplier = await SupplierApi.getSupplierByUserId();
        const data = resSupplier.data;
        setSupplier(data);
        setValue("companyName", data.companyName);
        setValue("contactEmail", data.contactEmail);
        setValue("contactPhone", data.contactPhone);
        setValue("address", data.address);
        setValue("description", data.description);
        setValue("imageLink", data.imageLink);
        setIsSupplier(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitHandler = async (data) => {
    try {
      if (isSupplier) {
        await SupplierApi.updateSupplierByUserId(supplier._id, data);
        toastSuccess("Cập nhật supplier thành công");
      } else {
        data.imageLink = imageLink;
        await SupplierApi.registerSupplier(data);
        toastSuccess("Bạn đã đăng ký supplier thành công");
      }
    } catch (error) {
      console.log(error);
      toastError("Có gì đó sai, hãy nhập lại");
    }
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      "bayisjyn"
    );
    data.append("cloud_name", "dnstdrtwz");
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dnstdrtwz/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setImageLink(res.url);
      if (!!supplier) {
        handleChange("logoImage", res.url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (field, value) => {
    setSupplier((prevSupplier) => ({
      ...prevSupplier,
      [field]: value,
    }));

    setValue(field, value);
  };
  useEffect(() => {
    handelGetAll();
  }, [user]);
  return (
    <form className="px-16" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="">
        <div className="font-bold text-2xl">Supplier chanel</div>
        {(supplier.logoImage || imageLink !== "") ? (
          <>
            <div className="flex justify-center">
              <div className="w-20 h-20">
                <div className="relative w-full h-full">
                  <img
                    src={imageLink !== "" ? imageLink : supplier.logoImage}
                    className="absolute border border-black rounded-full w-full h-full"
                  />
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
              onChange={(e) => handleChange("description", e.target.value)}
              type="text"
            />
          </div>
          <p className="text-red-700">{errors.description?.message}</p>
        </div>

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

        {isSupplier ? (
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
