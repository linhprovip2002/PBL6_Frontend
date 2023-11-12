"use client";

import React from "react";
import Image from "next/image";
import styles from "@app/product/page.module.css";

export default function Product() {
  return (
    <section className="w-full max-w-full flex">
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/watch1.jpg"
          width={230}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={styles.details}>
        <span>Analog</span>
        <div className={styles.nameProduct}>Orient SK RA-AA0B02R19A</div>
        <div className={styles.priceProduct}>20.000.000 đ</div>
        <div className={styles.colors}>
          <span>Colors: Black, Gold</span>
          <br />
          <span>Size: 39mm</span>
        </div>
        <div className={styles.description}>
          <span>
            Description: The Orient SK RA-AA0B02R19A Analog Watch is a beautifully designed
            timepiece for women. This is a genuine Titan product. The product
            comes with a standard brand warranty of 2 Years.
          </span>
        </div>
        <button type="button" className={styles.addToBasket}>
          Thêm vào giỏ hàng
        </button>
        <button type="button" className={styles.favourite}>
          Ưa thích
        </button>
      </div>
    </section>
  );
}
