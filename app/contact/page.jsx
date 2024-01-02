import React from "react";
import "./page.css";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section>
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body px-5">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>KẾT NỐI</span>
                    <span>CHÚNG TÔI</span>
                  </div>
                  <div class="app-contact">
                    SỐ ĐIỆN THOẠI : +84 9050 000 000
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="Họ và tên" />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="Địa chỉ email"
                      />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div class="app-form-group message">
                      <textarea
                        class="app-form-control"
                        placeholder="LỜI NHẮN"
                      />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button mr-5">CANCEL</button>
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <p className="font-bold text-center text-4xl orange_gradient">HOẶC</p>
        <div className="w-full flex justify-center mt-[80px]">
          <div
            className="w-[600px] flex"
            style={{
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ backgroundColor: "#4d4d4f" }}
              className="px-5 py-5 py-5 px-5 rounded-2xl shadow-2xl"
            >
              <a
                href="https://www.instagram.com/sunnywatch8002/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg=="
                target="_blank"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  width={80}
                  height={80}
                />
              </a>
            </div>

            <div
              style={{ backgroundColor: "#4d4d4f" }}
              className="px-5 py-5 py-5 px-5 rounded-2xl shadow-2xl"
            >
              <a
                href="https://www.facebook.com/quocwin.13"
                target="_blank"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  width={80}
                  height={80}
                />
              </a>
            </div>

            <div
              style={{ backgroundColor: "#4d4d4f" }}
              className="px-5 py-5 py-5 px-5 rounded-2xl shadow-2xl"
            >
              <a
                href="https://www.tiktok.com/@sunnywatch8002?_t=8hsVBKYfGD9&_r=1"
                target="_blank"
              >
                <Image
                  src="/assets/icons/tiktok.svg"
                  width={80}
                  height={80}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
