import { authSelector } from "@redux/reducers";
import React from "react";
import { useSelector } from "react-redux";

const AddressComponent = () => {
  const { user } = useSelector(authSelector);

  return (
    <>
      <section className="w-full h-[80px] pl-16">
        <div>
          <h1
            style={{
              color: "#000000",
              fontFamily: '"Inter-SemiBold", Helvetica',
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "32px",
              marginTop: "-1px",
              position: "relative",
              whiteSpace: "nowrap",
              width: "fit-content",
              textAlign: "center",
            }}
          >
            Address
          </h1>
        </div>
        <div className="w-full bg-white h-[70px] rounded-xl shadow-xl mt-4">
          <div className="w-full h-full px-5 py-5 text-xl flex mx-5">
            <p className="font-bold">Địa chỉ giao hàng: &nbsp;</p>{" "}
            {user.Address}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddressComponent;
