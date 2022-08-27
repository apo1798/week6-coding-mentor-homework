import Title from "../UI/Title";
import Image from "next/image";

import Teacher01 from "../../public/images/teacher01.jpg";
import Teacher02 from "../../public/images/teacher02.jpg";
import Teacher03 from "../../public/images/teacher03.jpg";
import Teacher04 from "../../public/images/teacher04.jpg";

import Link from "next/link";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <section className="course-section py-10 py-lg-20">
      <div className="container">
        <Title title="熱門推薦課程" className="mb-10 mb-lg-21" />
        <div className="row mb-6 mb-lg-12 gap-4 gap-md-0 gy-4 ">
          {courseContent.map((course) => (
            <CourseCard
              key={course.title}
              image={course.image}
              teacherName={course.teacherName}
              title={course.title}
              category={course.category}
              description={course.description}
              time={course.time}
              price={course.price}
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/">
            <a className="btn background-gradient-left link-dark text-white border-0 py-2 px-8 h6 mb-0 fs-6 rounded-8">
              所有課程列表
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Course;

const courseContent = [
  {
    image: Teacher01,
    teacherName: "Belinda",
    title: "基礎前端 - HTML",
    category: "前端語言",
    description:
      "帶領無基礎的平民老百姓，從最基礎的 HTML語法出發，使用最淺顯易懂的語言與生活隨處可見的例子...",
    time: "50分鐘",
    price: "NT$1600",
  },
  {
    image: Teacher02,
    teacherName: "Guava",
    title: "2022 Python 全攻略｜從入門到實務",
    category: "後端語言",
    description:
      "Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態...",
    time: "50分鐘",
    price: "NT$2200",
  },
  {
    image: Teacher03,
    teacherName: "Joe",
    title: "活用 Line Bot ｜APP 開發到上架完整實戰攻略",
    category: "行動應用開發",
    description:
      "Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡...",
    time: "50分鐘",
    price: "NT$1800",
  },
  {
    image: Teacher04,
    teacherName: "Lina",
    title: "Linux 零基礎七天入門｜入門到實務",
    category: "作業系統與伺服器",
    description:
      "Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用...",
    time: "50分鐘",
    price: "NT$1100",
  },
];
