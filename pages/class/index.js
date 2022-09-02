import Layout from "../../components/Layout/Layout";
import SiteTitle from "../../components/Layout/SiteTitle";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Teacher01 from "../../public/images/teacher01.jpg";
import Teacher02 from "../../public/images/teacher02.jpg";
import Teacher03 from "../../public/images/teacher03.jpg";
import Teacher04 from "../../public/images/teacher04.jpg";

const ClassPage = () => {
  return (
    <>
      <SiteTitle siteTitle="課程一覽" />
      <Layout>
        <nav className="container pt-10 pb-12">
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            breakpoints={{
              540: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              760: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay]}
            className="list-unstyled d-flex gap-4 flex-wrap d-md-none"
          >
            <SwiperSlide>
              <button className="btn-outline-primary btn py-4 px-8">
                所有課程
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn-outline-light btn py-4 px-8">
                行動應用開發
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn-outline-light btn py-4 px-8">
                資料庫/資料科學
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn-outline-light btn py-4 px-8">
                前端語言
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn-outline-light btn py-4 px-8">
                後端語言
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="btn-outline-light btn py-4 px-8">
                作業系統與伺服器
              </button>
            </SwiperSlide>
          </Swiper>
          <ul className="list-unstyled d-md-flex gap-4 flex-wrap d-none ">
            <li>
              <button className="btn-outline-primary btn py-4 px-8">
                所有課程
              </button>
            </li>
            <li>
              <button className="btn-outline-light btn py-4 px-8">
                行動應用開發
              </button>
            </li>
            <li>
              <button className="btn-outline-light btn py-4 px-8">
                資料庫/資料科學
              </button>
            </li>
            <li>
              <button className="btn-outline-light btn py-4 px-8">
                前端語言
              </button>
            </li>
            <li>
              <button className="btn-outline-light btn py-4 px-8">
                後端語言
              </button>
            </li>
            <li>
              <button className="btn-outline-light btn py-4 px-8">
                作業系統與伺服器
              </button>
            </li>
          </ul>
        </nav>
        <section className="container">
          {courseContent.map((course) => (
            <div
              key={course.title}
              className="d-flex px-6 py-8 p-lg-12 bg-gray-300 rounded-24 flex-column flex-lg-row gap-6 gap-lg-12 mb-6 mb-lg-8"
            >
              <div className="flex-shrink-0 text-center">
                <Image
                  src={course.image}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h6 className="mt-2 mb-0 text-center">{course.teacherName}</h6>
              </div>
              <div className="">
                <h4 className="mb-1 ">{course.title}</h4>
                <p className="text-primary mb-2">{course.category}</p>
                <p className="mb-0">{course.description}</p>
              </div>
              <div className="ps-lg-10 flex-shrink-0 text-center">
                <div className="mb-2">
                  <p className="mb-1 d-inline-block d-lg-block">
                    {course.time}
                  </p>
                  <p className="h2 font-Azeret fw-normal d-inline-block d-lg-block ms-2 ms-lg-0 fs-mobile-32">
                    {course.price}
                  </p>
                </div>
                {/* <div className="d-flex justify-content-center"> */}
                <Link href="/class/basic-html">
                  <a className="btn btn-outline-light rounded-8 py-2 px-8 px-sm-12 d-inline-block d-lg-block  me-2 mb-0 me-lg-0 mb-lg-2">
                    課程介紹
                  </a>
                </Link>
                <Link href="/class">
                  <a className="btn background-gradient text-white rounded-8 py-2 px-8 px-sm-12 link-dark d-inline-block d-lg-block mb-lg-2">
                    立即預約
                  </a>
                </Link>
                {/* </div> */}
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
};
export default ClassPage;

const courseContent = [
  {
    image: Teacher01,
    teacherName: "Belinda",
    title: "基礎前端 - HTML",
    category: "前端語言",
    description:
      "帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。",
    time: "50分鐘",
    price: "NT$1600",
  },
  {
    image: Teacher02,
    teacherName: "Guava",
    title: "2022 Python 全攻略｜從入門到實務",
    category: "後端語言",
    description:
      "Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態型別系統和垃圾回收功能，能夠自動管理記憶體使用，本堂課帶你無痛入門，開發簡單的應用！",
    time: "50分鐘",
    price: "NT$2200",
  },
  {
    image: Teacher03,
    teacherName: "Joe",
    title: "活用 Line Bot ｜APP 開發到上架完整實戰攻略",
    category: "行動應用開發",
    description:
      "Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡單的系統只會擷取輸入的關鍵字，再從語料庫中找尋最合適的應答句，本堂課會帶你了解 Line Bot 如何結合其他工具的應用。",
    time: "50分鐘",
    price: "NT$1800",
  },
  {
    image: Teacher04,
    teacherName: "Lina",
    title: "Linux 零基礎七天入門｜入門到實務",
    category: "作業系統與伺服器",
    description:
      "Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用工具。課程會一步一步帶著你走，讓你能夠從頭開始學習程式語言的基本語法。",
    time: "50分鐘",
    price: "NT$1100",
  },
];
