import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../UI/Title";
// import Image from "next/image";
import Image from "next/future/image";

import SildeImage from "../../public/images/share.jpg";
import TestimonialImage1 from "../../public/images/student01.jpg";
import TestimonialImage2 from "../../public/images/student02.jpg";
import TestimonialImage3 from "../../public/images/student03.jpg";
import TestimonialImage4 from "../../public/images/student04.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  return (
    <section className="bg-black pb-20">
      <div className="py-20 container slide-container">
        <Title
          title={"專屬你的學習課程\n超過 3000 位學員得到了程式超能力"}
          className="mb-16"
        />
        <div className="row justify-content-center">
          <div className="col-md-8 -translate-x-12 position-relative mb-40">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slideContent.map((slide) => (
                <SwiperSlide>
                  <div className="d-flex">
                    <div className="w-50 slide-image">
                      <img
                        src="./images/share.jpg"
                        className="rounded-24 back-white-outline w-100"
                      />
                    </div>
                    <div className="w-50 bg-white text-black p-8 testimonial-container align-self-end position-relative">
                      <Image
                        src={slide.image}
                        className="position-absolute rounded-circle end-0 top-0 translate-middle-y me-8"
                        width={100}
                        height={100}
                      />
                      <h6>{slide.title}</h6>
                      <p>{slide.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 p-12 d-flex bg-gray-900 rounded-24 align-items-center gap-12">
            <span class="material-icons fs-80">menu_book</span>
            <div className="flex-grow-1">
              <h6 className="mb-2 h3">加入我們成為導師</h6>
              <p className="mb-0">
                歡迎各大程式大神加入我們，用知識在世界留下一點影響力。
              </p>
            </div>
            <button className="btn btn-outline-light pt-2 px-8">
              立即預約
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slide;

const slideContent = [
  {
    image: TestimonialImage1,
    title: "老師很有耐心",
    text: "老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！",
  },
  {
    image: TestimonialImage2,
    title: "這段",
    text: "那個Pagination, Navigation是要怎麼對齊救命^______^",
  },
  {
    image: TestimonialImage3,
    title: "老師很有耐心",
    text: "老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！",
  },
  {
    image: TestimonialImage4,
    title: "老師很有耐心",
    text: "老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！",
  },
];
