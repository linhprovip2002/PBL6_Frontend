"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div className="md:mr-3">
        <Link href="/" className="flex gap-2 flex-center max-md:hidden block">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain flex-shrink-0"
          />
          <p className="logo_text">PBL6</p>
        </Link>
      </div>

      <div className="flex gap-6 font-satoshi flex-center max-md:text-sm">
        <Link href="" className="categories">
          Thương hiệu
        </Link>
        <Link href="" className="categories">
          Nam
        </Link>
        <Link href="" className="categories">
          Nữ
        </Link>
        <Link href="" className="categories">
          Cặp đôi
        </Link>
        <Link href="" className="categories">
          Phụ kiện
        </Link>
        <Link href="" className="categories">
          Dịch vụ
        </Link>
        <Link href="" className="categories">
          Liên hệ
        </Link>
      </div>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-7">
          <form className="input-container">
            <input
              type="text"
              placeholder="Tìm sản phẩm"
              className="search_input peer"
              required
            />
          </form>
          <Image src="/assets/icons/cart.svg" width={30} height={30} />
          <Image src="/assets/icons/heart.svg" width={30} height={30} />
          <Image src="/assets/icons/user.svg" width={25} height={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
