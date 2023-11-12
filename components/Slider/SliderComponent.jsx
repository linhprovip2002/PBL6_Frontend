import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
const slides = [
  {
    id: 1,
    title: "Thời trang",
    body: "Không gì có thể thay thế được những giá trị mà cỗ máy thời gian mang lại. Một người tinh tế, thời thượng là người biết cách tạo nên sự đặc biệt cho riêng mình.",
    url: "/assets/images/slide0.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 2,
    title: "Đẳng cấp",
    body: "Hầu hết các tỷ phú, doanh nhân thành đạt, các ngôi sao danh tiếng trên thế giới đều sở hữu riêng cho mình rất nhiều đồng hồ đeo tay. Ở phạm trù này, nó mang tính biểu tượng và thể hiện quyền lực của người đàn ông.",
    url: "/assets/images/slide1.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 3,
    title: "Lịch sự",
    body: "Việc đeo đồng hồ của bạn, đặc biệt nếu bạn là một doanh nhân, hay một nhân viên văn phòng còn phản ánh bạn là người coi trọng giờ giấc, đúng giờ. ",
    url: "/assets/images/slide2.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
  {
    id: 4,
    title: "Đánh dấu",
    body: "Kỉ niệm 1 ngày gì đó ý nghĩa như ngày cưới, ngày hoàn thành dự án,… thì đồng hồ đeo tay là món quà hàm chứa nhiều ý nghĩa. ",
    url: "/assets/images/slide3.jpg",
    docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
  },
];
export default function SliderCarousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);
  return (
    <div className="max-w-[1400px] h-96 w-full m-auto relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 object-cover
        flex justify-center	pt-56 px-28 pb-8 
        "
      >
        <b className="flex font-mono	text-xl text-white">
          {slides[currentIndex].body}
        </b>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`
              transition-all w-3 h-3 bg-white rounded-full cursor-pointer
              ${currentIndex === slideIndex ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
