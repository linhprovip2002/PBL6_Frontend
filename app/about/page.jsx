"use client";

import "./page.css";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="about">
          <img src="/assets/images/about1.jpg" className="pic" />
          <div className="text">
            <h2>Về chúng tôi</h2>
            <h5>
              Thương hiệu đồng hồ <span>WATCH WORLD</span>
            </h5>
            <p>
              Chào mừng bạn đến với WATCH WORLD, nơi tinh tế gặp gỡ đẳng cấp.
              Chúng tôi tự hào là thương hiệu đồng hồ hàng đầu, mang đến cho
              khách hàng trải nghiệm thời gian không giới hạn. WATCH WORLD không
              chỉ là một chiếc đồng hồ, mà là biểu tượng của phong cách và sự
              sang trọng. Với sự kết hợp hoàn hảo giữa chất lượng tốt nhất và
              thiết kế độc đáo, chúng tôi cam kết tạo nên những khoảnh khắc đặc
              biệt trong cuộc sống của bạn. Hãy đồng hành cùng chúng tôi, để mỗi
              khoảnh khắc trở nên rạng ngời. WATCH WORLD - Nắm bắt thời gian,
              kiến tạo phong cách.
            </p>
          </div>
        </div>

        <div className="why fade-in">
          <div className="text">
            <h2 style={{ color: "#DAA520" }}>Những lý do</h2>
            <h5>
              Bạn nên chọn <span>WATCH WORLD</span>
            </h5>
            <p>
              WATCH WORLD là sự lựa chọn không thể phủ nhận với nhiều lý do hấp
              dẫn. Chúng tôi tự hào mang đến cho khách hàng trải nghiệm đồng hồ
              tuyệt vời nhất, bắt đầu từ chất lượng vô song. Mỗi sản phẩm của
              chúng tôi được chế tác tận tâm từ những nguyên liệu chọn lọc, đảm
              bảo độ bền và sự đẹp mắt vượt trội. Sự sáng tạo trong thiết kế là
              điểm mạnh khác biệt, khiến WATCH WORLD trở thành biểu tượng thời
              trang và cái nhìn đẳng cấp. Đồng hành cùng WATCH WORLD, bạn không
              chỉ đeo một chiếc đồng hồ, mà còn trải nghiệm một phong cách sống
              đầy ấn tượng và sang trọng.
            </p>
          </div>
          <img src="/assets/images/about2.avif" className="pic" />
        </div>

        <div className="why">
          <img src="/assets/images/about3.jpg" className="pic" />
          <div className="text">
            <h2 style={{ color: "#87CEFA" }}>Giá trị cốt lõi</h2>
            <h5>
              Của<span> WATCH WORLD</span>
            </h5>
            <p>
              WATCH WORLD tỏa sáng với giá trị cốt lõi: chất lượng, phối hợp
              cùng với sự sáng tạo. Chúng tôi cam kết cung cấp đồng hồ không chỉ
              đẹp mắt và chính xác mà còn thể hiện đẳng cấp và phong cách cá
              nhân. WATCH WORLD không chỉ là sản phẩm, mà là biểu tượng của sự
              hoàn hảo và tinh tế.
            </p>
            <button type="button" className="hire mt-5"><a href="/">Mua hàng ngay</a></button>
          </div>
        </div>
      </section>

      <section className="text-center mt-[20px] w-full text-5xl mb-5 font-bold">
        <div>WATCH WORLD</div>
        <div className="orange_gradient py-2">Ánh sáng cho mọi khoảnh khắc</div>
      </section>

      <section className="w-full mt-[100px]">
        <video width="100%" height="360" autoPlay loop>
          <source src="assets/images/video_watches.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="w-full mt-[100px] mb-5">
        <div className="flex justify-center">
          <p
            style={{
              fontSize: "60px",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            Thành viên sáng lập
          </p>
        </div>
        <div className="flex">
          <div className="mx-auto text-center ">
            <img
              src="/assets/images/avatar-default-circle.png"
              width={200}
              height={200}
            />
            <p className="mt-5 text-lg font-semibold">Chu Đức Anh</p>
          </div>
          <div className="mx-auto text-center">
            <img
              src="/assets/images/avatar-default-circle.png"
              width={200}
              height={200}
            />
            <p className="mt-5 text-lg font-semibold">Đặng Quốc Thắng</p>
          </div>
          <div className="mx-auto text-center">
            <img
              src="/assets/images/avatar-default-circle.png"
              width={200}
              height={200}
            />
            <p className="mt-5 text-lg font-semibold">Nguyễn Viết Sáng</p>
          </div>
          <div className="mx-auto text-center">
            <img
              src="/assets/images/avatar-default-circle.png"
              width={200}
              height={200}
            />
            <p className="mt-5 text-lg font-semibold">Đặng Quang Nhật Linh</p>
          </div>
          <div className="mx-auto text-center">
            <img
              src="/assets/images/avatar-default-circle.png"
              width={200}
              height={200}
            />
            <p className="mt-5 text-lg font-semibold">Nguyễn Minh Hoàng</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
