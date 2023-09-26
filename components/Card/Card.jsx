"use client";
import { useState } from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWLHovered, setIsWLHovered] = useState(false);
  const [isWishListed, setIsWishListed] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link
          href=""
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered && (
            <Image
              src="/assets/images/watch1.jpg"
              width={230}
              height={300}
              layout="responsive"
            />
          )}
          {isHovered && (
            <Image
              className="transition-transform transform hover:scale-110 duration-1000"
              src="/assets/images/watch1.jpg"
              width={10}
              height={10}
              layout="responsive"
            />
          )}
        </Link>

        <button
          type="button"
          className="absolute top-2 right-2 p-1 rounded-full"
          aria-label="Wishlist"
          onClick={() => setIsWishListed(!isWishListed)}
          onMouseOver={() => setIsWLHovered(true)}
          onMouseLeave={() => setIsWLHovered(false)}
        >
          {isWLHovered || isWishListed ? (
            <Image src="/assets/icons/heartsolid.svg" width={20} height={20} />
          ) : (
            <Image src="/assets/icons/heart.svg" width={20} height={20} />
          )}
        </button>
        <button type="button" onClick={() => {}} className={styles.addBtn}>
          Add to cart
        </button>
      </div>
      <div className="content">
        <Link href="" className={styles.itemName}>
          Orient SK RA-AA0B02R19B
        </Link>
        <div className="text-gray-400">21.000.000 ₫</div>
        <button type="button" className="uppercase font-bold text-sm sm:hidden">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
