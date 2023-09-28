"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import cn from "classnames";
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
        <Link href="" className={cn("categories", styles.navLink)}>
          Thương hiệu
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Nam
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Nữ
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Cặp đôi
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Phụ kiện
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Dịch vụ
        </Link>
        <Link href="" className={cn("categories", styles.navLink)}>
          Liên hệ
        </Link>
      </div>

      <div className="sm:flex">
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
