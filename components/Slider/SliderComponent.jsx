//carousels/Bootstrap.js
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Slider.module.css";
export default function SliderCarousel() {
  const bootstrap = [
    {
      id: 1,
      title: "Fashion",
      body: "Đồng hồ cách làm nên con người bạn",
      imageUrl: "/assets/images/men.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 2,
      title: "Fashion",
      body: "Đồng hồ cách làm nên con người bạn",
      imageUrl: "/assets/images/men.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 3,
      title: "Fashion",
      body: "Đồng hồ cách làm nên con người bạn",
      imageUrl: "/assets/images/men.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 4,
      title: "Fashion",
      body: "Đồng hồ cách làm nên con người bạn",
      imageUrl: "/assets/images/men.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="w-100"
      activeIndex={index}
      onSelect={handleSelect}
      interval={1000}
      pause={false}
    >
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={1500}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
