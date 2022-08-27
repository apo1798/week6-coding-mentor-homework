import Title from "../UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const programmingLanguage = [
  "JavaScript",
  "HTML/CSS",
  "SQL",
  "Java",
  "SQL",
  "Bash/Shell",
  "Python",
  "Go",
  "TypeScript",
  "ReactJS",
  "VueJS",
  "AngularJS",
  "NextJS",
  "GatsbyJS",
  "SCSS",
  "TailwindCSS",
  "Less",
  "PHP",
  "C++",
];

const Programming = () => {
  return (
    <section className="programming-section bg-gray-300 py-10 py-lg-20">
      <Title title="你想要學習的程式，都在這裡" className="mb-10 mb-lg-16" />
      <div className="d-flex overflow-hidden ps-6 gap-4 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Autoplay]}
          breakpoints={{
            760: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            920: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1700: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
        >
          {programmingLanguage.map((language, i) => (
            <SwiperSlide
              className="p-4 py-lg-6 px-lg-8 rounded-8 border border-white flex-shrink-0 text-center"
              key={language + i}
            >
              {language}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Programming;
