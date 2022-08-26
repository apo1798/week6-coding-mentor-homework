import Gallery01 from "../../public/images/info01.jpg";
import Gallery02 from "../../public/images/info02.jpg";
import Gallery03 from "../../public/images/info03.jpg";
import Gallery04 from "../../public/images/info04.jpg";

import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <section className="gallery-section container-fluid">
      <div className="row">
        {galleryContent.map((gallery) => (
          <GalleryCard
            key={gallery.title}
            image={gallery.image}
            title={gallery.title}
            icon={gallery.icon}
            text={gallery.text}
          />
        ))}
      </div>
    </section>
  );
};
export default Gallery;

const galleryContent = [
  {
    image: Gallery01,
    title: "對症下藥，專案製作",
    icon: "forum",
    text: "除了可以瘋狂提問之外\n還有機會一起完成專案",
  },
  {
    image: Gallery02,
    title: "激發你的學習潛力",
    icon: "tips_and_updates",
    text: "進度制課程安排&個人化學習建議\n有效管理你的學習動力",
  },
  {
    image: Gallery03,
    title: "學習效率",
    icon: "thumb_up",
    text: "針對學員狀況調整內容與步調\n學習精準最有效",
  },
  {
    image: Gallery04,
    title: "一對一指導",
    icon: "supervisor_account",
    text: "針對目的進行客製化課程安排\n快速的學以致用",
  },
];
