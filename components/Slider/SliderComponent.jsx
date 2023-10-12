//carousels/Bootstrap.js
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Slider.module.css";
export default function SliderCarousel() {
  const bootstrap = [
    {
      id: 1,
      title: "Thời trang",
      body: "Không gì có thể thay thế được những giá trị mà cỗ máy thời gian mang lại. Một người tinh tế, thời thượng là người biết cách tạo nên sự đặc biệt cho riêng mình.",
      imageUrl: "/assets/images/slide0.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 2,
      title: "Đẳng cấp",
      body: "Hầu hết các tỷ phú, doanh nhân thành đạt, các ngôi sao danh tiếng trên thế giới đều sở hữu riêng cho mình rất nhiều đồng hồ đeo tay. Ở phạm trù này, nó mang tính biểu tượng và thể hiện quyền lực của người đàn ông.",
      imageUrl: "/assets/images/slide1.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 3,
      title: "Lịch sự",
      body: "Việc đeo đồng hồ của bạn, đặc biệt nếu bạn là một doanh nhân, hay một nhân viên văn phòng còn phản ánh bạn là người coi trọng giờ giấc, đúng giờ. ",
      imageUrl: "/assets/images/slide2.jpg",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 4,
      title: "Đánh dấu",
      body: "Kỉ niệm 1 ngày gì đó ý nghĩa như ngày cưới, ngày hoàn thành dự án,… thì đồng hồ đeo tay là món quà hàm chứa nhiều ý nghĩa. ",
      imageUrl: "/assets/images/slide3.jpg",
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
        <Carousel.Item key={item.id} className={styles.itemP} interval={5000}>
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
