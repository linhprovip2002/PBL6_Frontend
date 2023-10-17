"use client";
import { useState } from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { cardList } from "@utils/data";

const Card = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);
  const [wishListedCards, setWishListedCards] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardMouseOver = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(-1);
  };

  const handleToggleWishList = (index) => {
    if (wishListedCards.includes(index)) {
      setWishListedCards(wishListedCards.filter((item) => item !== index));
    } else {
      setWishListedCards([...wishListedCards, index]);
    }
  };

  return (
    <>
      {cardList?.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imageContainer}>
            <Link
              href="/product"
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
              onClick={() => handleToggleWishList(index)}
              onMouseOver={() => handleCardMouseOver(index)}
              onMouseLeave={() => handleCardMouseLeave()}
            >
              {hoveredCardIndex === index || wishListedCards.includes(index) ? (
                <Image
                  src="/assets/icons/heartsolid.svg"
                  width={20}
                  height={20}
                />
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
              {item.name}
            </Link>
            <div className="text-gray-400">{item.price}</div>
            <button
              type="button"
              className="uppercase font-bold text-sm sm:hidden"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
