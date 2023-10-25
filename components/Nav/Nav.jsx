"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import cn from "classnames";
import { navMenuList } from "@utils/data";
import { useRouter } from "next/navigation";
const Nav = ({ hiddenSearch }) => {
  const router = useRouter();
  const handleLinkTo = (path) => {
    router.push(path, { scroll: true });
  };
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div className="md:mr-3">
        <Link
          href="/"
          className={cn(
            "flex gap-2 flex-center max-md:hidden block",
            styles.navLink
          )}
        >
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
        {navMenuList?.map((item, index) => (
          <Link id={index} href="" className={cn("categories", styles.navLink)}>
            {item}
          </Link>
        ))}
      </div>
      <div className="sm:flex">
        <div className="flex gap-3 md:gap-7">
          <form
            className="input-container"
            // hidden={hiddenSearch}
          >
            <input
              type="text"
              placeholder="Tìm sản phẩm"
              className="search_input peer max-md:hidden"
              required
              disabled={hiddenSearch}
            />
          </form>
          <Image
            className="cursor-pointer"
            src="/assets/icons/cart.svg"
            width={30}
            height={30}
            onClick={() => handleLinkTo("/cart")}
          />
          <Image
            className="cursor-pointer"
            src="/assets/icons/heart.svg"
            width={30}
            height={30}
          />
          <Image
            className="cursor-pointer"
            src="/assets/icons/user.svg"
            width={25}
            height={25}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
