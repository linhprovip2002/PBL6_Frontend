import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="inline-flex flex-col items-start gap-[49px] pt-[50px] pb-[32px] px-[160px] absolute right-0 left-0 bottom-0 bg-black text-white mt-20 z-50">
        <div className="relative w-full h-[32px]">
          <div className="flex items-center justify-between relative">
            <div className=" w-[544px] gap-[32px] relative">
              <div className="relative flex flex-row">
                <Image
                  src="/assets/images/logo_home.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="abosolute"
                />
                <p className="-top-px left-12 font-medium w-[220px] flex justify-center items-center ">
                  <span className="text-white text-2xl">SUNNY WATCH</span>
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-[40px] relative flex-[0_0_auto] text-end">
              <div className="relative w-[80px] mt-[-1.00px] font-caption-1">
                <Link href="/">Home</Link>
              </div>
              <div className="relative w-[80px] mt-[-1.00px] font-caption-1">
                Shop
              </div>
              <div className="relative w-[80px] mt-[-1.00px] font-caption-1">
                Product
              </div>
              <div className="relative w-[80px] mt-[-1.00px] font-caption-1">
                Blog
              </div>
              <div className="relative w-[80px] mt-[-1.00px] font-caption-1">
                Contact Us
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-between px-0 py-[16px] relative border-t">
          <div className="inline-flex items-start gap-[28px] relative flex-[0_0_auto]">
            <p className="relative w-fit">
              Copyright © 2023 PBL6. All rights reserved
            </p>
            <div className="relative w-[100px]">Privacy Policy</div>
            <div className="relative w-[100px]">Terms of Use</div>
          </div>
          <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
            <a
              href="https://www.instagram.com/sunnywatch2002/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg=="
              target="_blank"
            >
              <Image src="/assets/icons/instagram.svg" width={20} height={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553800418323&locale=vi_VN"
              target="_blank"
            >
              <Image src="/assets/icons/facebook.svg" width={20} height={20} />
            </a>
            <a
              href="https://www.tiktok.com/@sunnywatch2002?_t=8hsVBKYfGD9&_r=1"
              target="_blank"
            >
              <Image src="/assets/icons/tiktok.svg" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
