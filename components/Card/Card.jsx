"use client";
import { productSelector } from "@redux/reducers/product.reducer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

import { addToCart, cartSelector } from "@redux/reducers";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
const Card = () => {
  const { productList } = useSelector(productSelector);
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

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
  useEffect(() => {
    const shopping_cart = document.querySelector("#shopping-cart");
    const cart_btns = document.querySelectorAll(".add-to-cart");

    for (const cart_btn of cart_btns) {
      cart_btn.onclick = (e) => {
        setTimeout(() => {
          dispatch(addToCart(JSON.parse(cart_btn.getAttribute("data-object"))));
        }, 1000);
        shopping_cart.classList.add("active");
        let target_parent =
          e.target.parentNode ?? e.target.parentNode.parentNode.parentNode;
        target_parent.style.zIndex = "100";
        let img = target_parent.querySelector(".card-img");
        let flying_img = img.cloneNode();
        flying_img.classList.add("flying-img");

        target_parent.appendChild(flying_img);

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
          left:
            shopping_cart_pos.left -
            (shopping_cart_pos.width / 2 +
              flying_img_pos.left +
              flying_img_pos.width / 2),
          top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30,
        };

        flying_img.style.cssText = `
                                  --left : ${data.left.toFixed(2)}px;
                                  --top : ${data.top.toFixed(2)}px;
                                  `;

        setTimeout(() => {
          target_parent.style.zIndex = "";
          target_parent.removeChild(flying_img);
          shopping_cart.classList.remove("active");
        }, 1000);
      };
    }
  }, [productList]);

  return (
    <>
      {productList?.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={classNames(styles.imageContainer, "group")}>
            <Link
              href={`/product/${item._id}`}
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {!isHovered && (
                <Image
                  className="card-img z-50"
                  src="/assets/images/watch1.jpg"
                  width={230}
                  height={300}
                  layout="responsive"
                  alt=""
                />
              )}
              {isHovered && (
                <Image
                  className="card-img transition-transform transform hover:scale-110 duration-1000 z-50"
                  src="/assets/images/watch1.jpg"
                  width={10}
                  height={10}
                  layout="responsive"
                  alt=""
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
                  alt=""
                />
              ) : (
                <Image
                  src="/assets/icons/heart.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              )}
            </button>
            <button
              type="button"
              className={classNames(
                "add-to-cart invisible group-hover:visible",
                styles.addBtn
              )}
              data-object={JSON.stringify(item)}
            >
              Add to cart
            </button>
          </div>
          <div className="content">
            <Link href="" className={styles.itemName}>
              {item.nameProduct}
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
