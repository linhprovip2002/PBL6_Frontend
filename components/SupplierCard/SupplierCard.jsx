import React from "react";

const SupplierCard = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/3 mr-5">
        <img
          src="/assets/images/men.jpg"
          style={{ width: "100%", height: "100%" }}
        />
        <p className="text-xl text-center font-semibold mt-5">Donna Ernser PhD</p>
      </div>
      <div className="w-1/3 mx-5">
        <img
          src="/assets/images/slide0.jpg"
          style={{ width: "100%", height: "100%" }}
        />
        <p className="text-xl text-center font-semibold mt-5">Donna Ernser PhD 2</p>
      </div>
      <div className="w-1/3 ml-5">
        <img
          src="/assets/images/slide2.jpg"
          style={{ width: "100%", height: "100%" }}
        />
        <p className="text-xl text-center font-semibold mt-5">Win ngu nhu con cu company</p>
      </div>
    </div>
  );
};

export default SupplierCard;
