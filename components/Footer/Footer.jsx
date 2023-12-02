import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
    <div className="inline-flex flex-col items-start gap-[49px] pt-[50px] pb-[32px] px-[160px] relative bg-black text-white mt-20">
      <div className="relative w-full h-[32px]">
        <div className="flex w-[1120px] items-center justify-between relative">
          <div className="flex w-[544px] items-center gap-[32px] relative">
            <div className="relative w-[105px] h-[24px]">
              <p className="absolute -top-px left-0 font-medium  text-center ">
                <span className="text-white text-2xl">PBL6</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto]">
            <div className="relative w-[150px] mt-[-1.00px] font-caption-1">
              Home
            </div>
            <div className="relative w-[150px] mt-[-1.00px] font-caption-1">
              Shop
            </div>
            <div className="relative w-[150px] mt-[-1.00px] font-caption-1">
              Product
            </div>
            <div className="relative w-[150px] mt-[-1.00px] font-caption-1">
              Blog
            </div>
            <div className="relative w-[150px] mt-[-1.00px] font-caption-1">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1118px] items-start justify-between px-0 py-[16px] relative border-t">
        <div className="inline-flex items-start gap-[28px] relative flex-[0_0_auto]">
          <p className="relative w-fit ">
            Copyright © 2023 PBL6. All rights reserved
          </p>
          <div className="relative w-[150px]">Privacy Policy</div>
          <div className="relative w-[150px]">Terms of Use</div>
        </div>
        <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
          <Image src="/assets/icons/instagram.svg" width={20} height={20} />
          <Image src="/assets/icons/facebook.svg" width={20} height={20} />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Footer;
